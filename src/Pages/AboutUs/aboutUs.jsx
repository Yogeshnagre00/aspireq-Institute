import { Footer } from "../../components/Footer/footer";
import Navbar from "../../components/Header/header";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="heading">
        <h1 className="h1">About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      </div>
      <section className="about-section">
        {/* Who We Are Section */}
        <div className="about-card">
          <h3 className="small-heading">Who We Are</h3>
          <h2 className="main-heading">Who We Are</h2>
          <p className="description">
            lorem ipsum doller fit amet Lorem ipsum doller fit emet Lorem ipsum
            doller fit amet Lorem ipsum Woller fit amet Lorem ipsum doller fit
            amet Lorem ipsum doller fit amet Lorem ipsum doller fit amet Lorem
            ipsum doller fit amet Lorem ipsum doller fit
          </p>
          <img
            src="/Images/Rectangle 15.png"
            alt="Who We Are"
            className="about-image"
          />
        </div>

        {/* Why Us Section */}
        <div className="about-card">
          <h3 className="small-heading">Why Us</h3>
          <h2 className="main-heading">Why Us</h2>
          <p className="description">
            lorem ipsum doller fit amet Lorem ipsum doller fit emet Lorem ipsum
            doller fit amet Lorem ipsum Woller fit amet Lorem ipsum doller fit
            amet Lorem ipsum doller fit amet Lorem ipsum doller fit amet Lorem
            ipsum doller fit amet Lorem ipsum doller fit
          </p>
          <img
            src="/Images/Rectangle 15.png"
            alt="Why Us"
            className="about-image"
          />
        </div>
      </section>
      <section className="our-vision">
        <h2>Our Vision</h2>
        <div className="vision-container">
          <div>
            <img
              src="/Images/ourvison.png"
              alt="ASPIREQ Logo"
              className="circleimage"
            />
          </div>

          <div className="box top-left">
            <h3>Reach the Goal</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet.
            </p>
          </div>

          <div className="box top-right">
            <h3>Best Performance</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet.
            </p>
          </div>

          <div className="box bottom-center">
            <h3>Save Time and Efforts</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </section>
      <section className="features-section">
        <h2>Features</h2>
        <div className="feature-card">
          <div className="feature-image-container">
            <img
              src="/Images/Rectangle 15.png"
              alt="Feature"
              className="feature-image"
            />
          </div>
          <div className="feature-content">
            <h3>
              We are always working to provide you the best of the features in
              all aspects.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur.
            </p>
            <button className="learn-more-button">Learn more →</button>
          </div>
        </div>

        <div className="feature-card reverse">
          <div className="feature-image-container">
            <img
              src="/Images/Rectangle 15.png"
              alt="Feature"
              className="feature-image"
            />
          </div>
          <div className="feature-content">
            <h3>
              We are always working to provide you the best of the features in
              all aspects.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur.
            </p>
            <button className="learn-more-button">Learn more →</button>
          </div>
        </div>
      </section>
      <section className="our-culture">
        <h2>Our Culture</h2>
        <div className="culture-cards">
          <div className="card">
            <div className="icon">🌐</div>
            <h3>Good to Great Culture</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet.
            </p>
          </div>
          <div className="card">
            <div className="icon">🌱</div>
            <h3>Growing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet.
            </p>
          </div>
          <div className="card">
            <div className="icon">⚖️</div>
            <h3>Well Balanced</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
