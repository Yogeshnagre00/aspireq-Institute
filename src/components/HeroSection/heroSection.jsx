import "./heroSection.css";

const HeroSection = () => {
  const handleGetStartedClick = () => {
    alert("Get Started clicked!");
  };

  return (
    <div className="hero-section">
      <div className="hero-text-content">
        <h1>
          Building Tomorrow&apos;s Experts By Elevating Careers with
          Industry-Leading Programs
        </h1>
        <p>
          Driven by Innovation, Powered by Knowledge <br /> Your Future Starts
          Here!
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={handleGetStartedClick}>
            Get Started &rarr;
          </button>
          {/* <button className="btn-secondary" onClick={handleWatchDemoClick}>
            Watch Demo
          </button> */}
        </div>
        <div className="hero-icons">
          <div className="icon">💡 Creative Thinking</div>
          <div className="icon">🎓 Career-Oriented</div>
          <div className="icon">&#128220; Offer-Letter In Hand</div>
        </div>
      </div>
      <div className="hero-image-section">
        <img src="/Images/Animation.gif" alt="Animation" />
      </div>
    </div>
  );
};

export default HeroSection;
