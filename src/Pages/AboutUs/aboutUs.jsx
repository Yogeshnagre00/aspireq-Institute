import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Footer } from "../../components/Footer/footer";
import Navbar from "../../components/Header/header";
import "./aboutUs.css";

const AboutUs = () => {
  // Function to format text by adding a dot before each point
  const formatText = (text) => {
    const words = text.split(",");
    return words.map((word, index) => (
      <span key={index} className="word">
        <b>•</b> {word} {/* Bullet stays attached to word */}
      </span>
    ));
  };
  return (
    <>
      <Navbar />
      {/* Who We Are Section */}
      <section className="about-section">
        <div className="about-card">
          <h3 className="small-heading">Who We Are</h3>
          <h2 className="main-heading">Who We Are</h2>
          <p className="description">
            At ASPIREQ, we are passionate about shaping the next generation with
            the vision of empowering individuals through knowledge and practical
            skills. Our mission is to bridge the gap between academic learning
            and industry demands by providing hands-on training in cutting-edge
            technologies.
          </p>

          {/* Replace static image with Swiper slider */}
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow" // Enables the coverflow effect
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 50, // Rotation of slides
              stretch: 0, // Space between slides
              depth: 100, // Depth for 3D effect
              modifier: 1,
              slideShadows: true, // Adds shadows for better effect
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <img
                src="./Images/Rectangle 15.png"
                alt="Who We Are - Image 1"
                className="about-image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./Images/Rectangle 4402.png"
                alt="Who We Are - Image 2"
                className="about-image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./Images/Rectangle 4402@3x.png"
                alt="Who We Are - Image 3"
                className="about-image"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Why Us Section */}
        <div className="about-card">
          <h3 className="small-heading">Why Us</h3>
          <h2 className="main-heading">Why Us</h2>
          <p className="description">
            At ASPIREQ, we turn aspirations into achievements and dreams into
            reality. With confidence as our cornerstone, we offer students a
            unique opportunity- a job offers upon admission. Dive into an
            immersive learning experience where you&apos;ll work in a
            professional office environment, collaborating on real-time product
            development.
          </p>
          <img src="/Images/whyUs.png" alt="Why Us" className="about-image2" />
        </div>
      </section>
      <section className="our-vision">
        <h2>Our Vision</h2>
        <div className="vision-container">
          <div>
            <img
              src="/Images/ourVision.png"
              alt="ASPIREQ Logo"
              className="circleimage"
            />
          </div>
        </div>
      </section>
      <section className="our-culture">
        <h2>Our Culture</h2>
        <div className="culture-cards">
          <div className="card">
            <div className="icon">🌐</div>
            <h3>VALUES</h3>
            <p>
              {formatText(
                "Integrity, Respect, Empathy, Resilience, Collaboration, Diversity and Inclusion"
              )}
            </p>
          </div>
          <div className="card">
            <div className="icon">🌱</div>
            <h3>Growing</h3>
            <p>
              {formatText(
                "Purpose, Skill Development, Vision Expansion, Team Building"
              )}
            </p>
          </div>
          <div className="card">
            <div className="icon">⚖️</div>
            <h3>Well Balanced</h3>
            <p>
              {formatText(
                "Open-Communication, Work-Life Balance, Learning, Recognition and Reward"
              )}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;

{
  /* <section className="features-section">
  <h2>Features</h2>
  <div className="feature-card">
    <div className="feature-image-container">
      <img
        src="/Images/Rectangle 15.webp"
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
        src="/Images/Rectangle 15.webp"
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
</section> */
}
