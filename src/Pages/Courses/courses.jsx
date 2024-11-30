import { useState } from "react";
import Navbar from "../../components/Header/header";
import "./courses.css";
import CourseSection from "./coursesPage";

const QASection = () => {
  const [selectedImage, setSelectedImage] = useState({
    src: "./Images/csaestudies.png",
    title: "QA Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus urna orci.",
  });

  const thumbnails = [
    {
      src: "./Images/Devops engineer.jpeg",
      title: "Office 1",
      description: "Description for Office 1",
    },
    {
      src: "./Images/Devops engineer.jpeg",
      title: "Typing",
      description: "Description for Typing",
    },
    {
      src: "./Images/Devops engineer.jpeg",
      title: "Office 2",
      description: "Description for Office 2",
    },
  ];

  return (
    <>
      <Navbar />
      <section>
        <div className="qa-section">
          {/* Main Card */}
          <div className="main-card">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="main-image"
            />
            <div className="content">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>

          {/* Thumbnail Stack */}
          <div className="thumbnail-stack">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb.src}
                alt={thumb.title}
                className="thumbnail"
                onClick={() => setSelectedImage(thumb)}
              />
            ))}
          </div>
        </div>
      </section>
      <div>
        <CourseSection />
      </div>
    </>
  );
};

export default QASection;
