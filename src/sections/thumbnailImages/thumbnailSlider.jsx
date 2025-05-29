import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./thumbnailSlider.css";

const ThumbnailSlider = ({ start }) => {
  const [autoplay, setAutoplay] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    if (start) {
      setAutoplay(true);
    }

    // Listen for window resize to switch layout dynamically
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [start]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "0",
    vertical: !isMobile,
    verticalSwiping: !isMobile,
    arrows: true,
    dots: false,
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
    <div className="thumbnail-slider-container">
      <div className="image-slider">
        <Slider key={start ? "autoplay-on" : "autoplay-off"} {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slider-item">
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                loading="lazy"
                onError={(e) => {
                  e.target.src = "./Images/fallback-image.webp";
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

ThumbnailSlider.propTypes = {
  start: PropTypes.bool.isRequired,
};

export default ThumbnailSlider;
