import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./imageSlider.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "24%",
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const images = [
    "./Images/1.jpg",
    "./Images/2.jpg",
    "./Images/3.jpg",
    "./Images/4.jpg",
    "./Images/5.jpg",
  ];

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <img src={image} alt={`Slide ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </Slider>
      
    </div>
    
  );
};

export default ImageSlider;
