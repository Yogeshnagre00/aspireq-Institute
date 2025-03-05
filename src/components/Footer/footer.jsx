import "@fortawesome/fontawesome-free/css/all.min.css";

import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="col-md-3">
            <h3 className="footer-heading">Courses</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="/course-details/5-ScrumMaster"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Scrum Master
                </a>
              </li>
              <li>
                <a
                  href="/course-details/1-FullStackDevelopment"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full Stack Developer
                </a>
              </li>
              <li>
                <a
                  href="/course-details/2-SoftwareDevelopmentEngineerinTesting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SDET
                </a>
              </li>
              <li>
                <a
                  href="/course-details/3-DevOpsEngineer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DevOps Engineer
                </a>
              </li>
              <li>
                <a
                  href="/course-details/4-BusinessAnalyst"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Business Analyst
                </a>
              </li>
              <li>
                <a href="#">Corporate Training</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="footer-heading">Training in Domains</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Healthcare</a>
              </li>
              <li>
                <a href="#">Finance</a>
              </li>
              <li>
                <a href="#">Banking</a>
              </li>
              <li>
                <a href="#">Insurance</a>
              </li>
              <li>
                <a href="#">E-commerce</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 ">
            <h4 className="footer-heading">Meet Us</h4>
            <ul className="footer-contact">
              <li>+91 9564251252</li>
              <li>info@aspireq.com</li>
              <li>Address</li>
            </ul>
          </div>
          <div className="col-md-3">
            {/* <div className="footer-logo">
              <img src="/Images/Frame 27319.webp" alt="AspireQ Logo" />
            </div>
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
              odio dui.
            </p> */}
            <div className="footer-column map-container">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.084971862631!2d-104.88748578468123!3d39.609392479461066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c803987a4e82f%3A0x5e9ef69d04a94ff!2s8480%20E%20Orchard%20Rd%20%233150%2C%20Greenwood%20Village%2C%20CO%2080111%2C%20USA!5e0!3m2!1sen!2sin!4v1677723129274!5m2!1sen!2sin"
                width="500"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <hr className="footer-separator" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            Copyright ©2025 aspireq. All rights reserved.
          </p>
          <div className="footer-social">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i
                className="fa-brands fa-linkedin"
                style={{ color: "#1159d4" }}
              ></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i
                className="fa-brands fa-twitter"
                style={{ color: "#0d61f2" }}
              ></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i
                className="fa-brands fa-facebook"
                style={{ color: "#0561ff" }}
              ></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i
                className="fa-brands fa-youtube"
                style={{ color: "#da1010" }}
              ></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
