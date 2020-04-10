import React, { useState, useEffect } from "react";
import { storiesOf } from "@storybook/react";
import { BulletComponentType } from "../src/components/bullet/bullet";

import Slider from ".";
import { ArrowComponentType } from "./components/arrow/arrow";

const images = [
	"https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
];

const onSlideChange = (index: number) => {
	console.log(`Slide changed to: ${index}`);
};

const imageStyle = (src: string) => ({
	backgroundSize: "cover",
	backgroundImage: `url(${src})`,
	height: "100%",
	width: "100%"
});

storiesOf("Slider", module)
	.add("Default", () => (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Slider hasBullets onSlideChange={onSlideChange}>
				{images.map(image => (
					<div key={image} draggable="false" style={imageStyle(image)} />
				))}
			</Slider>
		</div>
	))
	.add("Smaller than 100%", () => (
		<div style={{ width: "500px", height: "500px" }}>
			<Slider hasBullets>
				{images.map(image => (
					<div key={image} draggable="false" style={imageStyle(image)} />
				))}
			</Slider>
		</div>
	))
	.add("With auto sliding", () => (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Slider hasBullets auto={2000}>
				{images.map(image => (
					<div key={image} draggable="false" style={imageStyle(image)} />
				))}
			</Slider>
		</div>
	))
	.add("With activeIndex (2)", () => (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Slider hasBullets activeIndex={2}>
				{images.map(image => (
					<div key={image} draggable="false" style={imageStyle(image)} />
				))}
			</Slider>
		</div>
	))
	.add("With activeIndex (interval)", () => {
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
			<div style={{ width: "100vw", height: "100vh" }}>
				<Slider hasBullets activeIndex={activeIndex}>
					{images.map(image => (
						<div key={image} draggable="false" style={imageStyle(image)} />
					))}
				</Slider>
			</div>
		);
	})
	.add("with activeIndex change at onSlideChange", () => {
		const [activeIndex, setActiveIndex] = useState(0);
		const manipulateActiveIndex = (index: number) => setActiveIndex(1);

		return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Slider hasBullets activeIndex={activeIndex} onSlideChange={manipulateActiveIndex}>
				{images.map(image => (
					<div key={image} draggable="false" style={imageStyle(image)} />
				))}
			</Slider>
		</div>
		)
	})
	.add("With different `bulletStyle`", () => {
		return (
			<div style={{ width: "100vw", height: "100vh" }}>
				<Slider hasBullets bulletStyle={{ backgroundColor: "#fff" }}>
					{images.map(image => (
						<div key={image} draggable="false" style={imageStyle(image)} />
					))}
				</Slider>
			</div>
		);
	})
	.add("With custom `bullets`", () => {
		const BulletComponent: BulletComponentType = ({ onClick, isActive }) => (
			<li
				style={{
					width: "25px",
					height: "25px",
					backgroundColor: "red",
					margin: "0 2px",
					opacity: isActive ? "0.5" : undefined
				}}
				onClick={onClick}
			/>
		);

		return (
			<div style={{ width: "100vw", height: "100vh" }}>
				<Slider hasBullets BulletComponent={BulletComponent}>
					{images.map(image => (
						<div key={image} draggable="false" style={imageStyle(image)} />
					))}
				</Slider>
			</div>
		);
	})
	.add("With arrows", () => {
		return (
			<div style={{ width: "100vw", height: "100vh" }}>
				<Slider hasArrows>
					{images.map(image => (
						<div key={image} draggable="false" style={imageStyle(image)} />
					))}
				</Slider>
			</div>
		);
	})
	.add("With custom arrow style", () => {
		const arrowStyle = { border: "solid red", borderWidth: "0 5px 5px 0" };

		return (
			<div style={{ width: "100vw", height: "100vh" }}>
				<Slider hasArrows arrowStyle={arrowStyle}>
					{images.map(image => (
						<div key={image} draggable="false" style={imageStyle(image)} />
					))}
				</Slider>
			</div>
		);
	})
	.add("With custom arrow component", () => {
		const ArrowComponent: ArrowComponentType = ({ onClick, direction }) => {
			return (
				<div
					style={{
						border: "1px solid black",
						padding: "1em",
						backgroundColor: "white"
					}}
					onClick={onClick}
				>
					{direction}
				</div>
			);
		};

		return (
			<div style={{ width: "100vw", height: "100vh" }}>
				<Slider hasArrows ArrowComponent={ArrowComponent}>
					{images.map(image => (
						<div key={image} draggable="false" style={imageStyle(image)} />
					))}
				</Slider>
			</div>
		);
	})
	.add("With arrows and bullets", () => {
		return (
			<div style={{ width: "100vw", height: "100vh" }}>
				<Slider hasArrows hasBullets>
					{images.map(image => (
						<div key={image} draggable="false" style={imageStyle(image)} />
					))}
				</Slider>
			</div>
		);
	})
	.add("With onClick", () => (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Slider hasBullets onSlideChange={onSlideChange}>
				{images.map(image => (
					<div key={image} draggable="false" style={imageStyle(image)} onClick={() => console.log("click")}/>
				))}
			</Slider>
		</div>
	));
