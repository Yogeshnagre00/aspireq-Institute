import React, { Suspense, useState } from "react";
import { Footer } from "../../components/Footer/footer";
import Navbar from "../../components/Header/header";
import "./contactUs.css";

const FAQSection = React.lazy(() =>
  import("../../components/FAQSection/faqSection")
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
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to check if all required fields are filled
  const isFormValid = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.mobile.trim() !== "" &&
      formData.message.trim() !== ""
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataToSend = {
      FirstName: formData.firstName,
      LastName: formData.lastName,
      EmailID: formData.email,
      MobileNumber: formData.mobile,
      Message: formData.message,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwmakg-xSlMoRiW-n_10BChKkHvsWBVLDnfxaJjPVE5QPfuIEat2YsQxR5YZORYG2k-rw/exec?action=writecontactdetails",
        {
          redirect: "follow",
          method: "POST",
          headers: {
            "Content-Type": "text/plain; charset-utf-8",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (response.ok) {
        setModalMessage(
          <>
            <i
              className="fa-solid fa-circle-check"
              style={{
                color: "#0daf36",
                marginLeft: "-15px",
                marginRight: "10px",
              }}
            ></i>
            Thank you for contacting us, we will connect with you soon!
          </>
        );
        setShowModal(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        setModalMessage(
          "There was an error on the server side while submitting the form. Please try again."
        );
        setShowModal(true);
      }
    } catch (error) {
      setModalMessage(
        `There was an error submitting the form: ${error.message}. Please try again.`
      );
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-form-container">
        <h1 className="contacth1">Contact us</h1>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">
                First Name <span style={{ color: "red" }}>&#x2A;</span>
              </label>
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
              <label htmlFor="lastName">
                Last Name <span style={{ color: "red" }}>&#x2A;</span>
              </label>
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
              <label htmlFor="email">
                Email ID <span style={{ color: "red" }}>&#x2A;</span>
              </label>
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
              <label htmlFor="mobile">
                Mobile Number <span style={{ color: "red" }}>&#x2A;</span>
              </label>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                pattern="[0-9]*"
                required
                onInvalid={(e) => {
                  if (!e.target.validity.valid) {
                    e.target.setCustomValidity(
                      "Only numbers are allowed "
                    );
                  }
                }}
                onInput={(e) => e.target.setCustomValidity("")}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Message <span style={{ color: "red" }}>&#x2A;</span>
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type Here."
              required
            />
          </div>
          <button
            type="submit"
            className="submit-btn"
            disabled={!isFormValid() || isSubmitting}
            style={{
              backgroundColor: isFormValid() ? "#007bff" : "silver",
              cursor: isFormValid() ? "pointer" : "not-allowed",
            }}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      {showModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal-content">
            <button
              className="custom-modal-close"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <div className="custom-modal-header">Aspireq</div>
            <div className="custom-modal-message">{modalMessage}</div>
            <button
              className="custom-modal-button"
              onClick={() => setShowModal(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <FAQSection />
      </Suspense>
      <Footer />
    </>
  );
};

export default ContactForm;
