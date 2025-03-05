import { useEffect, useRef, useState } from "react";
import { Footer } from "../../components/Footer/footer";
import Navbar from "../../components/Header/header";
import Offer from "../../components/offerSection/offer";
import ThumbnailSlider from "../../components/thambnailImages/thumbnailSlider";
import data from "../../CourseData/data.json"; // Adjust the path as necessary
import "./courses.css";

const CoursesPage = () => {
  // Use the data from the JSON file
  const { sliderItems, courses, steps } = data;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMainCardCycleComplete, setIsMainCardCycleComplete] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const hasMainRun = sessionStorage.getItem("hasMainRun");

    if (!hasMainRun) {
      let interval;
      const video = videoRef.current;

      const playNextSlide = () => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;

          if (nextIndex >= sliderItems.length) {
            console.log("Main slider cycle complete"); // Debugging
            setIsMainCardCycleComplete(true);
            sessionStorage.setItem("hasMainRun", "true");
            return prevIndex; // Stop at the last slide
          }

          return nextIndex;
        });
      };

      if (sliderItems[currentIndex]?.type === "video") {
        if (video) {
          video.onended = playNextSlide;
          video.play();
        }
      } else {
        interval = setTimeout(playNextSlide, 5000); // Change slide every 5 seconds
      }

      return () => {
        if (interval) clearTimeout(interval);
        if (video) video.onended = null;
      };
    } else {
      setIsMainCardCycleComplete(true);
    }
  }, [currentIndex, sliderItems]);

  const toggleMute = () => {
    setIsMuted((prevState) => !prevState);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <>
      <div className="coursePage">
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
                    onClick={() => setCurrentIndex(index)}
                  ></span>
                ))}
              </div>
            </div>

            {/* Thumbnail Stack (Runs only after main slider completes, stops after one cycle) */}
            <div className="thumbnail-stack ">
              <ThumbnailSlider start={isMainCardCycleComplete} />
            </div>
          </div>
        </section>

        {/* Courses Section  */}
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
        {/* How It Works Section */}
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
                  <img
                    src={step.image}
                    alt={step.title}
                    className="step-image"
                  />
                  <div className="description">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Certificate Section */}
        <section className="certificate-section">
          <h2>Certificate</h2>
          <div className="certificate-container">
            <div className="certificate-image">
              <img
                src="./Images/ux design certificate.webp"
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
        {/* Demo Class Section */}
        <section className="DemoClass-section">
          <div className="container">
            <h2>Join your live class with your instructor</h2>
            <div className="live-class-image">
              <img src="/Images/image 7.png" alt="Live Class Example" />
            </div>
            <div className="class-container">
              <div className="button"> Scrum Master</div>
              <div className="button">Full Stack DEvelopment</div>
              <div className="button">DevOps Engineer</div>
              <div className="button">SDET</div>
              <div className="button">Business Analyst</div>
              <div className="button">Corporate Training</div>
            </div>
          </div>
        </section>
        <Offer />
        <Footer />
      </div>
    </>
  );
};

export default CoursesPage;
