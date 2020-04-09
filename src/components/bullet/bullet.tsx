import React from 'react';
import styled from 'styled-components';

interface BulletProps {
	BulletComponent?: BulletComponentType;
	bulletStyle?: BulletStyle;
	index: number;
	setSlide: (index: number) => void;
	activeIndex: number;
}

export type BulletComponentType = (
	props: BulletComponentProps
) => React.ReactElement;

export interface BulletStyle {
	[key: string]: string;
}

const StyledBullet = styled.li<{active: boolean}>`
	cursor: pointer;
	height: 15px;
	width: 15px;
	background-color: #333;
	border-radius: 50%;
	display: inline-block;
	margin: 0 2px;

	${({active}) => (active ? 'opacity: 0.5' : '')};
`;

interface BulletComponentProps {
	isActive: boolean;
	onClick: () => void;
}

const Bullet: React.FunctionComponent<BulletProps> = ({
	/* eslint-disable react/prop-types */
	index,
	BulletComponent,
	setSlide,
	activeIndex,
	bulletStyle
	/* eslint-enable react/prop-types */
}) => {
	const updateSlide = (): void => {
		setSlide(index);
	};

	if (BulletComponent) {
		return (
			<BulletComponent
				key={index}
				isActive={index === activeIndex}
				onClick={updateSlide}
			/>
		);
	}

	return (
		<StyledBullet
			key={index}
			active={index === activeIndex}
			style={bulletStyle}
			onClick={updateSlide}
		/>
	);
};

Bullet.defaultProps = {
	BulletComponent: undefined,
	bulletStyle: {}
};

export default Bullet;
