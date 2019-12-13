import React, {useState, useEffect} from 'react';
import {storiesOf} from '@storybook/react';

import Slider from '.';

const images = [
	'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
];

const onSlideChange = index => {
	console.log(`Slide changed to: ${index}`);
};

storiesOf('Slider', module)
	.add('default', () => (
		<div style={{width: '100vw', height: '100vh'}}>
			<Slider hasBullets onSlideChange={onSlideChange}>
				{images.map(image => (
					<div key={image}>
						<img draggable="false" src={image} />
					</div>
				))}
			</Slider>
		</div>
	))
	.add('smaller than 100%', () => (
		<div style={{width: '500px', height: '500px'}}>
			<Slider hasBullets>
				{images.map(image => (
					<div key={image}>
						<img draggable="false" src={image} />
					</div>
				))}
			</Slider>
		</div>
	))
	.add('with auto sliding', () => (
		<div style={{width: '100vw', height: '100vh'}}>
			<Slider bullets auto={2000}>
				{images.map(image => (
					<div key={image}>
						<img draggable="false" src={image} />
					</div>
				))}
			</Slider>
		</div>
	))
	.add('With activeIndex (interval)', () => {
		const [activeIndex, setActiveIndex] = useState(2);

		useEffect(() => {
			const id = setInterval(() => {
				const index = activeIndex + (1 % images.length);
				setActiveIndex(index);
			}, 2000);

			return () => {
				clearInterval(id);
			};
		});

		return (
			<div style={{width: '100vw', height: '100vh'}}>
				<Slider bullets activeIndex={activeIndex}>
					{images.map(image => (
						<div key={image}>
							<img draggable="false" src={image} />
						</div>
					))}
				</Slider>
			</div>
		);
	});
