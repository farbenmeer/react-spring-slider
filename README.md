# react-spring-slider

This is a slider which uses [react-spring](https://www.react-spring.io/) under 
the hood.

This project aims to be flexible through configuration as well as be easy to use 
by sane and reasonable defaults.

You can have a real life look how this can be used within storybook at: 
[farbenmeer.github.io/react-spring-slider](https://farbenmeer.github.io/react-spring-slider).

## Installation

```js
yarn add @farbenmeer/react-spring-slider
// OR
npm install --save @farbenmeer/react-spring-slider
```

## Usage

The module provides a default export which you can import and use in your own 
component.

```js
import Slider from '@farbenmeer/react-spring-slider';

const App = () => {
	return (
		<Slider>
			<div>child 1</div>
			<div>child 2</div>
			<div>child 3</div>
		</Slider>
	)
}
```

The slider can gain any children as long as there are a react node, so you can 
show images, text or some more complex components.

## Configuration

The slider currently provides the following interface:

```js
activeIndex: PropTypes.number, // the index to show, can be controlled
auto: PropTypes.number, // this number indicates the speed when the slider should be slide to next slide (milliseconds)
BulletComponent: PropTypes.func, // a custom component for the bullets
bulletStyle: PropTypes.objectOf(PropTypes.string), // custom styles for the bullets
children: PropTypes.node, // the children of the slider, every child is a single slide
hasBullets: PropTypes.bool, // whether the slider should have bullets or not
onSlideChange: PropTypes.func // a callback which is triggered when the slides changed either manually or automatically
```

Some option examples:
```js
import Slider from '@farbenmeer/react-spring-slider';

const App = () => {
	const onSlideChange = index => console.log(`changed to slide ${index}`);

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
		<Slider 
			activeIndex={2} 
			auto 
			hasBullets 
			BulletComponent={BulletComponent}
			onSlideChange={onSlideChange}}
			>
				<div>child 1</div>
				<div>child 2</div>
				<div>child 3</div>
		</Slider>
	)
}
```

Only a different bulletStyle:
```js
<Slider hasBullets bulletStyle={{backgroundColor: '#fff'}}>
	<MySlide />
	<MySlide />
	<MySlide />
</Slider>
```

## Contribution

Contributions are very welcome, we value everything from a bug report, feature 
request, ideas, pull requests or anything else.
Please keep in mind to provide as much and detailed informations as possible.
