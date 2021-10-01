import React, { useState, useEffect } from "react";
import { Meta, Story as IStory } from "@storybook/react/types-6-0";

import Slider, { SliderProps } from "../src";

const images = [
	"https://images.pexels.com/photos/3740695/pexels-photo-3740695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/3740446/pexels-photo-3740446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

const onSlideChange = (index: number) => {
	console.log(`Slide changed to: ${index}`);
};

const imageStyle = (src: string) => ({
	backgroundSize: "cover",
	backgroundImage: `url(${src})`,
	height: "100%",
	width: "100%",
});

export default {
	component: Slider,
	title: "Other",
	decorators: [
		(Story: IStory<SliderProps>) => (
			<div style={{ width: "100%", height: "100vh" }}>
				<Story />
			</div>
		),
	],
} as Meta;

const Story = (args: SliderProps) => (
	<Slider {...args}>
		{images.map((image) => (
			<div
				key={image}
				draggable="false"
				style={imageStyle(image)}
				onClick={() => console.log("click")}
			/>
		))}
	</Slider>
);

export const Default = Story.bind({});
Default.args = {
	hasBullets: true,
	hasArrows: false,
	onSlideChange,
};

export const AutoSliding = Story.bind({});
AutoSliding.storyName = "With auto sliding";
AutoSliding.args = {
	hasBullets: true,
	hasArrows: false,
	auto: 2000,
};

export const ActiveIndex = Story.bind({});
ActiveIndex.storyName = "With activeIndex (2)";
ActiveIndex.args = {
	hasBullets: true,
	hasArrows: false,
	activeIndex: 2,
};

const IntervalStory = (args: SliderProps) => {
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

	return <Story {...args} activeIndex={activeIndex} />;
};
export const ActiveIndexInterval = IntervalStory.bind({});
ActiveIndexInterval.storyName = "With activeIndex (interval)";
ActiveIndexInterval.args = {
	hasBullets: true,
	hasArrows: false,
};

const CustomSetSlideStory = (args: SliderProps) => {
	const [activeIndex] = useState(0);

	const setSlideCustom = () => 1;

	return (
		<Story
			{...args}
			activeIndex={activeIndex}
			setSlideCustom={setSlideCustom}
		/>
	);
};
export const CustomSetSlide = CustomSetSlideStory.bind({});
CustomSetSlide.storyName = "With custom setSlide function";
CustomSetSlide.args = {
	hasBullets: true,
	hasArrows: false,
};

export const SlidesAtOnceComponent = Story.bind({});
SlidesAtOnceComponent.storyName = "With slidesAtOnce 2";
SlidesAtOnceComponent.args = {
	hasArrows: true,
	slidesAtOnce: 2,
};

export const SlidesToSlideComponent = Story.bind({});
SlidesToSlideComponent.storyName = "With slidesToSlide 2";
SlidesToSlideComponent.args = {
	hasArrows: true,
	slidesAtOnce: 2,
	slidesToSlide: 2,
};
