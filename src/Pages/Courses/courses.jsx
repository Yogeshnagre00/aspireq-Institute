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
  const steps = [
    {
      title: "Take course by industry experts",
      description:
        "Lorem ipsum dolor amet sit Lorem ipsum dolor amet sit Lorem ipsum dolor amet sit",
      image: "./Images/Marriage counseling-cuate 1.png",
    },
    {
      title: "Get a Course Certificate",
      description:
        "Lorem ipsum dolor amet sit Lorem ipsum dolor amet sit Lorem ipsum dolor amet sit",
      image: "./Images/Certification-cuate 1.png",
    },
    {
      title: "Advance your career",
      description:
        "Lorem ipsum dolor amet sit Lorem ipsum dolor amet sit Lorem ipsum dolor amet sit",
      image: "./Images/Group 39881.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true); // Track mute state
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderItems.length]);

  // Toggle mute/unmute when user clicks the mute/unmute button
  const toggleMute = () => {
    setIsMuted((prevState) => !prevState);
  };

  // Handle hover to stop/start autoplay
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="qa-section">
          {/* Main Slider */}
          <div
            className="main-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
                autoPlay={!isHovered}
                loop
                muted={isMuted} // Mutes or unmutes based on the state
              ></video>
            )}
            <div className="content">
              <h3>{sliderItems[currentIndex].title}</h3>
              <p>{sliderItems[currentIndex].description}</p>
            </div>

            {/* Mute/Unmute Button */}
            <button className="mute-button" onClick={toggleMute}>
              {isMuted ? "Unmute" : "Mute"}
            </button>

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
      <section>
        <div className="how-it-works">
          <h2>How it works</h2>
          <div className="horizontal-stepper">
            <div className="step">
              <div className="circle">1</div>
              <div className="line"></div>
            </div>
            <div className="step">
              <div className="circle">2</div>
              <div className="line"></div>
            </div>
            <div className="step">
              <div className="circle">3</div>
            </div>
          </div>

          <div className="steps-container">
            {steps.map((step) => (
              <div className="step-card" key={step.id}>
                <img src={step.image} alt={step.title} className="step-image" />
                <div className="discription">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="certificate-section">
        <h2>Certificate</h2>
        <div className="certificate-container">
          <div className="certificate-image">
            <img
              src="./Images/ux design certificate.png"
              alt="Sample Certificate"
            />
          </div>
          <div className="certificate-details">
            <h3>Gain Industry-Recognized Certificates</h3>
            <ul>
              <li>Use your certificates to make a life-changing shift</li>
              <li>Use your certificates to make a life-changing shift</li>
              <li>Use your certificates to make a life-changing shift</li>
              <li>Use your certificates to make a life-changing shift</li>
              <li>Use your certificates to make a life-changing shift</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="DemoClass-section">
        <div className="container">
          <h2>Join your live class with your instructor</h2>
          <div className="live-class-image">
            <img
              src="public/Images/freepik__expand__17656 1.png"
              alt="Live Class Example"
            />
          </div>
          <div className="class-container">
            <div className="button">Manual Testing</div>
            <div className="button">Automation Testing</div>
            <div className="button">Integration Testing</div>
            <div className="button">UI Testing</div>
            <div className="button">Integration Testing</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QASection;
