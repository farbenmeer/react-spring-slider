import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// eslint-disable-next-line import/no-unassigned-import
import './bullet.css';

const Bullet = ({
	index,
	BulletComponent,
	setSlide,
	activeIndex,
	bulletStyle
}) => {
	if (BulletComponent) {
		return (
			<BulletComponent
				key={index}
				isActive={index === activeIndex}
				onClick={() => setSlide(index)}
			/>
		);
	}

	return (
		<li
			key={index}
			className={classnames('slider__bullets__list__item', {
				'slider__bullets__list__item--active': index === activeIndex
			})}
			style={bulletStyle}
			onClick={() => setSlide(index)}
		/>
	);
};

Bullet.propTypes = {
	activeIndex: PropTypes.number.isRequired,
	BulletComponent: PropTypes.func,
	bulletStyle: PropTypes.objectOf(PropTypes.string),
	index: PropTypes.number.isRequired,
	setSlide: PropTypes.func.isRequired
};

Bullet.defaultProps = {
	BulletComponent: null,
	bulletStyle: {}
};

export default Bullet;
