import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./CarouselImage";
// import carouselData from "../../data/carouselData.json";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
