import React from "react";
import styled from "styled-components";

interface ArrowProps {
	style?: ArrowStyle;
	direction: Direction;
	onClick: () => void;
}

export type ArrowComponentType = (props: ArrowProps) => React.ReactElement;

type Direction = "left" | "right";

export type ArrowStyle = Record<string, string>;

const StyledI = styled.i<{ direction: string }>`
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

	transform: ${({ direction }) =>
		direction === "left" ? "rotate(135deg)" : "rotate(-45deg)"};

	${({ direction }) =>
		direction === "left" ? "margin-left: 1em;" : "margin-right: 1em;"}
`;

const Arrow: React.FunctionComponent<ArrowProps> = ({
	style,
	onClick,
	direction,
}) => {
	return (
		<a onClick={onClick}>
			<StyledI style={style} direction={direction} />
		</a>
	);
};

export default Arrow;
