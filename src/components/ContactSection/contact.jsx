import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./contact.css";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const location = useLocation();

  const handleChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setModalMessage("Please enter a valid email address.");
      setShowModal(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwmakg-xSlMoRiW-n_10BChKkHvsWBVLDnfxaJjPVE5QPfuIEat2YsQxR5YZORYG2k-rw/exec?action=emailconsultation",
        {
          method: "POST",
          headers: { "Content-Type": "text/plain; charset-utf-8" },

          body: JSON.stringify({ Email: email }),
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
            Email successfully submitted.
            <br />
            <br />
            <span>&nbsp;</span> Thank you! Will reachout to you soon.
          </>
        );
        setEmail("");
      } else {
        setModalMessage(
          <>
            <i
              className="fa-solid fa-circle-xmark"
              style={{
                color: "#a82424",
                marginRight: "10px",
              }}
            ></i>
            There was an error submitting your email. Please try again.
          </>
        );
      }
    } catch (error) {
      console.error("Error during submission:", error);
      setModalMessage(
        "An error occurred while submitting your email. Please try again."
      );
    } finally {
      setShowModal(true);
      setIsSubmitting(false);
    }
  };

  if (location.pathname === "/contactUs") return null;

  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          <h1>
            Get started with a free 30-minute consultation with an expert.
          </h1>
          <form className="inputWithButton" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="     Enter Your Email Address"
              value={email}
              onChange={handleChange}
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}{" "}
              {!isSubmitting && <span></span>}
            </button>
          </form>
        </div>
      </section>

      {showModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal-content">
            <button
              className="custom-modal-close"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <div className="custom-modal-header">&nbsp; ASPIREQ</div>
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
    </>
  );
};

export default ContactSection;
