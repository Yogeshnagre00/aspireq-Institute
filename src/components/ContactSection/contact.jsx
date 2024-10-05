import { useState } from "react";
import "./contact.css";

export const ContactSection = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Handle email submission (e.g., send it to an API or another file)
      console.log("Email submitted:", email);
      setEmail(""); // Clear input after submission
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1>Get started with a free 30 minute consultation with an expert.</h1>
        <form className="inputWithButton" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={handleChange}
          />
          <button type="submit">
            Contact Us <span>&#10132;</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
