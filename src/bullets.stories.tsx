import React from "react";
import { Meta, Story as IStory } from "@storybook/react/types-6-0";
import Bullet, { BulletComponentType } from "../src/components/bullet";
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
	title: "Bullets",
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
};

export const DifferentBullets = Story.bind({});
DifferentBullets.storyName = "Different 'bulletStyle'";
DifferentBullets.args = {
	hasBullets: true,
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
CustomBullets.storyName = "Custom 'bullets'";
CustomBullets.args = {
	hasBullets: true,
	BulletComponent,
};

export const ModufiedCustomBullets = Story.bind({});
const ModifiedBulletComponent = styled(Bullet)`
	background-color: green;
`;
ModufiedCustomBullets.storyName = "modified 'bullets' component";
ModufiedCustomBullets.args = {
	hasBullets: true,
	BulletComponent: ModifiedBulletComponent,
};
