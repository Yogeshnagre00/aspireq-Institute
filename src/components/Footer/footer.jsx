import "@fortawesome/fontawesome-free/css/all.min.css";

import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-logo">
              <img src="./Images/Frame 27319.png" alt="AspireQ Logo" />
            </div>
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
              odio dui.
            </p>
          </div>
          <div className="col-md-3">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="footer-heading">Industries</h4>
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
        </div>

        <hr className="footer-separator" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            Copyright © 2024 aspireq. All rights reserved.
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

// export default Footer;