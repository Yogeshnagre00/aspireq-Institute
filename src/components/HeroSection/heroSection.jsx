import "./heroSection.css";

const HeroSection = () => {
  const handleGetStartedClick = () => {
    alert("Get Started clicked!");
  };

  const handleWatchDemoClick = () => {
    alert("Watch Demo clicked!");
  };

  return (
    <div className="hero-section">
      <div className="hero-text-content">
        <h1>
          Deliver Better Experiences Your
          <br />
          Users Depend On It.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus
          vitae leo nunc.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={handleGetStartedClick}>
            Get Started &rarr;
          </button>
          <button className="btn-secondary" onClick={handleWatchDemoClick}>
            Watch Demo
          </button>
        </div>
        <div className="hero-icons">
          <div className="icon">&#128483; Public Speaking</div>
          <div className="icon">🎓 Career-Oriented</div>
          <div className="icon">💡 Creative Thinking</div>
        </div>
      </div>
      <div className="hero-image-section">
        <img src="/Images/Animation.gif" alt="Animation" />
      </div>
    </div>
  );
};

export default HeroSection;
