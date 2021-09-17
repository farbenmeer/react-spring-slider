import React, { useState, useEffect } from "react";
import { Meta, Story as IStory } from "@storybook/react/types-6-0";
import { BulletComponentType } from "../src/components/bullet/bullet";

import Slider, { SliderProps } from ".";
import { ArrowComponentType } from "./components/arrow/arrow";

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
	title: "Slider",
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

export const DifferentBullets = Story.bind({});
DifferentBullets.storyName = "With different 'bulletStyle'";
DifferentBullets.args = {
	hasBullets: true,
	hasArrows: false,
	bulletStyle: { backgroundColor: "#fff" },
};

const BulletComponent: BulletComponentType = ({ onClick, isActive }) => (
	<li
		style={{
			width: "25px",
			height: "25px",
			backgroundColor: "red",
			margin: "0 2px",
			opacity: isActive ? "0.5" : undefined,
		}}
		onClick={onClick}
	/>
);
export const CustomBullets = Story.bind({});
CustomBullets.storyName = "With custom 'bullets'";
CustomBullets.args = {
	hasBullets: true,
	hasArrows: false,
	BulletComponent,
};

export const CustomArrows = Story.bind({});
CustomArrows.storyName = "With custom arrow style";
CustomArrows.args = {
	hasBullets: false,
	hasArrows: true,
	arrowStyle: { border: "solid red", borderWidth: "0 5px 5px 0" },
};

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
export const CustomArrowComponent = Story.bind({});
CustomArrowComponent.storyName = "With custom arrow component";
CustomArrowComponent.args = {
	hasBullets: false,
	hasArrows: true,
	ArrowComponent,
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
