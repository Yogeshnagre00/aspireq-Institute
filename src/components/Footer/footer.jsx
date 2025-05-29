import "@fortawesome/fontawesome-free/css/all.min.css";

import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          {/* Courses */}
           <div className="col-md-3">
            <h4 className="footer-heading">Company Policy </h4>
            <ul className="footer-links">
              <li>
                <a
                  href="/privacypolicy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/termsOfService"
                target="_blank"
                rel="noopener noreferrer">Terms of Service</a>
              </li>
              <li>
                <a
                  href="/cookiespolicy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
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
                  href="/course-details/4-BusinessAnalyst"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Business Analyst
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
            </ul>
          </div>
          {/* Domains */}
         
          {/* Address */}
          <div className="col-md-3 ">
            <h4 className="footer-heading">Meet Us</h4>
            <ul className="footer-contact">
              <li>+919860310187</li>
              <li>info@aspireq.in</li>
              <li>Address</li>
              <li>
                Office no. B-04
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
            <a
              href="https://www.linkedin.com/company/aspireq/?viewAsMember=true"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-linkedin" style={{ color: "#1159d4" }}></i>
            </a>
            <a href="#" rel="noopener noreferrer">
              <i
                className="fa-brands fa-twitter"
                style={{ color: "#0d61f2" }}
              ></i>
            </a>
            <a href="#" rel="noopener noreferrer">
              <i
                className="fa-brands fa-facebook"
                style={{ color: "#0561ff" }}
              ></i>
            </a>
            <a href="#" rel="noopener noreferrer">
              <i
                className="fa-brands fa-youtube"
                style={{ color: "#da1010" }}
              ></i>
            </a>
            <a href="#" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
