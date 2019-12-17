import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
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

const imageStyle = src => ({
	backgroundSize: 'cover',
	backgroundImage: `url(${src})`,
	height: '100%',
	width: '100%'
});

storiesOf('Slider', module)
	.add('default', () => (
		<div style={{width: '100vw', height: '100vh'}}>
			<Slider hasBullets onSlideChange={onSlideChange}>
				{images.map(image => (
					<div key={image}>
						<div draggable="false" style={imageStyle(image)} />
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
						<div draggable="false" style={imageStyle(image)} />
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
						<div draggable="false" style={imageStyle(image)} />
					</div>
				))}
			</Slider>
		</div>
	))
	.add('With activeIndex (2)', () => (
		<div style={{width: '100vw', height: '100vh'}}>
			<Slider hasBullets activeIndex={2}>
				{images.map(image => (
					<div key={image}>
						<div draggable="false" style={imageStyle(image)} />
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
				<Slider hasBullets activeIndex={activeIndex}>
					{images.map(image => (
						<div key={image}>
							<div draggable="false" style={imageStyle(image)} />
						</div>
					))}
				</Slider>
			</div>
		);
	})
	.add('With different `bulletStyle`', () => {
		return (
			<div style={{width: '100vw', height: '100vh'}}>
				<Slider hasBullets bulletStyle={{backgroundColor: '#fff'}}>
					{images.map(image => (
						<div key={image}>
							<div draggable="false" style={imageStyle(image)} />
						</div>
					))}
				</Slider>
			</div>
		);
	})
	.add('With custom `bullets`', () => {
		const BulletComponent = ({onClick, isActive}) => (
			<li
				style={{
					width: '25px',
					height: '25px',
					backgroundColor: 'red',
					margin: '0 2px',
					opacity: isActive && '0.5'
				}}
				onClick={onClick}
			/>
		);

		BulletComponent.propTypes = {
			onClick: PropTypes.func.isRequired,
			isActive: PropTypes.bool.isRequired
		};

		return (
			<div style={{width: '100vw', height: '100vh'}}>
				<Slider hasBullets BulletComponent={BulletComponent}>
					{images.map(image => (
						<div key={image}>
							<div draggable="false" style={imageStyle(image)} />
						</div>
					))}
				</Slider>
			</div>
		);
	});
