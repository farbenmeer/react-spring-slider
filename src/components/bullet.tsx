import React from "react";
import styled from "styled-components";

export interface BulletProps {
	isActive: boolean;
	onClick: () => void;
	style: BulletStyle;
}

export type BulletComponentType = (props: BulletProps) => React.ReactElement;

export type BulletStyle = Record<string, string>;

const Bullet = styled.li<{ isActive: boolean }>`
	cursor: pointer;
	height: 15px;
	width: 15px;
	background-color: #333;
	border-radius: 50%;
	display: inline-block;
	margin: 0 2px;

	${({ isActive }) => (isActive ? "opacity: 0.5" : "")};
`;

export default Bullet;
