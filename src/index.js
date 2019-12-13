import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import clamp from "lodash/clamp";
import { useSprings, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import { useDebouncedCallback } from "use-debounce";

import "./index.css";

const Slider = ({ children, bullets, onSlideChange }) => {
  const slide = useRef(0);
  const sliderRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);

  const [debouncedOnSlideChange] = useDebouncedCallback(index => {
    onSlideChange(index);
  }, 300);

  // initialize slides with spring
  const [props, set] = useSprings(children.length, i => ({
    x: i * width,
    display: "block"
  }));

  // set the width correctly on mount
  useEffect(() => {
    sliderRef.current &&
      setWidth(sliderRef.current.parentElement.getBoundingClientRect().width);
  }, [sliderRef.current]);

  // resize handler in case the browser window gets resized
  useEffect(() => {
    const handleResize = () => {
      sliderRef.current &&
        setWidth(sliderRef.current.parentElement.getBoundingClientRect().width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sliderRef.current]);

  // run when window got resized to make sure slides are always in place
  useEffect(() => {
    set(i => {
      const x = (i - slide.current) * width;
      return { x, display: "block" };
    });
  }, [width]);

  // drag binding to set on the element
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

      set(i => {
        const x = (i - slide.current) * width + (down ? xDelta : 0);
        debouncedOnSlideChange(
          [...Array(children.length).keys()].reverse()[x / width]
        );
        return { x, display: "block" };
      });
    }
  );

  // jump to via bullets
  const jumpTo = index => () => {
    slide.current = index;

    set(i => {
      const x = (i - slide.current) * width;
      return { x, display: "block" };
    });

    debouncedOnSlideChange(index);
  };

  // sets pointer events none to every child and preserves styles
  const nonePointerChilds = children.map((child, index) => {
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
        {bullets && (
          <div className="slider__bullets">
            <ul className="slider__bullets__list">
              {children.map((_, index) => (
                <li
                  className="slider__bullets__list__item"
                  key={index}
                  onClick={jumpTo(index)}
                ></li>
              ))}
            </ul>
          </div>
        )}
        {props.map(({ x, display }, i) => (
          <animated.div
            {...bind()}
            key={i}
            className="slider__slide"
            style={{
              display,
              transform: x.interpolate(x => `translate3d(${x}px,0,0)`)
            }}
          >
            <animated.div style={{ pointerEvents: "none" }}>
              {nonePointerChilds[i]}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.node,
  bullets: PropTypes.bool,
  onSlideChange: PropTypes.func
};

Slider.defaultProps = {
  children: [],
  bullets: false,
  onSlideChange: () => {}
};

export default Slider;
