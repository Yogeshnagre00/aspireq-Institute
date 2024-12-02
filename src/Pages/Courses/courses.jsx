import { useState, useEffect } from "react";
import Navbar from "../../components/Header/header";
import "./courses.css";
import CourseSection from "./coursesPage";

const QASection = () => {
  // Slider items with images and videos
  const sliderItems = [
    {
      type: "image",
      src: "./Images/csaestudies.png",
      title: "QA Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus urna orci.",
    },
    {
      type: "video",
      src: "./Videos/demo.mp4",
      title: "Video Demo",
      description: "A demonstration video about QA services.",
    },
    {
      type: "image",
      src: "./Images/Full stack developer.jpg",
      title: "Office 1",
      description: "Description for full stack developer",
    },
    {
      type: "image",
      src: "./Images/Business analyst.jpg",
      title: "Office 1",
      description: "Description for business analyst",
    },
  ];

  const thumbnails = [
    "./Images/Devops engineer.jpeg",
    "./Images/Devops engineer.jpeg",
    "./Images/Devops engineer.jpeg",
    "./Images/Devops engineer.jpeg",
    "./Images/Devops engineer.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  useEffect(() => {
    // Only autoplay when not hovering over the main card
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, sliderItems.length]); // Re-run when hover state changes

  return (
    <>
      <Navbar />
      <section>
        <div className="qa-section">
          {/* Main Slider */}
          <div
            className="main-card"
            onMouseEnter={() => setIsHovered(true)} // Stop autoplay on hover
            onMouseLeave={() => setIsHovered(false)} // Start autoplay when hover ends
          >
            {sliderItems[currentIndex].type === "image" ? (
              <img
                src={sliderItems[currentIndex].src}
                alt={sliderItems[currentIndex].title}
                className="main-image"
              />
            ) : (
              <video
                className="main-video"
                src={sliderItems[currentIndex].src}
                controls
                autoPlay
                loop
              ></video>
            )}
            <div className="content">
              <h3>{sliderItems[currentIndex].title}</h3>
              <p>{sliderItems[currentIndex].description}</p>
            </div>
            {/* Slider Dots */}
            <div className="slider-dots">
              {sliderItems.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentIndex === index ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)} // Allows clicking on dots to navigate
                ></span>
              ))}
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="vertical-line"></div>

          {/* Thumbnail Stack */}
          <div className="thumbnail-stack">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail"
              />
            ))}
          </div>
        </div>
      </section>
      <div>
        <CourseSection />
      </div>
    </>
  );
};

export default QASection;
