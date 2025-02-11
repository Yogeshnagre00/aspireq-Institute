import { useState, useEffect, useRef, useMemo } from "react";
import Navbar from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import "./courses.css";
import Offer from "../../components/offerSection/offer";

const CoursesPage = () => {
  // Slider items with images and videos
  const sliderItems = useMemo(
    () => [
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
        type: "video",
        src: "./Videos/SampleVideo_1280x720_10mb.mp4",
        title: "Video Demo 2",
        description: "A demonstration video about QA services.",
      },
      {
        id: 5,
        type: "image",
        src: "./Images/Business analyst.jpg",
        title: "Office 1",
        description: "Description for business analyst",
      },
    ],
    []
  );
  //slider thumbnails images
  const thumbnails = [
    "./Images/Devops engineer.jpeg",
    " /Images/back-courses.png",
    "/./Images/Container.png",
    "./Images/Full stack developer.jpg",
    "./Images/Business analyst.jpg",
    "./Images/Business analyst.jpg",
    "./Images/Devops engineer.jpeg",
    "./Images/Devops engineer.jpeg",
    "/./Images/Container.png",
    "./Images/Full stack developer.jpg",
    "./Images/Devops engineer.jpeg",
    "./Images/Business analyst.jpg",
    "./Images/Devops engineer.jpeg",
  ];
  //courses card item
  const courses = [
    {
      id: 1,
      title: "Full Stack Developer",
      description: "Automate your testing process with the latest tools.",
      image: "./Images/Full stack developer.jpg",
      bestseller: true,
      discount: "20% Off",
      rating: "5.0",
    },
    {
      id: 2,
      title: "Software Development Engineer in Testing (SDET)",
      description: "Automate your testing process with the latest tools.",
      image: "./Images/SDET.jpeg",
      bestseller: true,
      discount: "20% Off",
      rating: "5.0",
    },
    {
      id: 3,
      title: "Scrum Master",
      description: "Learn the essentials of manual software testing.",
      image: "./Images/Scrum master.jpg",
      bestseller: true,
      discount: "20% Off",
      rating: "5.0",
    },
    {
      id: 4,
      title: "Business Analyst(BA)",
      description: "Master software testing techniques and tools.",
      image: "./Images/Business analyst.jpg",
      bestseller: true,
      discount: "20% Off",
      rating: "5.0",
    },
    {
      id: 5,
      title: "Devops Engineer",
      description: "Automate your testing process with the latest tools.",
      image: "./Images/Devops engineer.jpeg",
      bestseller: true,
      discount: "20% Off",
      rating: "5.0",
    },
    {
      id: 6,
      title: "Corporate Training",
      description: "Automate your testing process with the latest tools.",
      image: "./Images/corporate.jpeg",
      bestseller: true,
      discount: "20% Off",
      rating: "5.0",
    },
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
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0);
  const [isMainCardCycleComplete, setIsMainCardCycleComplete] = useState(false);
  const [, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Check if sessionStorage already has a flag indicating the slideshow has run
  const hasSessionRun = sessionStorage.getItem("hasRun");

  useEffect(() => {
    if (!hasSessionRun) {
      const playNextSlide = () => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;

          if (nextIndex >= sliderItems.length) {
            setIsMainCardCycleComplete(true);
            return prevIndex; // Stop main slider
          }

          return nextIndex;
        });
      };

      if (sliderItems[currentIndex]?.type === "video") {
        // Wait for video to end before switching
        const video = videoRef.current;
        if (video) {
          video.onended = playNextSlide;
          video.play();
        }
      } else {
        // For images, use interval
        const interval = setTimeout(playNextSlide, 5000);
        return () => clearTimeout(interval);
      }
    }
  }, [currentIndex, hasSessionRun, sliderItems]);

  useEffect(() => {
    if (!hasSessionRun && isMainCardCycleComplete) {
      const interval = setInterval(() => {
        setCurrentThumbnailIndex((prevIndex) => {
          const nextIndex = prevIndex + 3;
          return nextIndex >= thumbnails.length ? prevIndex : nextIndex; // Stop thumbnails after one cycle
        });
      }, 5000);

      // Set session flag to stop running on refresh
      sessionStorage.setItem("hasRun", "true");

      return () => clearInterval(interval);
    }
  }, [hasSessionRun, isMainCardCycleComplete, thumbnails.length]);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= sliderItems.length ? 0 : nextIndex; // Loop back to start if at the end
    });
  };
  const toggleMute = () => {
    setIsMuted((prevState) => !prevState);
    videoRef.current.muted = false;
    videoRef.current.play();
  };

  return (
    <>
      <Navbar />
      <section className="qa-section">
        <div className="qa-section">
          {/* Main Slider (Runs first, only once) */}
          <div className="main-card">
            {sliderItems[currentIndex]?.type === "image" ? (
              <img
                src={sliderItems[currentIndex]?.src}
                alt={sliderItems[currentIndex]?.title}
                className="main-image"
              />
            ) : (
              <video
                ref={videoRef}
                className="main-video"
                src={sliderItems[currentIndex]?.src}
                controls
                onPlay={handleVideoPlay}
                onEnded={handleVideoEnd}
                autoPlay
                muted={isMuted}
              />
            )}
            <button className="mute-button" onClick={toggleMute}>
              {isMuted ? "Unmute" : "Mute"}
            </button>
            <div className="content">
              <h3>{sliderItems[currentIndex]?.title}</h3>
              <p>{sliderItems[currentIndex]?.description}</p>
            </div>

            {/* Slider Dots */}
            <div className="slider-dots">
              {sliderItems.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentIndex === index ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)} // Change currentIndex on click
                ></span>
              ))}
            </div>
          </div>

          {/* Thumbnail Stack (Runs only after main slider completes, stops after one cycle) */}
          <div className="thumbnail-stack">
            {thumbnails
              .slice(currentThumbnailIndex, currentThumbnailIndex + 3)
              .map((thumb, index) => (
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

      <section id="course-section" className="course-section">
        <h2>Courses</h2>
        <div className="course-section__grid">
          {courses.map((course, index) => (
            <div
              key={index}
              className="course-card"
              onClick={() =>
                window.open(`/course-details/${course.id}`, "_blank")
              }
              style={{ cursor: "pointer" }}
            >
              <div className="course-image">
                <img src={course.image} alt={course.title} loading="lazy" />
                {course.bestseller && course.discount && (
                  <div className="custom-label">
                    <span className="label-bestseller">Bestseller</span>
                    <span className="label-discount">{course.discount}</span>
                  </div>
                )}
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-rating">
                  <span className="rating">⭐ {course.rating}</span>
                  <button className="course-card__button">→</button>
                </div>
              </div>
            </div>
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
            <img src="./Images/democlass.png" alt="Live Class Example" />
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
      <Offer />
      <Footer />
    </>
  );
};

export default CoursesPage;
