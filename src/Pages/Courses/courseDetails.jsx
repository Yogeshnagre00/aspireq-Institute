import "./courseDetails.css";
import Navbar from "../../components/Header/header";

const CourseSection = () => {
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
    </>
  );
};

export default CourseSection;
