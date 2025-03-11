import { useState } from "react";
import "./faqSection.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What about placement?",
      answer:
        "We provide 100% job guarantee. Here, at aspireq there is a complete roadmap for your career,Training + Internship and Job.",
    },
    {
      question: "Are there any live projects or internships you offer?",
      answer:
        "Yes, we do believe real time project experience is very important.Just, technical and bookish knowledge is not enough. Domain knowledge and live projects are crucial things which we provide at aspireq institute along with internship certificates as well.",
    },
    {
      question: "What is the admission criteria?",
      answer:
        "Any aspirant candidate who wants to do a career in software field is eligible, can apply.",
    },
    {
      question: "What is the duration of course",
      answer:
        "Course duration is 3 months training then 6 months internship and guaranteed job. ",
    },
    {
      question: "Who are the Trainers for courses?",
      answer: "Trainers are working professionals in the software industry.",
    },
    {
      question: "How much is the course fee",
      answer:
        "It depends on the course you are taking. For further information, you can come to the office and contact the team.",
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
