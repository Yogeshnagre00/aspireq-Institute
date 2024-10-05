import "./course.css";

const courses = [
  {
    title: "Manual Testing",
    description: "Learn the essentials of manual software testing.",
    image: "./Images/manual testing.jpg",
    bestseller: true,
    discount: "15% Off",
    rating: 4.7,
  },
  {
    title: "Software Testing",
    description: "Master software testing techniques and tools.",
    image: "./Images/software resting.jpg",
    bestseller: true,
    discount: "20% Off",
    rating: 4.8,
  },
  {
    title: "Automated Testing",
    description: "Automate your testing process with the latest tools.",
    image: "./Images/testing.jpg",
    bestseller: true,
    discount: "25% Off",
    rating: 4.9,
  },
  // Add more courses if needed
];

const CourseCards = () => {
  return (
    <div className="course-section">
      <h2>Courses we provide</h2>
      <div className="course-cards-container">
        {courses.map((course, index) => (
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
                <span>⭐ {course.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="explore-more-button">Explore More →</button>
    </div>
  );
};

export default CourseCards;
