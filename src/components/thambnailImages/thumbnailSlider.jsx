import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./thumbnailSlider.css";

const ThumbnailSlider = ({ start }) => {
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    if (start) {
      setAutoplay(true);
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
    "/Images/Devops engineer.webp",
    "/Images/back-courses.webp",
    "/Images/Container.webp",
    "/Images/Full stack developer.webp",
    "/Images/Business analyst.webp",
    "/Images/Scrum master.webp",
    "/Images/corporate.webp",
    "/Images/Full stack developer.webp",
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
                e.target.src = "./Images/fallback-image.webp"; // Fallback image
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
