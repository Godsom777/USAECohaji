import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./carousel.css"; // Import the CSS file

const slides = [
  {
    src: "../image1.jpg",
    caption: <strong className="text-primary caption">Tailor</strong>,
    text: (
      <strong className="text">
        Professional tailoring services for all your clothing needs.
      </strong>
    ),
  },
  {
    src: "../image2.jpg",
    caption: <strong className="caption">Bakery</strong>,
    text: (
      <strong className="text">
        Delicious baked goods made with love and care.
      </strong>
    ),
  },
  {
    src: "../image3.jpg",
    caption: <strong className="caption">Graphics</strong>,
    text: (
      <strong className="text">
        Creative graphic design solutions for your business.
      </strong>
    ),
  },
  {
    src: "../image4.jpg",
    caption: <strong className="caption">Programming</strong>,
    text: (
      <strong className="text">
        Expert programming services to bring your ideas to life.
      </strong>
    ),
  },
  {
    src: "../image5.jpg",
    caption: <strong className="caption">Hair Stylist</strong>,
    text: (
      <strong className="text">
        Stylish haircuts and treatments to enhance your look.
      </strong>
    ),
  },
];

function MyCarousel() {
  return (
    <Carousel>
      {slides.map((slide, i) => (
        <Carousel.Item interval={4000} key={i}>
          <img
            className="d-block w-100"
            src={slide.src}
            alt={`Slide ${i + 1}`}
          />
          <Carousel.Caption className="custom-caption">
            <div
              className="blur-background"
              style={{ backgroundImage: `url(${slide.src})` }}
            ></div>
            <h3>{slide.caption}</h3>
            <p>{slide.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
