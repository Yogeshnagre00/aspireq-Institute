import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./thumbnailSlider.css";
import { useState, useEffect } from "react";

const ThumbnailSlider = ({ start }) => {
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    console.log("ThumbnailSlider start prop:", start); // Debugging
    if (start) {
      setAutoplay(true); // Enable autoplay when start is true
    }
  }, [start]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: autoplay,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "0",
  };

  const images = [
    "./Images/Devops engineer.jpeg",
    "/Images/back-courses.png",
    "/./Images/Container.png",
    "./Images/Full stack developer.jpg",
    "./Images/Business analyst.jpg",
    "./Images/Scrum master.jpg",
    "./Images/corporate.jpeg",
  ];

  return (
    <div className="image-slider">
      {/* Force reinitialization of the Slider when `start` changes */}
      <Slider key={start ? "autoplay-on" : "autoplay-off"} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              loading="lazy"
              onError={(e) => {
                e.target.src = "./Images/fallback-image.jpg"; // Fallback image
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

ThumbnailSlider.propTypes = {
  start: PropTypes.bool.isRequired,
};

export default ThumbnailSlider;
