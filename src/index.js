import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import clamp from "lodash/clamp";
import { useSprings, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

import "./index.css";

const Slider = ({ children, bullets }) => {
  const index = useRef(0);
  const [width, setWidth] = useState(window.innerWidth);

  // initialize slides with spring
  const [props, set] = useSprings(children.length, i => ({
    x: i * window.innerWidth,
    sc: 1,
    display: "block"
  }));

  // resize handler in case the browser window gets resized
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // run when window got resized to make sure slides are always in place
  useEffect(() => {
    set(i => {
      const x = (i - index.current) * width;
      const sc = 1;
      return { x, sc, display: "block" };
    });
  }, [width]);

  // drag binding to set on the element
  const bind = useDrag(
    ({ down, movement: [xDelta], direction: [xDir], distance, cancel }) => {
      if (down && distance > width / 2)
        cancel(
          (index.current = clamp(
            index.current + (xDir > 0 ? -1 : 1),
            0,
            children.length - 1
          ))
        );

      set(i => {
        const x = (i - index.current) * width + (down ? xDelta : 0);
        const sc = down ? 1 - distance / width / 2 : 1;
        return { x, sc, display: "block" };
      });
    }
  );

  // jump to via bullets
  const jumpTo = i => () => {
    index.current = i;

    set(i => {
      const x = (i - index.current) * width;
      const sc = 1;
      return { x, sc, display: "block" };
    });
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
    <div className="slider__wrapper">
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
        {props.map(({ x, display, sc }, i) => (
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
  bullets: PropTypes.bool
};

Slider.defaultProps = {
  children: [],
  bullets: false
};

export default Slider;
