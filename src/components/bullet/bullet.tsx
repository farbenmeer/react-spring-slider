import React from 'react';
import classnames from 'classnames';

// eslint-disable-next-line import/no-unassigned-import
import './bullet.css';

interface BulletProps {
	BulletComponent?: BulletComponentType,
	bulletStyle?: BulletStyle,
	index: number,
	setSlide: (index: number) => void,
	activeIndex: number,
}

export type BulletComponentType = (props: BulletComponentProps) => React.ReactElement

export interface BulletStyle {
	[key: string]: string
}

interface BulletComponentProps {
	isActive: boolean,
	onClick: () => void,
}

const Bullet: React.FunctionComponent<BulletProps> = ({
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

Bullet.defaultProps = {
	BulletComponent: undefined,
	bulletStyle: {}
};

export default Bullet;
