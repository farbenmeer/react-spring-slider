import React, { useState, useEffect } from "react";
import { Meta, Story as IStory } from "@storybook/react/types-6-0";
import Arrow, { ArrowComponentType } from "../src/components/arrow";
import styled from "styled-components";

import Slider, { SliderProps } from ".";

const images = [
	"https://images.pexels.com/photos/3740695/pexels-photo-3740695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/3740446/pexels-photo-3740446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

const imageStyle = (src: string) => ({
	backgroundSize: "cover",
	backgroundImage: `url(${src})`,
	height: "100%",
	width: "100%",
});

export default {
	component: Slider,
	title: "Arrows",
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
	hasArrows: true,
};

export const CustomArrows = Story.bind({});
CustomArrows.storyName = "With custom arrow style";
CustomArrows.args = {
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
	hasArrows: true,
	ArrowComponent,
};

export const ModufiedCustomArrows = Story.bind({});
const ModifiedBulletComponent = styled(Arrow)`
	i {
		border-color: lightgreen;
		background-color: black;
	}
`;
ModufiedCustomArrows.storyName = "modified 'arrows' component";
ModufiedCustomArrows.args = {
	hasArrows: true,
	ArrowComponent: ModifiedBulletComponent,
};
