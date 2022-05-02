<h1 align="center">react-spring-slider</h1>
<div align="center">
Build a flexibale slider with smooth animations.

react-spring-slider uses [react-spring](https://www.react-spring.io/) under the hood. This project aims to be flexible through configuration as well as be easy to use by sane and reasonable defaults.

You can have a real life look how this can be used within storybook [(source)](./src/index.stories.tsx) at: [farbenmeer.github.io/react-spring-slider](https://farbenmeer.github.io/react-spring-slider/).

![Version](https://img.shields.io/npm/v/@farbenmeer/react-spring-slider?style=flat-square)
[![Minified Size](https://img.shields.io/bundlephobia/min/@farbenmeer/react-spring-slider?style=flat-square)](https://img.shields.io/bundlephobia/min/@farbenmeer/react-spring-slider?style=flat-square)
[![Minified Zipped Size](https://img.shields.io/bundlephobia/minzip/@farbenmeer/react-spring-slider?style=flat-square)](https://img.shields.io/bundlephobia/minzip/@farbenmeer/react-spring-slider?style=flat-square)
![License](https://img.shields.io/github/license/farbenmeer/react-spring-slider?style=flat-square)
[![npm downloads](https://img.shields.io/npm/dm/@farbenmeer/react-spring-slider.svg?style=flat-square)](https://www.npmjs.com/package/@farbenmeer/react-spring-slider?style=flat-square)

</div>

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [More examples](#more-examples)
  - [Custom bulletStyle](#custom-bulletstyle)
  - [Fully customized](#fully-customized)
- [Contribution](#contribution)

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

| Name             | Type     | Default |                                                                                                 Description |
| ---------------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------: |
| activeIndex      | number   | 0       |                                                                                  Controlles the shown index |
| ArrowComponent   | function | -       |                                                                           A custom component for the arrows |
| auto             | number   | 0       | 0 = disabled auto sliding. Indicates the pausing time in milliseconds per slide before next slide is shown. |
| BulletComponent  | function | -       |                                                                           A custom component for one bullet |
| BulletsComponent | function | -       |                                                                  A custom component for the bullets wrapper |
| bulletStyle      | object   | { }     |                                                                               custom styles for the bullets |
| children         | node     | [ ]     |                                                   The children of the slider, every child is a single slide |
| hasArrows        | boolean  | false   |                                                                Whether the slider should have arrows or not |
| hasBullets       | boolean  | false   |                                                               Whether the slider should have bullets or not |
| onSlideChange    | function | -       |                        Callback which is triggered when the slides changed either manually or automatically |
| setSlideCustom   | function | -       |                                                    A function to overwrite the default `setSlide` behavior. |
| slidesAtOnce     | number   | 1       |                                          A number which represents how many slides should be shown at once. |
| slidesToSlide    | number   | 1       |                             A number which represents how many slides should be slided with one interaction |

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
import { BulletComponentType } from "@farbenmeer/react-spring-slider/components/bullet";
import { ArrowComponentType } from "@farbenmeer/react-spring-slider/components/arrow";

const App = () => {
  const onSlideChange = (index) => console.log(`changed to slide ${index}`);
  const setSlideCustom = () => 1;

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

const BulletComponent: BulletComponentType = ({ onClick, isActive }) => (
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

const ArrowComponent: ArrowComponentType = ({ onClick, direction }) => {
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
```

For more examples have a look at [storybook](https://farbenmeer.github.io/react-spring-slider/) [(storybook source code)](./src/index.stories.tsx).

## Contribution

See [CONTRIBUTING.md](https://github.com/farbenmeer/react-spring-slider/blob/main/CONTRIBUTING.md)
