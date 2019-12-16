import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSprings, animated} from 'react-spring';
import {useDrag} from 'react-use-gesture';

// eslint-disable-next-line import/no-unassigned-import
import './index.css';

const clamp = (number, lower, upper) =>
	Math.min(Math.max(number, lower), upper);

const Slider = ({activeIndex, auto, children, hasBullets, onSlideChange}) => {
	const sliderRef = useRef(null);
	const [slide, setSlide] = useState(0);

	// Initialize slides with spring
	const [springProps, setSpringProps] = useSprings(children.length, index => ({
		offset: index
	}));

	// Drag binding to set on the element
	const bind = useDrag(
		({down, movement: [xDelta], direction: [xDir], distance, cancel}) => {
			const {width} = sliderRef.current.parentElement.getBoundingClientRect();

			if (down && distance > width / 2) {
				cancel();
				setSlide(clamp(slide + (xDir > 0 ? -1 : 1), 0, children.length - 1));
			}

			setSpringProps(index => ({
				offset: (down ? xDelta : 0) / width + (index - slide)
			}));
		}
	);

	// Triggered on slide change
	useEffect(() => {
		setSpringProps(index => ({offset: index - slide}));
		onSlideChange(slide);
	}, [slide, setSpringProps, onSlideChange]);

	// Effect for autosliding
	useEffect(() => {
		let interval;

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

	return (
		<div ref={sliderRef} className="slider__wrapper">
			<div className="slider">
				{hasBullets && (
					<div className="slider__bullets">
						<ul className="slider__bullets__list">
							{children.map((_, index) => (
								<li
									key={index} // eslint-disable-line react/no-array-index-key
									className="slider__bullets__list__item"
									onClick={() => setSlide(index)}
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

Slider.propTypes = {
	activeIndex: PropTypes.number,
	auto: PropTypes.number,
	children: PropTypes.node,
	hasBullets: PropTypes.bool,
	onSlideChange: PropTypes.func
};

Slider.defaultProps = {
	activeIndex: 0,
	auto: 0,
	children: [],
	hasBullets: false,
	onSlideChange: () => {}
};

export default Slider;
