import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-unassigned-import
import './arrow.css';

const Arrow = ({ArrowComponent, arrowStyle, onClick, direction}) => {
	if (ArrowComponent) {
		return <ArrowComponent direction={direction} onClick={onClick} />;
	}

	return (
		<>
			<a onClick={onClick}>
				<i
					className={`slider__arrows__arrow slider__arrows__arrow--${direction}`}
					style={arrowStyle}
				/>
			</a>
		</>
	);
};

Arrow.propTypes = {
	ArrowComponent: PropTypes.func,
	arrowStyle: PropTypes.objectOf(PropTypes.string),
	direction: PropTypes.oneOf(['left', 'right']).isRequired,
	onClick: PropTypes.func.isRequired
};

Arrow.defaultProps = {
	ArrowComponent: null,
	arrowStyle: {}
};

export default Arrow;
