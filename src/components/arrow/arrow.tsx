import React from 'react';

// eslint-disable-next-line import/no-unassigned-import
import './arrow.css';

interface ArrowProps {
	ArrowComponent?: ArrowComponentType,
	arrowStyle?: ArrowStyle,
	direction: Direction,
	onClick: () => void,
}

export type ArrowComponentType = (props: ArrowComponentProps) => React.ReactElement

type Direction = "left" | "right"

interface ArrowComponentProps {
	direction: Direction,
	onClick: () => void,
}

export interface ArrowStyle {
	[key: string]: string
}

const Arrow: React.FunctionComponent<ArrowProps> = ({ArrowComponent, arrowStyle, onClick, direction}) => {
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

Arrow.defaultProps = {
	ArrowComponent: undefined,
	arrowStyle: {}
};

export default Arrow;
