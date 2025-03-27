import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../../CourseData/courseData";
import { Footer } from "../../components/Footer/footer";
import Navbar from "../../components/Header/header";
import Loader from "../../components/loader";
import Offer from "../../components/offerSection/offer";
import "./courseDetails.css";

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeModule, setActiveModule] = useState(1);

  useEffect(() => {
    if (!courseId) return;

    setLoading(true);

    // Find the course by ID from the imported `courses` data
    const courseDetails = courses.find(
      (course) => course.id === parseInt(courseId)
    );

    if (courseDetails) {
      setCourse(courseDetails);

      // Format name and update URL
      const formattedName = courseDetails.name.replace(/\s+/g, "");
      window.history.replaceState(
        null,
        "",
        `/course-details/${courseDetails.id}-${formattedName}`
      );
    }

    setLoading(false);
  }, [courseId]);

  const handleDownload = () => {
    if (!course || !course.name) {
      console.error("Course not selected");
      return;
    }

    // Define PDF mapping based on course names
    const pdfFiles = {
      "Full Stack Development":
        "/Pdf/Full_Stack_Development_Complete_Syllabus.pdf",
      "Software Development Engineer in Testing":
        "/Pdf/SDET_Complete_Course.pdf",
      "DevOps Engineer": "/Pdf/DevOps_Engineering_Complete_Syllabus.pdf",
      "Business Analyst": "/Pdf/Business_Analyst_Complete_Syllabus.pdf",
      "Scrum Master": "/Pdf/Scrum_Master_Complete_Syllabus.pdf",
    };

    // Get the correct PDF file for the course
    const pdfFilePath = pdfFiles[course.name];

    if (!pdfFilePath) {
      console.error("PDF file not found for this course");
      return;
    }

    // Create a download link
    const link = document.createElement("a");
    link.href = pdfFilePath;
    link.download = `${course.name.replace(/\s+/g, "_")}_Complete_Syllabus.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return <Loader />;
  }

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
          <p>{course.description}</p>
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
        <div className="Brochure-container">
          <button className="download-button" onClick={handleDownload}>
            <span className="download-icon">⬇️</span> Download Brochure
          </button>
        </div>
      </section>
      {/* this is for our syllabus section */}
      <section className="syllabus">
        <h2 className="syllabus-title">Syllabus</h2>
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
                      module.id === 2 ? "#00d09c" : "transparent",
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
            {(() => {
              const activeModuleData = course?.modules?.find(
                (mod) => mod.id === activeModule
              );
              if (!activeModuleData) return null;

              return (
                <div
                  key={activeModuleData.id}
                  style={
                    activeModuleData.id === 2 ? activeModuleData.style : {}
                  }
                >
                  <h3>{activeModuleData.subtitle}</h3>
                  <hr className="divider" />
                  <p>{activeModuleData.description}</p>

                  {activeModuleData.id === 1 && <h3>Topics Covered:</h3>}

                  <ul className="topics-list">
                    {activeModuleData.topics.map((topic, index) => (
                      <li key={index} className="topic-item">
                        <strong className="topic-title">{topic.title}</strong>
                        {Array.isArray(topic.subtopics) &&
                          topic.subtopics.length > 0 && (
                            <ul className="subtopics-list">
                              {topic.subtopics.map((subtopic, subIndex) => (
                                <li key={subIndex} className="subtopic-item">
                                  {typeof subtopic === "string" ? (
                                    subtopic
                                  ) : (
                                    <>
                                      {/* Apply fontWeight dynamically */}
                                      <strong
                                        style={{
                                          fontWeight:
                                            subtopic.fontWeight || "bold",
                                        }}
                                      >
                                        {subtopic.title}
                                      </strong>
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
              );
            })()}
          </div>
        </div>
        <div className="syllabus-container">
          <button className="download-button" onClick={handleDownload}>
            <span className="download-icon">⬇️</span> Download Syllabus
          </button>
        </div>
      </section>
      {/* Tools Container */}
      <section className="Tools-section">
        <div className="Tools-container">
          <h1 className="SDET-Tools">Software / Tools Covered</h1>
          <div className="Tools-images">
            {course && (
              <img
                src={
                  course.name === "Full Stack Development"
                    ? "/Images/Full-Stack-Developer Tools.webp"
                    : course.name === "Software Development Engineer in Testing"
                    ? "/Images/SDET Tools.webp"
                    : course.name === "DevOps Engineer"
                    ? "/Images/Devops-Tools.png"
                    : course.name === "Business Analyst"
                    ? "/Images/Business analyst-Tools.png"
                    : course.name === "Scrum Master"
                    ? "/Images/scrumMaster-tools.png"
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
      {/* schedule section */}
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
      {/* certificate container */}
      <section className="certificate-section">
        <h2>Certificates</h2>
        {course.certificates && course.certificates.length > 0 ? (
          course.certificates.map((certificate, certIndex) => (
            <div
              className={`certificate-container ${
                certIndex % 2 === 0 ? "left-align" : "right-align"
              }`}
              key={certIndex}
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
                    <li key={idx}>
                      <span
                        className={certIndex === 1 ? "highlight-benefit" : ""}
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p>No certificates available.</p>
        )}
      </section>

      <Offer />
      <Footer />
    </>
  );
};

export default CourseDetailsPage;
