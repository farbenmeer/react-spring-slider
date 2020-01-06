import React, {useRef, useState, useEffect} from 'react';
import {useSprings, animated} from 'react-spring';
import {useDrag} from 'react-use-gesture';

import {Arrow, Bullet} from './components';

// eslint-disable-next-line import/no-unassigned-import
import './index.css';
import { ArrowComponentType, ArrowStyle } from './components/arrow/arrow';
import { BulletComponentType, BulletStyle } from './components/bullet/bullet';

interface SliderProps {
	activeIndex?: number,
	ArrowComponent?: ArrowComponentType,
	arrowStyle?: ArrowStyle,
	auto?: number,
	BulletComponent?: BulletComponentType,
	bulletStyle?: BulletStyle,
	children?: React.ReactNode[],
	hasArrows?: boolean,
	hasBullets?: boolean,
	onSlideChange?: (slide: number) => void,
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
	onSlideChange = () => {},
}) => {
	const sliderRef = useRef<HTMLDivElement>(null);
	const [slide, setSlide] = useState(0);

	// Initialize slides with spring
	const [springProps, setSpringProps] = useSprings(children.length, index => ({
		offset: index
	}));

	// Drag binding to set on the element
	const bind = useDrag(
		({down, movement: [xDelta], direction: [xDir], distance, cancel}) => {
			if (sliderRef && sliderRef.current && sliderRef.current.parentElement) {
				const {width} = sliderRef.current.parentElement.getBoundingClientRect();

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
		setSpringProps(index => ({offset: index - slide}));
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

		return () => interval && clearInterval(interval);
	}, [auto, children.length, slide]);

	// Jump to slide index when prop changes
	useEffect(() => {
		setSlide(activeIndex % children.length);
	}, [activeIndex, children.length]);

	// Sets pointer events none to every child and preserves styles
	const nonePointerChilds = children.map(child => {
		return {
			//@ts-ignore
			...child,
			props: {
				...child.props,
				style: {
					...child.props.style,
					pointerEvents: 'none'
				}
			}
		};
	});

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
		<div ref={sliderRef} className="slider__wrapper">
			<div className="slider">
				{hasArrows && (
					<div className="slider__arrows">
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
					</div>
				)}
				{hasBullets && (
					<div className="slider__bullets">
						<ul className="slider__bullets__list">
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
						</ul>
					</div>
				)}
				{springProps.map(({offset}, index) => (
					<animated.div
						{...bind()}
						key={index} // eslint-disable-line react/no-array-index-key
						className="slider__slide"
						style={{
							transform: offset.interpolate(
								offset => `translate3d(${offset * 100}%, 0, 0)`
							)
						}}
					>
						{nonePointerChilds[index]}
					</animated.div>
				))}
			</div>
		</div>
	);
};

export default Slider;
