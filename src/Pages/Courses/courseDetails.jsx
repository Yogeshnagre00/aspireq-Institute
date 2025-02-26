import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  certificateData,
  courses,
} from "../../components/CourseData/courseData";
import { Footer } from "../../components/Footer/footer";
import Navbar from "../../components/Header/header";
import Offer from "../../components/offerSection/offer";
import "./courseDetails.css";

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [activeModule, setActiveModule] = useState(1);

  const handleDownload = () => {
    // Create a download link to the PDF
    const link = document.createElement("a");
    link.href = "./syllabus.pdf";
    link.download = `${course ? course.title : "course"}.pdf`;
    link.click();
  };

  useEffect(() => {
    if (!courseId) return;

    // Find the course by ID from the imported `courses` data
    const courseDetails = courses.find(
      (course) => course.id === parseInt(courseId)
    );

    if (courseDetails) {
      setCourse(courseDetails);

      // Replace spaces with dashes
      const formattedName = courseDetails.name.replace(/\s+/g, "");
      // Update the URL to show course name with dashes
      window.history.replaceState(
        null,
        "",
        `/course-details/${courseDetails.id}-${formattedName}`
      );
    } else {
      setCourse(null);
    }
  }, [courseId]);

  if (!course) {
    return (
      <div className="coming-soon">
        <h2>Coming Soon</h2>
        <p>The course you are looking for is not available yet. Stay tuned!</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      {/* for first image container */}
      <section className="coursepage-section">
        <div className="coursepage-content">
          <h2>{course.title}</h2>
          <p
            style={{
              marginLeft:
                course.name === "Full Stack Development" ? "-40%" : "-10%",
            }}
          >
            {course.description}
          </p>
        </div>
        <div className="coursepage-main">
          <div className="coursepage-image-container">
            <span className="coursepage-badge">{course.category}</span>
            <img
              src={course.imageUrl}
              alt="Course"
              className="coursepage-image"
            />
            <div className="coursepage-rating">
              <span className="star">⭐</span>
              <span>{course.rating}</span>
            </div>
          </div>

          <div className="coursepage-footer">
            <div className="footerpage-info">
              <span>&#128196; Lessons: {course.lessons}</span>
              <span>
                <i className="fa fa-user"></i> Students: {course.students}
              </span>
            </div>
            <div className="author-info">
              <span>
                By <b>{course.author}</b> in {course.category}
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* this is for our syllabus section */}
      <section className="syllabus">
        <h2 className="syllabus-title">Syllabus</h2>
        <div className="syllabus-container">
          <button className="download-button" onClick={handleDownload}>
            <span className="download-icon">⬇️</span> Download Syllabus
          </button>
        </div>

        <div className="module-content-container">
          {/* Sidebar */}
          <div className="module-sidebar">
            {course?.modules?.map((module) => (
              <div
                key={module.id}
                className={`module-item ${
                  activeModule === module.id ? "active" : ""
                }`}
                onClick={() => setActiveModule(module.id)}
                style={module.id === 2 ? module.style : {}}
              >
                <h4
                  style={{
                    color: module.id === 2 ? "white" : "black",
                    backgroundColor:
                      module.id === 2 ? "#27ae60" : "transparent",
                    padding: "5px",
                    display: "inline-block",
                    borderRadius: "5px",
                  }}
                >
                  {module.title}
                  {module.id === 2 && (
                    <span style={{ color: "white" }}> &#x2A; </span>
                  )}
                </h4>
                <p>{module.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Module Details */}
          <div className="module-details">
            {course?.modules
              ?.filter((module) => module.id === activeModule)
              ?.map((module) => (
                <div
                  key={module.id}
                  style={module.id === 2 ? module.style : {}}
                >
                  <h3>{module.subtitle}</h3>
                  <hr className="divider" />
                  <p>{module.description}</p>
                  <h3>Topics Covered:</h3>

                  <ul className="topics-list">
                    {module.topics.map((topic, index) => (
                      <li
                        key={index}
                        className={`topic-item ${
                          topic.title === " "
                            ? "blank"
                            : topic.title === "Whitebox Testing" ||
                              topic.title ===
                                "Tools and Techniques for Business Analysis"
                            ? "force-new-column"
                            : ""
                        }`}
                      >
                        <strong className="topic-title">{topic.title}</strong>
                        {Array.isArray(topic.subtopics) &&
                          topic.subtopics.length > 0 && (
                            <ul className="subtopics-list">
                              {topic.subtopics.map((subtopic, subIndex) => (
                                <li key={subIndex} className="subtopic-item">
                                  {/* Check if subtopic is an object with a title */}
                                  {typeof subtopic === "string" ? (
                                    subtopic
                                  ) : (
                                    <>
                                      <strong>{subtopic.title}</strong>
                                      {Array.isArray(subtopic.subtopics) &&
                                        subtopic.subtopics.length > 0 && (
                                          <ul>
                                            {subtopic.subtopics.map(
                                              (nestedSubtopic, nestedIndex) => (
                                                <li key={nestedIndex}>
                                                  {nestedSubtopic}
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        )}
                                    </>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className="Tools-section">
        <div className="Tools-container">
          <h1 className="SDET-Tools">Software / Tools Covered in Internship</h1>
          <div className="Tools-images">
            {course && (
              <img
                src={
                  course.name === "Full Stack Development"
                    ? "/Images/Devopls Tools.webp"
                    : course.name === "Software Development Engineer in Testing"
                    ? "/Images/SDET Tools.webp"
                    : course.name === "DevOps Engineer"
                    ? "/Images/Devopls Tools.webp"
                    : "/Images/default.webp"
                }
                alt={course.name}
                className="Tool-image"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </section>

      <section className="schedule-section">
        <div className="schedule-container">
          <h2>Schedule</h2>
          <div>
            <h3 className="day-schedule"> Day Schedule</h3>
            <img
              src="/Images/day schedule.webp"
              alt="day Schedule"
              loading="lazy"
            />
          </div>
          <div className="year-schedule-container">
            <h3 className="year-schedule"> Year Schedule</h3>
            <img
              src="/Images/year Schedule.webp"
              alt="year Schedule"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="certificate-section">
        <h2>Certificate</h2>
        {certificateData.map((certificate, index) => (
          <div
            className={`certificate-container ${
              index % 2 === 0 ? "left-align" : "right-align"
            }`}
            key={index}
          >
            <div className="certificate-image">
              <img
                src={certificate.image}
                alt={`Certificate - ${certificate.title}`}
              />
            </div>
            <div className="certificate-details">
              <h3>{certificate.title}</h3>
              <ul>
                {certificate.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
      <Offer />
      <Footer />
    </>
  );
};

export default CourseDetailsPage;
