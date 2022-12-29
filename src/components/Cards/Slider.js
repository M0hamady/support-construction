import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider1.jpg";
import slider3 from "../../assets/images/slider1.jpg";
export default function Slider() {
  return (
    <Carousel className="" style={{ maxHeight: "500px" }}>
      <Carousel.Item className="position-absoute" style={{ height: "500px" }}>
        <img className="d-block w-100" src={slider1} alt="First slide" />
        <Carousel.Caption>
          <h2 className="font-bold">Our last projects</h2>
          <div className="glasses font-bold">
            <p>
              Here are some of our projects that are done with the best
              barctices
            </p>
          </div>
          <Link to={"/"} class="fas fa-thin fa-chevron-right" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img className="d-block w-100" src={slider2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img className="d-block w-100" src={slider3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
