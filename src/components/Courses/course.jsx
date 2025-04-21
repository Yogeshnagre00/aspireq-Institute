import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./course.css";

const courses = [
  {
    id: 1,
    title: "Full Stack Developer",
    description: "Conquer the coding ground.",
    image: "./Images/Full stack developer.webp",
    bestseller: true,
    discount: "20% Off",
    rating: "5.0",
  },
  {
    id: 2,
    title: "Software Development Engineer in Testing (SDET)",
    description: "Be a software quality expert.",
    image: "./Images/SDET.webp",
    bestseller: true,
    discount: "20% Off",
    rating: "5.0",
  },
  {
    id: 3,
    title: "Devops Engineer",
    description: "Become Hero of Deployment.",
    image: "/Images/Devops engineer.webp",
    bestseller: true,
    discount: "20% Off",
    rating: "5.0",
  },
  {
    id: 4,
    title: "Business Analyst(BA)",
    description: "Master the Cognizance Virtuoso.",
    image: "./Images/Business analyst.webp",
    bestseller: true,
    discount: "20% Off",
    rating: "5.0",
  },
  {
    id: 5,
    title: "Scrum Master",
    description: "Master the Agile project management.",
    image: "./Images/Scrum master.webp",
    bestseller: true,
    discount: "20% Off",
    rating: "5.0",
  },
  {
    id: 6,
    title: "Corporate Training",
    description: "Automate your testing process with the latest tools.",
    image: "./Images/corporate.webp",
    bestseller: true,
    discount: "20% Off",
    rating: "5.0",
  },
];

const CourseCards = () => {
  const navigate = useNavigate();
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

  //for navigate courses with it
  const handleCardClick = (event, id) => {
    event.preventDefault();
    window.open(`/course-details/${id}`, "_blank");
  };
  //for navigate explore For coursesPage
  const handleExploreMore = () => {
    navigate("/courses");
  };
  return (
    <section id="courses" className="courses-section">
      <h2>Courses We Provide</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {courses.map((course, index) => (
            <div
              key={index}
              className="course-card"
              // onClick={(event) => handleCardClick(event, course.id)}
            >
              {/* course image */}
              <div className="course-image">
                <img src={course.image} alt={course.title} loading="lazy" />
                {course.bestseller && course.discount && (
                  <div className="custom-label">
                    <span className="label-bestseller">Bestseller</span>
                    <span className="label-discount">{course.discount}</span>
                  </div>
                )}
              </div>
              {/* course content */}
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-rating">
                  <span className="rating">⭐ {course.rating}</span>
                  <div className="course-arrow">
                    <a
                      href={`/course/${course.id}`}
                      className="arrow-link"
                      onClick={(event) => handleCardClick(event, course.id)}
                    >
                      <i className="arrow-icon">→</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <button
        className="explore-more-button"
        onClick={handleExploreMore}
        aria-label="Explore more courses"
      >
        Explore More →
      </button>
    </section>
  );
};

export default CourseCards;
