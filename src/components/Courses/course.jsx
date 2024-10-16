import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
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
    title: "Corporate Training",
    description: "Automate your testing process with the latest tools.",
    image: "./Images/corporate.jpeg",
    bestseller: true,
    discount: "20% Off",
    rating: 4.9,
  },
];

const CourseCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="courses" className="course-section">
      <h2>Courses we provide</h2>
      <div className="slider-container">
        <Slider {...settings}>
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
                  <span className="rating">⭐ {course.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <button className="explore-more-button">Explore More →</button>
    </section>
  );
};

export default CourseCards;
