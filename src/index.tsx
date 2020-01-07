import React, { useRef, useState, useEffect } from "react";
import styled from 'styled-components';
import { useSprings, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

import { Arrow, Bullet } from "./components";

import { ArrowComponentType, ArrowStyle } from "./components/arrow/arrow";
import { BulletComponentType, BulletStyle } from "./components/bullet/bullet";

const StyledSliderArrows = styled.div`
	top: 50%;
	position: absolute;
	width: 100%;
	z-index: 1;
	display: flex;
	justify-content: space-between;
`;

const StyledBulletList = styled.ul`
	display: flex;
	justify-content: center;
	list-style-type: none;
`;

const StyledBullets = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	z-index: 1;
`;

const StyledWrapper = styled.div`
	width: 100%;
	height: 100%;
`

const StyledSlider = styled.div`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 100%;
`

const StyledSlide = styled.div`
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	width: 100%;
	height: 100%;
	will-change: transform;
	box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5),
		0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
	user-select: none;
	pointer-events: none;
`

interface SliderProps {
	activeIndex?: number;
	ArrowComponent?: ArrowComponentType;
	arrowStyle?: ArrowStyle;
	auto?: number;
	BulletComponent?: BulletComponentType;
	bulletStyle?: BulletStyle;
	children?: React.ReactNode[];
	hasArrows?: boolean;
	hasBullets?: boolean;
	onSlideChange?: (slide: number) => void;
}

const clamp = (number: number, lower: number, upper: number) =>
	Math.min(Math.max(number, lower), upper);

const Slider: React.FunctionComponent<SliderProps> = ({
	activeIndex = 0,
	ArrowComponent,
	arrowStyle = {},
	auto = 0,
	BulletComponent,
	bulletStyle = {},
	children = [],
	hasArrows = false,
	hasBullets = false,
	onSlideChange = () => {}
}) => {
	const sliderRef = useRef<HTMLDivElement>(null);
	const [slide, setSlide] = useState(0);

	// Initialize slides with spring
	const [springProps, setSpringProps] = useSprings(children.length, index => ({
		offset: index
	}));

	// Drag binding to set on the element
	const bind = useDrag(
		({ down, movement: [xDelta], direction: [xDir], distance, cancel }) => {
			if (sliderRef && sliderRef.current && sliderRef.current.parentElement) {
				const {
					width
				} = sliderRef.current.parentElement.getBoundingClientRect();

				if (down && distance > width / 2) {
					cancel && cancel();
					setSlide(clamp(slide + (xDir > 0 ? -1 : 1), 0, children.length - 1));
				}
				//@ts-ignore
				setSpringProps(index => ({
					offset: (down ? xDelta : 0) / width + (index - slide)
				}));
			}
		}
	);

	// Triggered on slide change
	useEffect(() => {
		//@ts-ignore
		setSpringProps(index => ({ offset: index - slide }));
		onSlideChange(slide);
	}, [slide, setSpringProps, onSlideChange]);

	// Effect for autosliding
	useEffect(() => {
		let interval: NodeJS.Timeout;

		if (auto > 0) {
			interval = setInterval(() => {
				const targetIndex = (slide + 1) % children.length;
				setSlide(targetIndex);
			}, auto);
		}

		return () => {
			interval && clearInterval(interval);
		};
	}, [auto, children.length, slide]);

	// Jump to slide index when prop changes
	useEffect(() => {
		setSlide(activeIndex % children.length);
	}, [activeIndex, children.length]);

	// Sets pointer events none to every child and preserves styles
	const childs = children.map(child => <StyledSlide>{child}</StyledSlide>);

	const nextSlide = () => {
		if (slide === children.length - 1) {
			setSlide(0);
			return;
		}

		setSlide(slide + 1);
	};

	const previousSlide = () => {
		if (slide === 0) {
			setSlide(children.length - 1);
			return;
		}

		setSlide(slide - 1);
	};

	return (
		<StyledWrapper ref={sliderRef}>
			<StyledSlider>
				{hasArrows && (
					<StyledSliderArrows>
						<Arrow
							ArrowComponent={ArrowComponent}
							arrowStyle={arrowStyle}
							direction="left"
							onClick={previousSlide}
						/>
						<Arrow
							ArrowComponent={ArrowComponent}
							arrowStyle={arrowStyle}
							direction="right"
							onClick={nextSlide}
						/>
					</StyledSliderArrows>
				)}
				{hasBullets && (
					<StyledBullets>
						<StyledBulletList>
							{children.map((_, index) => (
								<Bullet
									key={index} // eslint-disable-line react/no-array-index-key
									index={index}
									BulletComponent={BulletComponent}
									setSlide={setSlide}
									activeIndex={slide}
									bulletStyle={bulletStyle}
								/>
							))}
						</StyledBulletList>
					</StyledBullets>
				)}
				{springProps.map(({ offset }, index) => (
					<animated.div
						{...bind()}
						key={index} // eslint-disable-line react/no-array-index-key
						className="slider__slide"
						style={{
							transform: offset.interpolate(
								offset => `translate3d(${offset * 100}%, 0, 0)`
							),
							position: 'absolute',
							width: '100%',
							height: '100%',
							willChange: 'transform'
						}}
					>
						{childs[index]}
					</animated.div>
				))}
			</StyledSlider>
		</StyledWrapper>
	);
};

export default Slider;
