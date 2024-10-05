import "./heroSection.css";

export const HeroSection = () => {
  const handleGetStartedClick = () => {
    alert("Get Started clicked!");
    // You can add more logic here (e.g., navigating to a different page)
  };

  const handleWatchDemoClick = () => {
    alert("Watch Demo clicked!");
    // Add logic for Watch Demo button
  };

  return (
    <div className="hero-section">
      <h1>
        Deliver Better Experiences
        <br />
        Your Users Depend On It.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae
        leo nunc.
      </p>
      <div className="hero-buttons">
        <button className="btn-primary" onClick={handleGetStartedClick}>
          Get Started &rarr;
        </button>
        <button className="btn-secondary" onClick={handleWatchDemoClick}>
          Watch Demo
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
