import "@fortawesome/fontawesome-free/css/all.min.css";

import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          {/* Courses */}
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
          {/* Domains */}
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
          {/* Address */}
          <div className="col-md-3 ">
            <h4 className="footer-heading">Meet Us</h4>
            <ul className="footer-contact">
              <li>+91 9564251252</li>
              <li>info@aspireq.com</li>
              <li>Address</li>
              <li>
                Aspireq 16 A,
                <br /> Karle Empire 2, Nanded City, <br />
                Sinhgad Road, Pune - 411041
              </li>
            </ul>
          </div>
          {/* map */}
          <div className="col-md-3">
            <div className="footer-column map-container">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13699.401700596027!2d73.787107!3d18.457237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29508b315ba8d%3A0xf9b59e56a766bdc0!2sKarle%20Empire!5e1!3m2!1sen!2sin!4v1742202458982!5m2!1sen!2sin"
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
