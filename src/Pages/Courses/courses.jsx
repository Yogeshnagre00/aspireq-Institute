import { useState, useEffect } from "react";
import Navbar from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import "./courses.css";
import CourseCard from "./CourseCard";

const QASection = () => {
  // Slider items with images and videos
  const sliderItems = [
    {
      id: 1,
      type: "image",
      src: "./Images/csaestudies.png",
      title: "QA Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus urna orci.",
    },
    {
      id: 2,
      type: "video",
      src: "./Videos/demo.mp4",
      title: "Video Demo",
      description: "A demonstration video about QA services.",
    },
    {
      id: 3,
      type: "image",
      src: "./Images/Full stack developer.jpg",
      title: "Office 1",
      description: "Description for full stack developer",
    },
    {
      id: 4,
      type: "image",
      src: "./Images/Business analyst.jpg",
      title: "Office 1",
      description: "Description for business analyst",
    },
  ];
  const courses = [
    {
      image: "./Images/Container.png",
      category: "Development",
      title: "Full Stack Developer",
      lessons: 12,
      duration: "1h 30m",
      students: 20,
      author: "Angela",
      authorImage: "./Images/author.png",
      price: 60,
      rating: 4.5,
    },
    {
      image: "./Images/Container.png",
      category: "Development",
      title: "Business Analyst(BA)",
      lessons: 10,
      duration: "2h 00m",
      students: 15,
      author: "John Doe",
      authorImage: "./Images/author.png",
      price: 45,
      rating: 4,
    },
    {
      image: "./Images/Container.png",
      category: "Development",
      title: "Software Development Engineer in Testing ",
      lessons: 15,
      duration: "2h 30m",
      students: 30,
      author: "Jane Smith",
      authorImage: "./Images/author.png",
      price: 70,
      rating: 4.7,
    },
    {
      image: "./Images/Container.png",
      category: "Development",
      title: "Devops Engineer",
      lessons: 15,
      duration: "2h 30m",
      students: 30,
      author: "Jane Smith",
      authorImage: "./Images/author.png",
      price: 70,
      rating: 3.8,
    },
    {
      image: "./Images/Container.png",
      category: "Development",
      title: "Corporate Training",
      lessons: 15,
      duration: "2h 30m",
      students: 25,
      author: "Jane Smith",
      authorImage: "./Images/author.png",
      price: 70,
      rating: 4.5,
    },
    {
      image: "/./Images/Container.png",
      category: "Development",
      title: "Scrum Master",
      lessons: 15,
      duration: "2h 30m",
      students: 23,
      author: "Jane Smith",
      authorImage: "./Images/author.png",
      price: 70,
      rating: 4.5,
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
      id: 1,
      title: "Take course by industry experts",
      description:
        "Lorem ipsum dolor amet sit Lorem ipsum dolor amet sit Lorem ipsum dolor amet sit",
      image: "./Images/Marriage counseling-cuate 1.png",
    },
    {
      id: 2,
      title: "Get a Course Certificate",
      description:
        "Lorem ipsum dolor amet sit Lorem ipsum dolor amet sit Lorem ipsum dolor amet sit",
      image: "./Images/Certification-cuate 1.png",
    },
    {
      id: 3,
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
      <section className="course-section">
      <h2>Courses</h2>
      <div className="course-section__grid">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
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
                <div className="description">
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
              src="./Images/democlass.png"
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
      <section className="offer-section">
        <div className="offer-content">
          <p className="subheading">ARE YOU READY FOR THIS OFFER</p>
          <h1 className="main-heading">40% offer for very first 100</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
          <div className="button-group">
            <a href="#" className="btn btn-green">
              ADMISSION NOW
            </a>
            <a href="#" className="btn btn-blue">
              OUR COURSES
            </a>
          </div>
        </div>
        <div className="offer-image"></div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default QASection;