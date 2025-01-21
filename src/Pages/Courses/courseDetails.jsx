import "./courseDetails.css";
import Navbar from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import Offer from "../../components/offerSection/offer";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [activeModule, setActiveModule] = useState(1);

  //course Name and Syllbus Data
  const coursesRef = useRef([
    {
      id: 1,
      name: "Full Stack Development with React and Java",
      title: "Full Stack Development",
      description: "Learn Full Stack Development with React and Java.",
      category: "Development",
      imageUrl: "/Images/Full stack developer.jpg",
      rating: "4.8",
      lessons: 6,
      students: 30,
      author: "Angela",
      modules: [
        {
          id: 1,
          title: "Module 1",
          subtitle:
            "Introduction to Programming with Java Learn the fundamentals of Java:-",
          description:
            "Understand the basics of Java programming and its setup.",
          topics: [
            "History and features of Java",
            "Setting up the Java Development Kit (JDK)",
            "Writing your first Java program",
            "Understanding the Java Virtual Machine (JVM)",
            "Data types and variables",
            "Operators and expressions",
            "Control flow statements (if-else, switch-case)",
            "Loops (for, while, do-while)",
          ],
        },
        {
          id: 2,
          title: "Module 2",
          subtitle:
            "AI tutorials in programming and Prompt engineering in chatgpt:-",
          description: "Understand the basics of AI",
          topics: [" Commng soon"],
        },
        {
          id: 3,
          title: "Module 3",
          subtitle: "HTML, CSS, and JavaScript :-",
          description:
            "Learn the essential tools for front-end development, including HTML, CSS, and JavaScript.",
          topics: [
            "Introduction to HTML",
            "Basic HTML tags and structure",
            "Form Controls",
            "Image Controls",
            "Button Controls",
            "HTML5 updates",
            "Introduction to CSS",
            "Borders and Backgrounds",
            "Text Effects and Fonts",
            "Transforms and Transitions",
            "Animations in CSS",
            "Multiple columns in CSS",
            "User Interfaces with CSS",
            "Flexbox and Grid layout",
            "Responsive design with media queries",
            "Introduction to JavaScript",
            "Variables, data types, and operators",
            "Functions and objects in JavaScript",
            "DOM Manipulation",
            "Asynchronous JavaScript",
            "Debugging and Error Handling",
            "Web APIs in JavaScript",
          ],
        },
        {
          id: 4,
          title: " Module 4",
          subtitle: "Frontend Development with React :-",
          description:
            "Understand the core concepts of React and how to build web applications.",
          topics: [
            "What is React and why use it?",
            "Setting up the development environment",
            "Creating a new React project",
            "Understanding JSX",
            "Components and props",
            "State and lifecycle",
            "Handling events",
            "Conditional rendering",
            "Lists and keys",
            "Context API",
            "Refs and the DOM",
            "Higher-order components",
            "React Router for navigation",
            "Hooks (useState, useEffect, etc.)",
          ],
        },
        {
          id: 5,
          title: "Module 5",
          subtitle: "Master Object-Oriented Programming concepts:-",
          description:
            "Learn OOP concepts like inheritance, polymorphism, and abstraction.",
          topics: [
            "Classes and objects",
            "Constructors",
            "Inheritance",
            "Polymorphism",
            "Encapsulation",
            "Abstraction",
            "Interfaces",
            "Abstract classes",
            "Inner classes",
            "Packages and access modifiers",
          ],
        },
        {
          id: 6,
          title: "Module 6",
          subtitle: "Handle exceptions and learn about Java collections:-",
          description:
            "Master Java’s exception handling and the collections framework.",
          topics: [
            "Types of exceptions",
            "Try-catch block",
            "Finally block",
            "Throw and throws keyword",
            "Custom exceptions",
            "List, Set, and Map interfaces",
            "ArrayList, LinkedList, HashSet, TreeSet, HashMap, TreeMap",
            "Iterators and for-each loop",
          ],
        },
        {
          id: 7,
          title: "Module 7",
          subtitle:
            "Combine your React and Java skills to build full-stack applications :-",
          description:
            "Learn backend development with Java and integrate it with React to build complete applications.",
          topics: [
            "Setting up Spring Boot Project",
            "Creating RESTful APIs with Spring Boot",
            "Connecting React frontend with Java backend using Axios or Fetch API",
            "Handling CORS issues",
            "CRUD operations with Spring Boot",
            "User authentication and authorization",
            "Building a full-stack application",
            "Deployment of Java and React applications",
            "CI/CD pipelines",
            "Unit testing in Java (JUnit)",
            "Testing React components (Jest, React Testing Library)",
            "Debugging techniques for full-stack applications",
          ],
        },
      ],
    },
    {
      id: 2,
      name: "businessanalys",
      title: "Business Analyst",
      description: "Become an expert in Business Analysis and Data.",
      category: "Business",
      imageUrl: "/Images/Business analyst.jpg",
      rating: "4.7",
      lessons: 12,
      duration: "15h 00m",
      students: 30,
      author: "John",
      modules: [
        {
          id: 1,
          title: "Module 1",
          subtitle: "Introduction to Business Analysis",
          duration: "4 Weeks",
          description:
            "Understand the basics of business analysis, key terminologies, and the role of a business analyst in projects.",
          topics: [
            "What is Business Analysis?",
            "Role of a Business Analyst",
            "Key Skills and Responsibilities",
            "Stakeholder Identification and Management",
            "Introduction to Business Process Modeling",
          ],
        },
        {
          id: 2,
          title: "Module 2",
          subtitle: "Requirement Gathering and Documentation",
          duration: "5 Weeks",
          description:
            "Learn effective techniques for requirement gathering, analysis, and proper documentation standards.",
          topics: [
            "Techniques for Requirement Gathering",
            "Functional vs Non-Functional Requirements",
            "Creating Use Case Diagrams",
            "Documenting Requirements with BRD, SRS, and FRS",
            "Managing Requirement Changes",
          ],
        },
        {
          id: 3,
          title: "Module 3",
          subtitle: "Data Analysis and Tools",
          duration: "6 Weeks",
          description:
            "Gain expertise in data analysis tools and methodologies used in business analysis.",
          topics: [
            "Introduction to Data Analysis",
            "Data Visualization Tools (Tableau, PowerBI)",
            "SQL for Data Analysis",
            "Interpreting Data Insights",
            "KPI and Metrics Management",
          ],
        },
        {
          id: 4,
          title: "Module 4",
          subtitle: "Project Management and Agile Methodology",
          duration: "5 Weeks",
          description:
            "Understand how project management principles and Agile methodologies integrate with business analysis.",
          topics: [
            "Project Management Basics",
            "Introduction to Agile and Scrum",
            "Roles of a BA in Agile Projects",
            "JIRA for Requirement Management",
            "Creating User Stories and Acceptance Criteria",
          ],
        },
        {
          id: 5,
          title: "Module 5",
          subtitle: "Final Project and Career Guidance",
          duration: "4 Weeks",
          description:
            "Work on a capstone project and receive career guidance for becoming a professional Business Analyst.",
          topics: [
            "Capstone Business Analysis Project",
            "Documenting and Presenting Business Solutions",
            "Interview Preparation",
            "Creating a Professional Portfolio",
            "Networking and Career Guidance",
          ],
        },
      ],
    },
  ]);

  const certificateData = [
    {
      title: "Gain Industry-Recognized Certificates",
      image: "/Images/ux design certificate.png",
      benefits: [
        "Use your certificates to make a life-changing shift",
        "Use your certificates to make a life-changing shift",
        "Use your certificates to make a life-changing shift",
        "Use your certificates to make a life-changing shift",
        "Use your certificates to make a life-changing shift",
      ],
    },
    {
      title: "Industry-Leading Certification",
      image: "/Images/ux design certificate.png",
      benefits: [
        "Boost your career prospects with a top-tier certificate",
        "Gain practical skills recognized by employers",
        "Access to exclusive job opportunities",
        "Learn from industry experts",
        "Earn while you learn with our certification program",
      ],
    },
    {
      title: "Advanced UX Design Certificate",
      image: "/Images/ux design certificate.png",
      benefits: [
        "Master the latest UX design trends and tools",
        "Improve your problem-solving and creativity skills",
        "Build a portfolio with real-world projects",
        "Stand out in the competitive job market",
        "Learn the fundamentals of user-centered design",
      ],
    },
  ];

  const handleDownload = () => {
    // Create a download link to the PDF
    const link = document.createElement("a");
    link.href = "./syllabus.pdf"; // Assuming syllabus.pdf is in the public folder
    link.download = `${course ? course.title : "course"}.pdf`;
    link.click();
  };

  useEffect(() => {
    if (!courseId) return; // Wait for the courseId to be available

    const courseDetails = coursesRef.current.find(
      (course) => course.id === parseInt(courseId)
    );
    if (courseDetails) {
      setCourse(courseDetails);
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
              <span>&#9719; {course.duration}</span>
              <span>
                <i className="fa fa-user"></i> Students: {course.students}+
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

      <section className="syllabus">
        <h2 className="syllabus-title">Syllabus</h2>
        <div className="module-content-container">
          <div className="module-sidebar">
            {course.modules.map((module) => (
              <div
                key={module.id}
                className={`module-item ${
                  activeModule === module.id ? "active" : ""
                }`}
                onClick={() => setActiveModule(module.id)}
              >
                <h4>{module.title}</h4>
                <p>{module.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="module-details">
            {course.modules
              .filter((module) => module.id === activeModule)
              .map((module) => (
                <div key={module.id} className="module-detail">
                  <h3>{module.subtitle}</h3>
                  <hr className="divider" />
                  <p>{module.description}</p>
                  <h3>Topics Covered:</h3>
                  <ul className="topics-list">
                    {module.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
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
          <img src="/Images/day schedule.png" alt="day Schedule" />
          <img src="/Images/year Schedule.png" alt="year Schedule" />
        </div>
      </section>

      <section className="certificate-section">
        <h2>Certificate</h2>
        {certificateData.map((certificate, index) => (
          <div className="certificate-container" key={index}>
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

// useEffect(() => {
//   if (!courseId) return; // Ensure courseId is available

//   const courseDetails = coursesRef.current.find(
//     (course) => course.id === parseInt(courseId)
//   );

//   if (courseDetails) {
//     setCourse(courseDetails);
//     // Update the URL to show course name instead of courseId
//     window.history.replaceState(
//       null,
//       "",
//       `/course-details/${courseDetails.name}`
//     );
//   } else {
//     setCourse(null);
//   }
// }, [courseId]);
