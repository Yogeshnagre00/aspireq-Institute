import "./courseDetails.css";
import Navbar from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import Offer from "../../components/offerSection/offer";
import { useState } from "react";

const CourseSection = () => {
  const [activeModule, setActiveModule] = useState("Module 1");
  // Data added directly in the component
  const courseData = {
    title: "IT Statistics Data Science And Business Analysis",
    description:
      "or-em fit omet lorem ipsum ht ometlotern ipsum doner fit ipsum fit ipsum fit amotlørem ipsum doMe1 ht ometlorem ipsum dolle. fit arneuorem ipsurn doller fit amet",
    category: "Development",
    imageUrl: "./Images/Full stack developer.jpg",
    rating: "4.8",
    lessons: 10,
    duration: "19h 30m",
    students: 20,
    author: "Angela",
  };

  const modules = [
    {
      title: "Module 1",
      subtitle: "Master Problem Solving in DS & Algo",
      duration: "12 Weeks",
      description:
        "Problem-solving in DS & Algo is one of the most important topics to master for a software engineer. That is why we spend the first 12 weeks of our program ensuring you have solid problem-solving skills in DS & Algo. High-quality live classes with regular assignment problems, doubt support, mock interviews & competitive contests make sure you develop strong problem-solving muscles.",
      topics: [
        "Time Complexity",
        "Arrays",
        "Strings",
        "Binary Search",
        "2 Pointers",
        "Recursion",
        "Hashing",
        "Sorting",
        "Bit Manipulation",
        "Heap",
        "Greedy",
        "Dynamic Programming",
        "Graphs",
      ],
    },
    {
      title: "Module 2",
      subtitle: "System Design - LLD + HLD",
    },
    {
      title: "Module 3",
      subtitle: "Full Stack Specialization With Project (OPTIONAL)",
    },
    {
      title: "Module 4",
      subtitle: "Leadership Skills (OPTIONAL)",
    },
    {
      title: "Module 5",
      subtitle: "GRAB YOUR DREAM OFFER",
    },
  ];

  const renderTopics = (topics) => {
    return topics.map((topic, index) => <li key={index}>{topic}</li>);
  };
  const handleDownload = () => {
    // Create a download link to the PDF
    const link = document.createElement("a");
    link.href = "/syllabus.pdf"; // Path to the PDF in the public folder
    link.download = "syllabus_full_stack.pdf"; // File name to be saved
    link.click();
  };

  return (
    <>
      <Navbar />
      <section className="coursepage-section">
        <div className="coursepage-content">
          <h2>{courseData.title}</h2>
          <p>{courseData.description}</p>
        </div>
        <div className="coursepage-main">
          <div className="coursepage-image-container">
            <span className="coursepage-badge">{courseData.category}</span>
            <img
              src={courseData.imageUrl}
              alt="Course"
              className="coursepage-image"
            />
            <div className="coursepage-rating">
              <span className="star">⭐</span>
              <span>{courseData.rating}</span>
            </div>
          </div>

          <div className="coursepage-footer">
            <div className="footerpage-info">
              <span>&#128196; Lesson {courseData.lessons}</span>
              <span>&#9719; {courseData.duration}</span>
              <span>
                <i className="fa fa-user"></i> Students {courseData.students}+
              </span>
            </div>
            <div className="author-info">
              <span>
                By <b>{courseData.author}</b> in {courseData.category}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="syllabus">
        <div className="module-content-container">
          <div className="module-sidebar">
            {modules.map((module) => (
              <div
                key={module.title}
                className={`module-item ${
                  activeModule === module.title ? "active" : ""
                }`}
                onClick={() => setActiveModule(module.title)}
              >
                <h3>{module.title}</h3>
                <p>{module.subtitle}</p>
              </div>
            ))}
          </div>
          <div className="module-details">
            {modules.map((module) =>
              activeModule === module.title ? (
                <div key={module.title}>
                  <h2>
                    {module.title} - {module.subtitle}
                  </h2>
                  {module.duration && (
                    <p>
                      <strong>Duration:</strong> {module.duration}
                    </p>
                  )}
                  <p>{module.description}</p>
                  {module.topics && (
                    <>
                      <h3>Topics that will be covered -</h3>
                      <ul className="topics-list">
                        {renderTopics(module.topics)}
                      </ul>
                    </>
                  )}
                </div>
              ) : null
            )}
          </div>
        </div>
        <div className="syllabus-container">
          <button className="download-button" onClick={handleDownload}>
            <span className="download-icon">⬇️</span> Download Syllabus
          </button>
        </div>
      </section>
      <section className="schedule-section">
        <div className="schedule-container">
          <h2>Schedule</h2>
          <img src="./Images/day schedule.png" alt="day Schedule" />
          <img src="./Images/year Schedule.png" alt="year Schedule" />
        </div>
      </section>
      <section className="certificate-section">
        <h2>Certificate</h2>
        <div className="certificate-container">
          <div className="certificate-image">
            <img
              src="./Images/ux design certificate.png"
              alt="Sample Certificate"
            />
          </div>
          <div className="certificate-details">
            <h3>Gain Industry-Recognized Certificates</h3>
            <ul>
              <li>Use your certificates to make a life-changing shift</li>
              <li>Use your certificates to make a life-changing shift</li>
              <li>Use your certificates to make a life-changing shift</li>
              <li>Use your certificates to make a life-changing shift</li>
              <li>Use your certificates to make a life-changing shift</li>
            </ul>
          </div>
        </div>
        <div className="certificate-container">
          <div className="certificate-details">
            <h3>Gain Industry-Recognized Certificates</h3>
            <ul>
              <li>Use your certificates to make a life-changing shift</li>
              <li>Use your certificates to make a life-changing shift</li>
              <li>Use your certificates to make a life-changing shift</li>
              <li>Use your certificates to make a life-changing shift</li>
              <li>Use your certificates to make a life-changing shift</li>
            </ul>
          </div>
          <div className="certificate-image">
            <img
              src="./Images/ux design certificate.png"
              alt="Sample Certificate"
            />
          </div>
        </div>
        <div className="certificate-container">
          <div className="certificate-image">
            <img
              src="./Images/ux design certificate.png"
              alt="Sample Certificate"
            />
          </div>
          <div className="certificate-details">
            <h3>Gain Industry-Recognized Certificates</h3>
            <ul>
              <li>Use your certificates to make a life-changing shift</li>
              <li>Use your certificates to make a life-changing shift</li>
              <li>Use your certificates to make a life-changing shift</li>
              <li>Use your certificates to make a life-changing shift</li>
              <li>Use your certificates to make a life-changing shift</li>
            </ul>
          </div>
        </div>
      </section>
      <Offer />
      <Footer />
    </>
  );
};

export default CourseSection;
