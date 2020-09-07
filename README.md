# react-spring-slider

[![Hits-of-Code](https://hitsofcode.com/github/farbenmeer/react-spring-slider)](https://hitsofcode.com/view/github/farbenmeer/react-spring-slider)
![Version](https://img.shields.io/npm/v/@farbenmeer/react-spring-slider?style=flat-square)
[![Minified Size](https://img.shields.io/bundlephobia/min/@farbenmeer/react-spring-slider?style=flat-square)](https://img.shields.io/bundlephobia/min/@farbenmeer/react-spring-slider?style=flat-square)
[![Minified Zipped Size](https://img.shields.io/bundlephobia/minzip/@farbenmeer/react-spring-slider?style=flat-square)](https://img.shields.io/bundlephobia/minzip/@farbenmeer/react-spring-slider?style=flat-square)
![License](https://img.shields.io/github/license/farbenmeer/react-spring-slider?style=flat-square)

1. [General](#general)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Configuration](#configuration)
5. [More Examples](#more-examples)
6. [Contribution](#contribution)

## General

This is a slider which uses [react-spring](https://www.react-spring.io/) under
the hood.

This project aims to be flexible through configuration as well as be easy to use
by sane and reasonable defaults.

You can have a real life look how this can be used within storybook [(source)](./src/index.stories.tsx) at:
[farbenmeer.github.io/react-spring-slider](https://farbenmeer.github.io/react-spring-slider/).

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
import Slider from "@farbenmeer/react-spring-slider";

const App = () => {
	return (
		<Slider>
			<div>child 1</div>
			<div>child 2</div>
			<div>child 3</div>
		</Slider>
	);
};
```

The slider can gain any children as long as there are a react node, so you can
show images, text or some more complex components.

You can also use Typescript as the package contains type definitions.

## Configuration

The slider currently provides the following interface:

| Name            | Type     | Default |                                                                                                 Description |
| --------------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------: |
| activeIndex     | number   | 0       |                                                                                  Controlles the shown index |
| ArrowComponent  | function | -       |                                                                           A custom component for the arrows |
| auto            | number   | 0       | 0 = disabled auto sliding. Indicates the pausing time in milliseconds per slide before next slide is shown. |
| BulletComponent | function | -       |                                                                          A custom component for the bullets |
| bulletStyle     | object   | { }     |                                                                               custom styles for the bullets |
| children        | node     | [ ]     |                                                   The children of the slider, every child is a single slide |
| hasArrows       | boolean  | false   |                                                                Whether the slider should have arrows or not |
| hasBullets      | boolean  | false   |                                                               Whether the slider should have bullets or not |
| onSlideChange   | function | -       |                        Callback which is triggered when the slides changed either manually or automatically |
| setSlideCustom  | function | -       |                                                    A function to overwrite the default `setSlide` behavior. |
| slidesAtOnce    | number   | 1       |                                          A number which represents how many slides should be shown at once. |

## More examples

### Custom bulletStyle

```js
<Slider hasBullets bulletStyle={{ backgroundColor: "#fff" }}>
	<MySlide />
	<MySlide />
	<MySlide />
</Slider>
```

### Fully customized

```js
import Slider from "@farbenmeer/react-spring-slider";

const App = () => {
	const onSlideChange = (index) => console.log(`changed to slide ${index}`);
	const setSlideCustom = () => 1;

	const BulletComponent = ({ onClick, isActive }) => (
		<li
			style={{
				width: "25px",
				height: "25px",
				backgroundColor: "red",
				margin: "0 2px",
				opacity: isActive && "0.5",
			}}
			onClick={onClick}
		/>
	);

	BulletComponent.propTypes = {
		onClick: PropTypes.func.isRequired,
		isActive: PropTypes.bool.isRequired,
	};

	const ArrowComponent = ({ onClick, direction }) => {
		return (
			<div
				style={{
					border: "1px solid black",
					padding: "1em",
					backgroundColor: "white",
				}}
				onClick={onClick}
			>
				{direction}
			</div>
		);
	};

	ArrowComponent.propTypes = {
		onClick: PropTypes.func.isRequired,
		direction: PropTypes.string.isRequired,
	};

	return (
		<Slider
			activeIndex={2}
			slidesAtOnce={2}
			auto
			hasBullets
			BulletComponent={BulletComponent}
			ArrowComponent={ArrowComponent}
			onSlideChange={onSlideChange}
			setSlideCustom={setSlideCustom}
		>
			<div>child 1</div>
			<div>child 2</div>
			<div>child 3</div>
		</Slider>
	);
};
```

For more examples have a look at [storybook](https://farbenmeer.github.io/react-spring-slider/) [(storybook source code)](./src/index.stories.tsx).

## Contribution

See [CONTRIBUTING.md](https://github.com/farbenmeer/react-spring-slider/blob/main/CONTRIBUTING.md)
