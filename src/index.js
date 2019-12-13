import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import clamp from "lodash/clamp";
import { useSprings, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import { useDebouncedCallback } from "use-debounce";

// eslint-disable-next-line import/no-unassigned-import
import "./index.css";

const Slider = ({ children, hasBullets, onSlideChange }) => {
	const slide = useRef(0);
	const sliderRef = useRef(null);
	const [width, setWidth] = useState(window.innerWidth);

	const [debouncedOnSlideChange] = useDebouncedCallback(index => {
		onSlideChange(index);
	}, 300);

	// Initialize slides with spring
	const [springProps, setSpringProps] = useSprings(children.length, i => ({
		x: i * width,
		display: "block"
	}));

	// Set the width correctly on mount
	useEffect(() => {
		if (sliderRef.current) {
			setWidth(sliderRef.current.parentElement.getBoundingClientRect().width);
		}
	}, []);

	// Resize handler in case the browser window gets resized
	useEffect(() => {
		const handleResize = () => {
			if (sliderRef.current) {
				setWidth(sliderRef.current.parentElement.getBoundingClientRect().width);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Run when window got resized to make sure slides are always in place
	useEffect(() => {
		setSpringProps(i => {
			const x = (i - slide.current) * width;
			return { x, display: "block" };
		});
	}, [setSpringProps, width]);

	// Drag binding to set on the element
	const bind = useDrag(
		({ down, movement: [xDelta], direction: [xDir], distance, cancel }) => {
			if (down && distance > width / 2)
				cancel(
					(slide.current = clamp(
						slide.current + (xDir > 0 ? -1 : 1),
						0,
						children.length - 1
					))
				);

			setSpringProps(i => {
				const x = (i - slide.current) * width + (down ? xDelta : 0);
				debouncedOnSlideChange(
					[...new Array(children.length).keys()].reverse()[x / width]
				);
				return { x, display: "block" };
			});
		}
	);

	// Jump to via bullets
	const jumpTo = index => () => {
		slide.current = index;

		setSpringProps(i => {
			const x = (i - slide.current) * width;
			return { x, display: "block" };
		});

		debouncedOnSlideChange(index);
	};

	// Sets pointer events none to every child and preserves styles
	const nonePointerChilds = children.map(child => {
		return {
			...child,
			props: {
				...child.props,
				style: {
					...child.props.style,
					pointerEvents: "none"
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
									onClick={jumpTo(index)}
								/>
							))}
						</ul>
					</div>
				)}
				{springProps.map(({ x, display }, index) => (
					<animated.div
						{...bind()}
						key={index} // eslint-disable-line react/no-array-index-key
						className="slider__slide"
						style={{
							display,
							transform: x.interpolate(x => `translate3d(${x}px,0,0)`)
						}}
					>
						<animated.div style={{ pointerEvents: "none" }}>
							{nonePointerChilds[index]}
						</animated.div>
					</animated.div>
				))}
			</div>
		</div>
	);
};

Slider.propTypes = {
	auto: PropTypes.number,
	children: PropTypes.node,
	hasBullets: PropTypes.bool,
	onSlideChange: PropTypes.func
};

Slider.defaultProps = {
	auto: 0,
	children: [],
	hasBullets: false,
	onSlideChange: () => {}
};

export default Slider;
