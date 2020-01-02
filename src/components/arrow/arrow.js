import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-unassigned-import
import './arrow.css';

const Arrow = ({onClick, direction}) => {
	return (
		<>
			<a onClick={onClick}>
				<i
					className={`slider__arrows__arrow slider__arrows__arrow--${direction}`}
				/>
			</a>
		</>
	);
};

Arrow.propTypes = {
	direction: PropTypes.oneOf(['left', 'right']).isRequired,
	onClick: PropTypes.func.isRequired
};

export default Arrow;
