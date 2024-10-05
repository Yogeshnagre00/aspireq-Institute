import { useState } from "react";
import "./faqSection.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "How experienced are your testers?",
      answer:
        "Our testers have over 5 years of experience in manual and automated testing.",
    },
    {
      question: "What browsers and devices do you test on?",
      answer:
        "We test on all major browsers like Chrome, Firefox, Safari, and Edge, as well as on mobile devices running iOS and Android.",
    },
    {
      question: "What type of clients have you worked with?",
      answer:
        "We have worked with clients ranging from startups to large enterprises in various industries.",
    },
    {
      question: "Do you require a long-term contract?",
      answer:
        "No, we do not require a long-term contract. We offer flexible engagement models.",
    },
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <span className="faq-icon">
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
