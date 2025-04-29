import { useEffect, useState } from "react";
import "./career.css";

const testimonials = [
  {
    rating: "5.0",
    text: "As an industrial, securing capacity and ensuring safety in the production process. This is a critical role.",
    name: "Abhijit Pampatwar",
    profession: "Founder & CEO At ASPIREQ",
    image: "./Images/heroes/Abhijit pampatware profile.webp",
  },
  {
    rating: "5.0",
    text: "This is a critical role. As an industrial, securing capacity and ensuring safety in the production process.",
    name: "Pankaj Pampatware",
    profession: "Program Manager at emerson",
    image: "./Images/heroes/pankaj pampatwar profile.webp",
  },
  {
    rating: "5.0",
    text: "As an industrial, securing capacity and ensuring safety in the production process. This is a critical role.",
    name: "Mayur Yambal",
    profession: "Chief Platform & Delivery Officer at iauro Systems",
    image: "./Images/heroes/Mayur Yambal profile.webp",
  },
  {
    rating: "5.0",
    text: "As an industrial, securing capacity and ensuring safety in the production process. This is a critical role.",
    name: "Mahesh Yambal",
    profession: "Senior Test Engineer at Josh",
    image: "./Images/heroes/Mahesh Yambal.webp",
  },
  {
    rating: "5.0",
    text: "As an industrial, securing capacity and ensuring safety in the production process. This is a critical role.",
    name: "Baslingappa Songi",
    profession: "Tecnical Lead at L&T",
    image: "./Images/heroes/Baslingappa Songi.webp",
  },
  {
    rating: "5.0",
    text: "As an industrial, securing capacity and ensuring safety in the production process. This is a critical role.",
    name: "Rajesh Patil",
    profession: "Performace Test Lead at L&T",
    image: "./Images/heroes/Rajesh Patil Profile.webp",
  },
  {
    rating: "5.0",
    text: "This is a critical role. As an industrial, securing capacity and ensuring safety in the production process.",
    name: "Parmeshwar Nagre",
    profession: "Software Engineer at Commonwealth Bank Of Australia",
    image: "./Images/heroes/Parmeshwar Nagre Profile.webp",
  },
  {
    rating: "5.0",
    text: "As an industrial, securing capacity and ensuring safety in the production process. This is a critical role.",
    name: "Ekta Dhote",
    profession: "QA Automation Engineer at Servian",
    image: "./Images/heroes/ekata profile.jpg",
  },
  {
    rating: "5.0",
    text: "As an industrial, securing capacity and ensuring safety in the production process. This is a critical role.",
    name: "Shivani Dhole",
    profession: "Associate Lawyer",
    image: "./Images/heroes/Shivani Dhole Profile.webp",
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
