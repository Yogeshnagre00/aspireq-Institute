import React, { Suspense, useState } from "react";
import { Footer } from "../../components/Footer/footer";
import Navbar from "../../components/Header/header";
import "./contactUs.css";

// Lazy load components
const FAQSection = React.lazy(() =>
  import("../../components/FAQSection/faqSection")
);
const ContactSection = React.lazy(() =>
  import("../../components/ContactSection/contact")
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyUBf46iZy1jsaw1gmEYcd4LgfhiuQiCfrlxy7uJmx9i79IxLEEHfPKHfZWrCoJpFTonQ/exec?action=writecontactdetails",
        {
          redirect: "follow",
          method: "POST",
          headers: {
            "Content-Type": "text/plain; charset-utf-8",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Form Submitted:", formData);
        console.log("Server Response:", result);
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        console.error("Server returned an error:", response.status);
        alert(
          "There was an error on the server side while submitting the form. Please try again."
        );
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-form-container">
        <h1 className="contacth1">Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus
          vitae leo nunc.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email ID"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type here..."
              required
            />
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      {/* Suspense fallback is shown while the lazy-loaded component is being fetched */}
      <Suspense fallback={<div>Loading...</div>}>
        <FAQSection />
        <ContactSection />
      </Suspense>
      <Footer />
    </>
  );
};

export default ContactForm;
