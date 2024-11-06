import PropTypes from "prop-types";
import "./herosCard.css";

const HeroCard = ({
  name,
  position,
  description,
  twitterUrl,
  linkedinUrl,
  image,
}) => {
  return (
    <div className="hero-card">
      {image && (
        <img src={image} alt={`${name}'s profile`} className="heros-image" />
      )}
      <h3>{name}</h3>
      <p className="position">{position}</p>
      <p className="description">{description}</p>
      <div className="social-icons">
        {twitterUrl && (
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        )}
        {linkedinUrl && (
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        )}
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  twitterUrl: PropTypes.string,
  linkedinUrl: PropTypes.string,
  image: PropTypes.string.isRequired, // Adding image as a required prop
};

HeroCard.defaultProps = {
  twitterUrl: "#",
  linkedinUrl: "#",
};

export default HeroCard;
