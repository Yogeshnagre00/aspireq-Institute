import  { useState } from "react";
import "./course.css";

const courses = [
  {
    title: "Scrum Master",
    description: "Learn the essentials of manual software testing.",
    image: "./Images/Scrum master.jpg",
    bestseller: true,
    discount: "20% Off",
    rating: 4.7,
  },
  {
    title: "Business Analyst(BA)",
    description: "Master software testing techniques and tools.",
    image: "./Images/Business analyst.jpg",
    bestseller: true,
    discount: "20% Off",
    rating: 4.8,
  },
  {
    title: "Full Stack Developer",
    description: "Automate your testing process with the latest tools.",
    image: "./Images/Full stack developer.jpg",
    bestseller: true,
    discount: "20% Off",
    rating: 4.9,
  },
  {
    title: "Software Development Engineer in Testing (SDET)",
    description: "Automate your testing process with the latest tools.",
    image: "./Images/SDET.jpeg",
    bestseller: true,
    discount: "20% Off",
    rating: 4.9,
  },
  {
    title: "Devops Engineer",
    description: "Automate your testing process with the latest tools.",
    image: "./Images/Devops engineer.jpeg",
    bestseller: true,
    discount: "20% Off",
    rating: 4.9,
  },
  {
    title: "Corporate Tranning",
    description: "Automate your testing process with the latest tools.",
    image: "./Images/corporate.png",
    bestseller: true,
    discount: "20% Off",
    rating: 4.9,
  },
];

const CourseCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const coursesPerPage = 3; // Change this to show more or fewer courses

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(courses.length / coursesPerPage));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + Math.ceil(courses.length / coursesPerPage)) % Math.ceil(courses.length / coursesPerPage)
    );
  };

  return (
    <section id="courses" className="course-section">
      <h2>Courses we provide</h2>
      <div className="slider-container">
        <div className="course-cards-container">
          {courses
            .slice(currentIndex * coursesPerPage, (currentIndex + 1) * coursesPerPage)
            .map((course, index) => (
              <div key={index} className="course-card">
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
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="slider-controls">
          <button className="slider-button" onClick={handlePrev}>
            &lt;
          </button>
          <button className="slider-button" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>
      <button className="explore-more-button">Explore More →</button>
    </section>
  );
};

export default CourseCards;
