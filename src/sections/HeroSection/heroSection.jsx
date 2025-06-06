import "./heroSection.css";

const HeroSection = () => {
  const handleGetStartedClick = () => {
    window.open("https://forms.gle/Qcw3NSeeAsaxuVGh9", "_blank");
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
        </div>
        <div className="hero-icons">
          <div className="icon">💡 Creative Thinking</div>
          <div className="icon">🎓 Career-Oriented</div>
          <div className="icon">
            <img
              src="/Images/graduation-diploma.png"
              alt="Offer Letter"
              className="offer-icon"
            />{" "}
            Offer-Letter In Hand
          </div>
        </div>
      </div>
      <div className="hero-image-section">
        <img src="/Images/Animation.gif" alt="Animation" />
      </div>
    </div>
  );
};

export default HeroSection;
