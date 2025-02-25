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
        "We provide 100% job guarantee. Here, at AspireQ, there will be a complete roadmap for your career.",
    },
    {
      question: "What syllabus you are going to cover?",
      answer: "",
    },
    {
      question: "What is the admission criteria?",
      answer: "",
    },
    {
      question: "How much fees will be?",
      answer: "",
    },
    {
      question: "What is the duration of the course?",
      answer: "",
    },
    {
      question: "Who are the trainers for the courses?",
      answer: "",
    },
    {
      question: "Is there any live project or internship do you offer?",
      answer:
        "Yes, we do belive real time project experience is very much important.Just, technical and bookish knowledge is not enough.Domain knowledge and live project is crucial which we provide at aspireq institute along with internship certificate as well.",
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
