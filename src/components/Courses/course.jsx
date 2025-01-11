import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./course.css";

const courses = [
  {
    id: 1,
    title: "Full Stack Developer",
    description: "Automate your testing process with the latest tools.",
    image: "./Images/Full stack developer.jpg",
    bestseller: true,
    discount: "20% Off",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Business Analyst(BA)",
    description: "Master software testing techniques and tools.",
    image: "./Images/Business analyst.jpg",
    bestseller: true,
    discount: "20% Off",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Scrum Master",
    description: "Learn the essentials of manual software testing.",
    image: "./Images/Scrum master.jpg",
    bestseller: true,
    discount: "20% Off",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Software Development Engineer in Testing (SDET)",
    description: "Automate your testing process with the latest tools.",
    image: "./Images/SDET.jpeg",
    bestseller: true,
    discount: "20% Off",
    rating: 4.9,
  },
  {
    id: 5,
    title: "Devops Engineer",
    description: "Automate your testing process with the latest tools.",
    image: "./Images/Devops engineer.jpeg",
    bestseller: true,
    discount: "20% Off",
    rating: 4.9,
  },
  {
    id: 6,
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
    autoplaySpeed: 20000,
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

  const handleCardClick = (id) => {
    window.open(`/course-details/${id}`, "_blank");
  };

  return (
    <section id="courses" className="course-section">
      <h2>Courses we provide</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {courses.map((course, index) => (
            <div
              key={index}
              className="course-card"
              onClick={() => handleCardClick(course.id)}
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
