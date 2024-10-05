import PropTypes from "prop-types";

export const BlogCard = ({
  imageSrc,
  tag,
  time,
  title,
  description,
  author,
  authorImage,
  date,
}) => (
  // const tagClass = tag.toLowerCase().replace(" ", "-");
  <div className="card">
    <img src={imageSrc} alt={title} />
    <div className="card-content">
      <div className="meta">
        <span className={`tag ${tag.toLowerCase().replace(" ", "-")}`}>
          {tag}
        </span>
        <span className="time"> &#9201;{time}</span>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="meta">
        <div className="author-info">
          <img src={authorImage} alt="" className="author-logo" />
          <span className="author-name">{author}</span>
        </div>
        <span className="date">{date}</span>
        {/* </div>
        <span>{date}</span> */}
      </div>
    </div>
  </div>
);

BlogCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export const CaseStudyCard = ({
  imageSrc,
  tag,
  time,
  title,
  description,
  date,
}) => (
  <div className="card">
    <img src={imageSrc} alt={title} loading="lazy" />
    <div className="card-content">
      <div className="meta">
        <span className={`tag ${tag.toLowerCase().replace(" ", "-")}`}>
          {tag}
        </span>
        <span className="time">&#9201;{time}</span>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="meta">
        <button className="read-more">Read More</button>
        <span>{date}</span>
      </div>
    </div>
  </div>
);

CaseStudyCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
