import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import clamp from 'lodash/clamp';
import {useSprings, animated} from 'react-spring';
import {useDrag} from 'react-use-gesture';

const Slider = ({children, bullets}) => {
  const index = useRef(0);

  const [props, set] = useSprings(children.length, i => ({
    x: i * window.innerWidth,
    sc: 1,
    display: 'block',
  }));

  const bind = useDrag(
    ({down, movement: [xDelta], direction: [xDir], distance, cancel}) => {
      if (down && distance > window.innerWidth / 2)
        cancel(
          (index.current = clamp(
            index.current + (xDir > 0 ? -1 : 1),
            0,
            children.length - 1,
          )),
        );

      set(i => {
        const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
        const sc = down ? 1 - distance / window.innerWidth / 2 : 1;
        return {x, sc, display: 'block'};
      });
    },
  );

  const jumpTo = i => () => {
    index.current = i;

    set(i => {
      const x = (i - index.current) * window.innerWidth;
      const sc = 1;
      return {x, sc, display: 'block'};
    });
  };

  const nonePointerChilds = children.map((child, index) => {
    return {
      ...child,
      props: {
        ...child.props,
        style: {...child.props.style, pointerEvents: 'none'},
      },
    };
  });

  return (
    <>
      {bullets && (
        <ul>
          {children.map((_, index) => (
            <li key={index}>
              <button onClick={jumpTo(index)}>{index}</button>
            </li>
          ))}
        </ul>
      )}
      {props.map(({x, display, sc}, i) => (
        <animated.div
          {...bind()}
          key={i}
          style={{
            display,
            transform: x.interpolate(x => `translate3d(${x}px,0,0)`),
          }}>
          <animated.div>{nonePointerChilds[i]}</animated.div>
        </animated.div>
      ))}
    </>
  );
};

Slider.propTypes = {
  children: PropTypes.node,
  bullets: PropTypes.bool,
};

Slider.defaultProps = {
  children: [],
  bullets: false,
};

export default Slider;
