import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useSprings, animated } from "react-spring";
import { useGesture } from "react-use-gesture";

import Arrow, {
	ArrowComponentType,
	ArrowStyle,
} from "./components/arrow/arrow";
import Bullet, {
	BulletComponentType,
	BulletStyle,
} from "./components/bullet/bullet";

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
	padding: 0;
	margin: 15px 0;
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
`;

const StyledSlider = styled.div`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 100%;
`;

const StyledSlide = styled.div`
	width: 100%;
	height: 100%;
	will-change: transform;
	user-select: none;
`;

export interface SliderProps {
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
	setSlideCustom?: (slide: number) => number;
	slidesAtOnce?: number;
}

const clamp = (input: number, lower: number, upper: number) =>
	Math.min(Math.max(input, lower), upper);

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
	onSlideChange = () => undefined,
	setSlideCustom = undefined,
	slidesAtOnce = 1,
}) => {
	const sliderRef = useRef<HTMLDivElement>(null);
	const [slide, setSlideOriginal] = useState(0);
	const setSlide = setSlideCustom
		? (index: number) => setSlideOriginal(setSlideCustom(index))
		: setSlideOriginal;
	const [isDragging, setDragging] = useState(false);

	// Initialize slides with spring
	const [springProps, setSpringProps] = useSprings(
		children.length,
		(index) => ({
			offset: index,
		})
	);

	// Bindings to set on the element
	const gestureBinds = useGesture(
		{
			onDrag: ({
				down,
				movement: [xDelta],
				direction: [xDir],
				distance,
				cancel,
				first,
				active,
			}) => {
				if (first) {
					setDragging(true);
				}
				if (sliderRef && sliderRef.current && sliderRef.current.parentElement) {
					const {
						width,
					} = sliderRef.current.parentElement.getBoundingClientRect();

					if (down && distance > width / 2) {
						if (cancel) cancel();
						if (active) {
							setSlide(
								clamp(
									slide + (xDir > 0 ? -1 : 1),
									0,
									children.length - slidesAtOnce
								)
							);
						}
					}

					// see:  https://github.com/react-spring/react-spring/issues/861
					// @ts-ignore
					setSpringProps((index) => ({
						offset: (active && down ? xDelta : 0) / width + (index - slide),
					}));
				}
			},
			onClick: () => {
				if (isDragging) {
					setDragging(false);
					return;
				}
				clickOnSlide(slide);
			},
		},
		{
			drag: {
				delay: 200,
			},
		}
	);

	// Triggered on slide change
	useEffect(() => {
		// see:  https://github.com/react-spring/react-spring/issues/861
		// @ts-ignore
		setSpringProps((index) => ({ offset: index - slide }));
		onSlideChange(slide);
	}, [slide, setSpringProps, onSlideChange]);

	// Effect for autosliding
	useEffect(() => {
		let interval: number;

		if (auto > 0) {
			interval = setInterval(() => {
				const targetIndex = (slide + 1) % children.length;
				setSlide(targetIndex);
			}, auto);
		}

		return () => {
			if (interval) clearInterval(interval);
		};
	}, [auto, children.length, slide]);

	// Jump to slide index when prop changes
	useEffect(() => {
		setSlide(activeIndex % children.length);
	}, [activeIndex, children.length]);

	// Sets pointer events none to every child and preserves styles
	const childs = children.map((child, index) => (
		<StyledSlide key={index}>{child}</StyledSlide> // eslint-disable-line react/no-array-index-key
	));

	// Calls onClick on the current slide
	const clickOnSlide = (slideIndex: number) => {
		childs[slideIndex].props.children.props.onClick &&
			childs[slideIndex].props.children.props.onClick();
	};

	const nextSlide = () => {
		if (slide === children.length - slidesAtOnce) {
			setSlide(0);
			return;
		}

		setSlide(slide + 1);
	};

	const previousSlide = () => {
		if (slide === 0) {
			setSlide(children.length - slidesAtOnce);
			return;
		}

		setSlide(slide - 1);
	};

	const bullets = () => {
		const arr = [];
		for (let index = 0; index <= children.length - slidesAtOnce; index++) {
			arr.push(
				<Bullet
					key={index} // eslint-disable-line react/no-array-index-key
					index={index}
					BulletComponent={BulletComponent}
					setSlide={setSlide}
					activeIndex={slide}
					bulletStyle={bulletStyle}
				/>
			);
		}

		return arr;
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
						<StyledBulletList>{bullets()}</StyledBulletList>
					</StyledBullets>
				)}
				{springProps.map(({ offset }, index) => (
					<animated.div
						{...gestureBinds()}
						key={index} // eslint-disable-line react/no-array-index-key
						className="slider__slide"
						style={{
							transform: offset.interpolate(
								(offsetX) => `translate3d(${offsetX * 100}%, 0, 0)`
							),
							position: "absolute",
							width: `${100 / slidesAtOnce}%`,
							height: "100%",
							willChange: "transform",
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
