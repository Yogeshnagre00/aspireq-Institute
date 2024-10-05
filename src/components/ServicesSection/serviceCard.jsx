// ServiceCard.js
import PropTypes from "prop-types"; // Import PropTypes
import "./serviceCard.css";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Define the prop types for the component
ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
