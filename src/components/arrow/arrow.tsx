import React from 'react';
import styled from 'styled-components';

interface ArrowProps {
	ArrowComponent?: ArrowComponentType;
	arrowStyle?: ArrowStyle;
	direction: Direction;
	onClick: () => void;
}

export type ArrowComponentType = (
	props: ArrowComponentProps
) => React.ReactElement;

type Direction = 'left' | 'right';

interface ArrowComponentProps {
	direction: Direction;
	onClick: () => void;
}

export type ArrowStyle = Record<string, string>;

const StyledI = styled.i<{direction: string}>`
	border: solid #333;
	border-width: 0 5px 5px 0;
	display: inline-block;
	padding: 3px;
	height: 20px;
	width: 20px;
	cursor: pointer;

	&:hover {
		opacity: 0.4;
	}

	transform: ${({direction}) =>
		direction === 'left' ? 'rotate(135deg)' : 'rotate(-45deg)'};

	${({direction}) =>
		direction === 'left' ? 'margin-left: 1em;' : 'margin-right: 1em;'}
`;

const Arrow: React.FunctionComponent<ArrowProps> = ({
	/* eslint-disable react/prop-types */
	ArrowComponent,
	arrowStyle,
	onClick,
	direction
	/* eslint-enable react/prop-types */
}) => {
	if (ArrowComponent) {
		return <ArrowComponent direction={direction} onClick={onClick} />;
	}

	return (
		<a onClick={onClick}>
			<StyledI style={arrowStyle} direction={direction} />
		</a>
	);
};

Arrow.defaultProps = {
	ArrowComponent: undefined,
	arrowStyle: {}
};

export default Arrow;
