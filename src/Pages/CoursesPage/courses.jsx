import { useEffect, useRef, useState } from "react";
import { Footer } from "../../components/Footer/footer";
import Navbar from "../../components/Header/header";
import Offer from "../../section/offerSection/offer";
import ThumbnailSlider from "../../section/thumbnailImages/thumbnailSlider";
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
    // Check if main slider has already run
    const hasMainRun = sessionStorage.getItem("hasMainRun");

    // If it has already run, mark cycle as complete but don't run animation
    if (hasMainRun === "true") {
      setIsMainCardCycleComplete(true);
      return; // Exit early, don't setup intervals
    }

    // Set up the animation cycle only on first visit
    let interval;
    const video = videoRef.current;

    const playNextSlide = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= sliderItems.length) {
          setIsMainCardCycleComplete(true);
          sessionStorage.setItem("hasMainRun", "true");
          return prevIndex;
        }
        return nextIndex;
      });
    };

    if (sliderItems[currentIndex]?.type === "video" && video) {
      video.onended = playNextSlide;
      video.play().catch((err) => console.log("Video play error:", err));
      interval = setTimeout(playNextSlide, 15000); // Safety timeout
    } else {
      interval = setTimeout(playNextSlide, 5000);
    }

    return () => {
      clearTimeout(interval);
      if (video) video.onended = null;
    };
  }, [currentIndex, sliderItems]);

  const toggleMute = () => {
    setIsMuted((prevState) => !prevState);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <>
      <Navbar />
      {/* main slider and thumbnails */}
      <section className="qa-section">
        <div className="qa-section">
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
                autoPlay={!isMainCardCycleComplete}
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

          {/* Thumbnail Stack - Only starts after main slider completes once */}
          <div className="thumbnail-stack">
            <ThumbnailSlider start={isMainCardCycleComplete} />
          </div>
        </div>
      </section>

      {/*Course name and details*/}
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
                {course.bestseller &&
                  course.discount &&
                  course.title !== "Business Analyst(BA)" &&
                  course.title !== "Scrum Master" && (
                    <div className="custom-label">
                      <span className="label-bestseller">Bestseller</span>
                      <span className="label-discount">{course.discount}</span>
                    </div>
                  )}
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <p className="course-fees">
                  Fees:{" "}
                  {course.title !== "Business Analyst(BA)" &&
                  course.title !== "Scrum Master" ? (
                    <>
                      <span className="original-fee">
                        ₹{course.fees.toLocaleString()}
                      </span>{" "}
                      <span className="discounted-fee">
                        ₹{Math.floor(course.fees * 0.8).toLocaleString()}
                      </span>
                    </>
                  ) : (
                    <span className="discounted-fee">
                      ₹{course.fees.toLocaleString()}
                    </span>
                  )}
                </p>

                <div className="course-rating">
                  <span className="rating">⭐ {course.rating}</span>
                  <button className="course-card__button">→</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* How it work section  */}
      <section className="how-it-work">
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
      {/* Certificate Section  */}
      <section className="certificate-section">
        <h2>Certificate</h2>
        <div className="certificate-container">
          <div className="certificates-image">
            <img
              src="/Images/certificates/Full-Stack-Development-course-certificate.png"
              alt="Sample Certificate"
            />
          </div>
          <div className="certificate-details">
            <h3>Industry-Recognized Certificate</h3>
            <ul>
              <li>Skill Enhancement</li>
              <li>Improved Communication and Collaboration Skills</li>
              <li>Confidence Boost</li>
              <li>Accreditation and Recognition</li>
              <li>Professional Recognition</li>
              <li>Entrepreneurial Opportunities</li>
              <li>Access to Better Pay</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Demo class  */}
      <section className="DemoClass-section">
        <div className="container">
          <h2>Join your class with your instructor</h2>
          <div className="live-class-image">
            <img src="/Images/classRoom.jpg" alt="Live Class Example" />
          </div>
          <div className="class-container">
            <div className="button">Full Stack Developer</div>
            <div className="button">Software Testing</div>
            <div className="button">DevOps</div>
            <div className="button">Business Analyst</div>
            <div className="button">Scrum Master</div>
          </div>
        </div>
      </section>
      <Offer />
      <Footer />
    </>
  );
};

export default CoursesPage;
