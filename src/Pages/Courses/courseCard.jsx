import PropTypes from "prop-types";
import "./CourseCard.css";

const CourseCard = ({
  image,
  category,
  title,
  lessons,
  duration,
  students,
  author,
  authorImage,
  price,
  rating,
}) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="course-card__stars">
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </div>
    );
  };

  return (
    <div className="course-card">
      <div className="course-card__image">
        <img src={image} alt={title} />
        <span className="course-card__category">{category}</span>
      </div>
      <div className="course-card__content">
        <div className="course-card__rating">
          {renderStars(rating)}
          <span>({rating})</span>
        </div>
        <h4 className="course-card__title">{title}</h4>
        <div className="course-card__details">
          <p>&#128196; {lessons} Lessons</p>
          <p>&#9719; {duration}</p>
          <p>
            <i className="fa fa-user"></i> Students {students}+
          </p>
        </div>
        <div className="course-card__author">
          <img
            src={authorImage}
            alt={author}
            className="course-card__author-image"
          />
          <span>By {author}</span>
        </div>
        <div className="course-card__footer">
          <span className="course-card__price">${price}</span>
          <button className="course-card__button">→</button>
        </div>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lessons: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  students: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired, // Added prop type for rating
};

export default CourseCard;
