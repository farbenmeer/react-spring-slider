import React from "react";
import styled from "styled-components";

export interface BulletsProps {
	children: React.ReactElement;
}

export type BulletsComponentType = (props: BulletsProps) => React.ReactElement;

const Bullets = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	z-index: 1;
`;

export default Bullets;
