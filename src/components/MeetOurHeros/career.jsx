import { useState, useEffect } from "react";
import "./career.css";

const testimonials = [
  {
    rating: "5.0",
    text: "As an industrial, securing capacity and ensuring safety in the production process. This is a critical role.",
    name: "Sia Brown",
    profession: "Behavioral Science",
    image: "./Images/girl1.webp",
  },
  {
    rating: "5.0",
    text: "This is a critical role. As an industrial, securing capacity and ensuring safety in the production process.",
    name: "Mia Chen",
    profession: "Software Engineering",
    image: "./Images/girl2.webp",
  },
  {
    rating: "5.0",
    text: "As an industrial, securing capacity and ensuring safety in the production process. This is a critical role.",
    name: "Emma Stone",
    profession: "Marketing",
    image: "./Images/girl3.webp",
  },
  {
    rating: "5.0",
    text: "As an industrial, securing capacity and ensuring safety in the production process. This is a critical role.",
    name: "Chris Lee",
    profession: "Finance",
    image: "./Images/boy2.webp",
  },
  {
    rating: "5.0",
    text: "As an industrial, securing capacity and ensuring safety in the production process. This is a critical role.",
    name: "John Doe",
    profession: "Product Management",
    image: "./Images/boy1.webp",
  },
  {
    rating: "5.0",
    text: "As an industrial, securing capacity and ensuring safety in the production process. This is a critical role.",
    name: "Sia Brown",
    profession: "Behavioral Science",
    image: "./Images/girl1.webp",
  },
  {
    rating: "5.0",
    text: "This is a critical role. As an industrial, securing capacity and ensuring safety in the production process.",
    name: "Mia Chen",
    profession: "Software Engineering",
    image: "./Images/girl2.webp",
  },
  {
    rating: "5.0",
    text: "As an industrial, securing capacity and ensuring safety in the production process. This is a critical role.",
    name: "Emma Stone",
    profession: "Marketing",
    image: "./Images/girl3.webp",
  },
  {
    rating: "5.0",
    text: "As an industrial, securing capacity and ensuring safety in the production process. This is a critical role.",
    name: "Chris Lee",
    profession: "Finance",
    image: "./Images/boy2.webp",
  },
  {
    rating: "5.0",
    text: "As an industrial, securing capacity and ensuring safety in the production process. This is a critical role.",
    name: "John Doe",
    profession: "Product Management",
    image: "./Images/boy1.webp",
  },
  {
    rating: "5.0",
    text: "As an industrial, securing capacity and ensuring safety in the production process. This is a critical role.",
    name: "Emma Stone",
    profession: "Marketing",
    image: "./Images/girl3.webp",
  },
  {
    rating: "5.0",
    text: "As an industrial, securing capacity and ensuring safety in the production process. This is a critical role.",
    name: "Emma Stone",
    profession: "Marketing",
    image: "./Images/girl3.webp",
  },
];

const TestimonialSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTestimonial((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (index) => {
    setSelectedTestimonial(index);
  };

  return (
    <div className="testimonial-section">
      <div className="profile-images">
        {testimonials.map((testimonial, index) => (
          <img
            key={index}
            src={testimonial.image}
            alt={testimonial.name}
            onClick={() => handleImageClick(index)}
            className={`profile-image profile-image-${index + 1} ${
              selectedTestimonial === index ? "selected" : ""
            }`}
          />
        ))}
      </div>

      <div className="testimonial-card">
        <div className="rating">
          <span className="star-icon">⭐</span>{" "}
          {testimonials[selectedTestimonial].rating}
        </div>
        <p className="testimonial-text">
          {testimonials[selectedTestimonial].text}
        </p>
        <div className="testimonial-author">
          <img
            src={testimonials[selectedTestimonial].image}
            alt={testimonials[selectedTestimonial].name}
            className="author-image"
          />
          <div>
            <div className="author-name">
              {testimonials[selectedTestimonial].name}
            </div>
            <div className="author-profession">
              {testimonials[selectedTestimonial].profession}
            </div>
          </div>
        </div>
        <div className="quote-mark">“</div>
      </div>
    </div>
  );
};

export default TestimonialSection;
