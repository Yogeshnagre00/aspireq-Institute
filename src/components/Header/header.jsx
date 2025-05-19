import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  const handleLetsTalkClick = () => {
    if (location.pathname !== "/contactUs") {
      navigate("/contactUs");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => (location.pathname === path ? "active-link" : "");

  useEffect(() => {
    let lastScrollTop = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      if (currentScrollTop < lastScrollTop) {
        // Scrolling Up
        setIsScrollingUp(true);
      } else {
        // Scrolling Down
        setIsScrollingUp(false);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={!isScrollingUp ? "hide" : ""}>
      <nav className="navbar">
        <div className="logo">
          <img src="/Images/logo.webp" alt="Logo" />
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" className={isActive("/")}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/courses" className={isActive("/courses")}>
              COURSES
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className={isActive("/aboutus")}>
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/" className={isActive("/careers")}>
              CAREERS
            </Link>
          </li>
        </ul>

        <a
          href="#"
          className={`btn ${
            location.pathname === "/contactUs" ? "hidden" : ""
          }`}
          onClick={handleLetsTalkClick}
        >
          Let&apos;s Connect
        </a>

        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
