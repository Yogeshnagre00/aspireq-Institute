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
      name: "Full Stack Development",
      title: "Full Stack Development",
      description: (
        <>
          <span style={{ color: "black" }}>
            Learn Full Stack Development with Frontend in <b>React</b> & backend
            in <b>Java(SpringBoot)</b>.
          </span>
        </>
      ),
      category: "Development",
      imageUrl: "/Images/Full stack developer.jpg",
      rating: "5.0",
      lessons: "7 Modules",
      students: 25,
      author: "Anup",
      modules: [
        {
          id: 1,
          title: "Module 1",
          subtitle:
            "Introduction to Programming with Java Learn the fundamentals of Java:-",
          description:
            "Understand the basics of Java programming and its setup.",
          topics: [
            {
              title: "Core JAVA",
              subtopics: [
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
          ],
        },
        {
          id: 2,
          title: "New AI Module 2",
          subtitle:
            "AI tutorials in programming and Prompt engineering in chatgpt:-",
          description: "Understand the basics of AI",
          topics: [" Commng soon"],
          style: {
            backgroundColor: "white",
            color: "black",
          },
        },
        {
          id: 3,
          title: "Module 3",
          subtitle: "HTML, CSS, and JavaScript :-",
          description:
            "Learn the essential tools for front-end development, including HTML, CSS, and JavaScript.",
          topics: [
            {
              title: "Introduction to HTML",
              subtopics: [
                "Basic HTML tags and structure",
                "Form Controls",
                "Image Controls",
                "Button Controls",
                "HTML5 updates",
              ],
            },
            {
              title: "Introduction to CSS",
              subtopics: [
                "Borders and Backgrounds",
                "Text Effects and Fonts",
                "Transforms and Transitions",
                "Animations in CSS",
                "Multiple columns in CSS",
                "User Interfaces with CSS",
                "Flexbox and Grid layout",
                "Responsive design with media queries",
              ],
            },
            {
              title: "Introduction to JavaScript",
              subtopics: [
                "Variables, data types, and operators",
                "Functions and objects in JavaScript",
                "DOM Manipulation",
                "Asynchronous JavaScript",
                "Debugging and Error Handling",
                "Web APIs in JavaScript",
              ],
            },
          ],
        },
        {
          id: 4,
          title: " Module 4",
          subtitle: "Frontend Development with React :-",
          description:
            "Understand the core concepts of React and how to build web applications.",
          topics: [
            {
              title: "Frontend Development with React",
              subtopics: [
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
          ],
        },
        {
          id: 5,
          title: "Module 5",
          subtitle: "Master Object-Oriented Programming concepts:-",
          description:
            "Learn OOP concepts like inheritance, polymorphism, and abstraction.",
          topics: [
            {
              title: "Object-Oriented Programming",
              subtopics: [
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
          ],
        },
        {
          id: 6,
          title: "Module 6",
          subtitle: "Handle exceptions and learn about Java collections:-",
          description:
            "Master Java’s exception handling and the collections framework.",
          topics: [
            {
              title: "Exception handling and the collections framework.",
              subtopics: [
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
            {
              title:
                "Building Full-Stack Applications with Spring Boot and React",
              subtopics: [
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
      ],
    },
    {
      id: 2,
      name: "Software Development Engineer in Testing",
      title: "Software Development Engineer in Testing",
      category: "Testing",
      imageUrl: "/Images/SDET.jpeg",
      rating: "5.0",
      lessons: "6 Modules",
      students: 25,
      author: "Abhijit",
      modules: [
        {
          id: 1,
          title: "Module 1",
          subtitle: "Manual Testing",
          description:
            "Introduction to software testing concepts, methodologies, and execution.",
          topics: [
            {
              title: "SDLC - STLC",
              subtopics: ["Waterfall Model", "V-Model", "Agile Methodologies"],
            },
            {
              title: "Test Scenario",
            },
            {
              title: "Test cases understanding",
            },
            {
              title: "Test Scenario Design Techniques",
              subtopics: [
                "Boundary Value Analysis",
                "Equivalence Partitioning Method",
                "Error guessing",
              ],
            },
            { title: "Test Scenario Execution" },
            { title: "Test cases writing and execution" },
            {
              title: " Bug Logging",
              subtopics: [
                "How To Write Bugs",
                "Defect Life Cycle",
                "Test Management Tools",
                "Jira Tool",
              ],
            },
            {
              title: "Agile Overview",
              subtopics: ["ScrumSprint", "Kanban"],
            },
            { title: "Blackbox Testing" },
            {
              title: "Whitebox Testing",
              subtopics: [
                "Path Testing",
                "Loop Testing",
                "Statement Coverage",
                "Conditional Testing",
              ],
            },
            { title: "Greybox Testing" },
            {
              title: "Types of Testing",
              subtopics: [
                "Functional & Non-Functional Testing",
                {
                  title: "Feature Testing",
                  subtopics: ["Smoke Testing", "Sanity Testing"],
                },
                "Integration Testing",
                "Regression Testing",
                "Compatibility Testing",
                "UI Testing",
                "Automation Testing",
                "User Acceptance (Alpha & Beta) Testing",
                "Adhoc Testing",
              ],
            },
            {
              title: "Testing Artifacts",
              subtopics: [
                "RTM Document",
                "Test Strategy",
                "Test Plan",
                "Defect Triage Report",
                "Release Notes",
              ],
            },
          ],
        },
        {
          id: 2,
          title: "New AI Module 2",
          subtitle:
            "AI tutorials in programming and Prompt engineering in ChatGPT",
          description: "Understand the basics of AI",
          topics: ["Coming soon"],
          style: {
            backgroundColor: "white",
            color: "black",
          },
        },
        {
          id: 3,
          title: "Module 3",
          subtitle: "API Testing",
          description:
            "Understanding API testing techniques, methods, and automation.",
          topics: [
            {
              title: "API Testing and complete overview",
              subtopics: [
                "What is API",
                "Purpose of API Testing",
                "Things need to be considered in API Testing.",
              ],
            },
            {
              title: "API Methods",
              subtopics: ["GET", "POST", "PUT", "DELETE", "PATCH"],
            },
            { title: "Postman tools" },
            {
              title: "Request - Response Validation checking",
              subtopics: [
                "Status Code Interpretation,Validation & Testing etc.",
                "Assertion - Test Snippet",
                "cURL execution",
              ],
            },
            {
              title: "Authorization",
              subtopics: [
                "Basic",
                "Bearer Token",
                "API Key",
                "JWT",
                "AWS Signature",
              ],
            },
            {
              title: "Data Parameterization",
              subtopics: [
                "Text File Handling",
                "Excel File Handling",
                "JSON Input",
              ],
            },
            {
              title: "API Automation",
              subtopics: [
                "Rest Assured",
                "Jenkins",
                "NewMan",
                "API Automation via Google Apps Script",
              ],
            },
            { title: "API Automation Framework" },
          ],
        },
        {
          id: 4,
          title: "Module 4",
          subtitle: "Automation Testing",
          description:
            "Learning Selenium, TestNG, and CI/CD for test automation.",
          topics: [
            {
              title: "Installations & Configurations with Java basics",
              subtopics: [
                "Java Installation",
                "Eclipse Installation,configuration",
                "Selenium Jars download/Configuration",
              ],
            },
            {
              title: "Basic Concepts for first WebDriver program",
              subtopics: [
                "WebDriver Interface explanation & Invoking Browser",
                "Basic Methods of WebDriver",
                "How to run tests in Google Chrome",
                "How to run tests in Internet Explorer",
                "How to run tests in Safari Browser",
              ],
            },
            {
              title: "Locator Techniques & Tools used",
              subtopics: [
                "Locator Techniques",
                {
                  title: "xpath identification using :",
                  subtopics: [
                    "Firepath",
                    "Name",
                    "ID",
                    "ClassName",
                    "LinkText",
                  ],
                },
              ],
            },
            {
              title: "ADVANCED WAYS-locating objects",
              subtopics: [
                "Writing Customized xpath Using Attributes",
                "Writing customized xpath Using Tag names Traversing",
                "Css Selectors locators",
              ],
            },
            {
              title: "Web UI Automation",
              subtopics: [
                "Handle Dynamic dropdowns with WebDriver API",
                "Handling Static dropdowns with Select WebDriver API",
                "Handling Checkboxes with WebDriver API",
                "Handling Radio buttons with Customized xpath",
                "Handling Radio button dynamically- real time examples",
                "Types of Alerts present and Methods to handle them",
                "Handling Java Alerts using WebDriver API",
                "Web Elements Validation",
              ],
            },
            {
              title: "Techniques to automate ADVANCNED Web UI",
              subtopics: [
                "Handling Ajax/Mouse Interactions",
                "Actions class-real time examples",
                "Handling Multiple Windows",
                "Window Handle concepts",
                "Child windows Handling",
                "How to handle Frames?",
              ],
            },
            {
              title:
                "Practical problems & Methods to Handle them with Selenium",
              subtopics: [
                "How to handle table Grids in webpage",
                "How to overcome Synchronization problems",
                "Maximizing window and deleting cookies",
                "Handling HTTPS certifications",
                "Killing the Process and Cookies using Selenium",
                "How to take Screenshots in Selenium",
              ],
            },
            {
              title: "Data driving from Excel",
              subtopics: [
                "What is Apache POI API / JXL API",
                "Excel API Methods explanation",
                "Program for Retrieving data from excel",
                "Program for Updating data back to excel",
              ],
            },
            {
              title: "TestNG Framework",
              subtopics: [
                "Why TestNG and Its Advantages",
                "TestNG Installation and Setup in Eclipse",
                "TestNG Annotations",
                "Prioritizing the tests using TestNG",
                "Disabling Enabling the Testcases & putting Timeout",
                "Importance of TestNG xml file",
                "Including & excluding the Testcases from Execution with TestNG xml file",
                "Data driving Testing with TestNG",
                "Data Provider Annotation - Parameterizing Testcases",
                "Parameterizing from TestNG xml file",
              ],
            },
            {
              title: "Data driven Framework",
              subtopics: [
                "Why should not hard code the data?",
                "How to write Global parameters with Java",
                "Data driving parameterization from Properties file",
              ],
            },

            {
              title: "MAVEN - Build Management Tool",
              subtopics: [
                "What is a Build Management tool?",
                "Installing & configuring MAVEN",
                "Understanding pom.xml file",
              ],
            },
            {
              title: "Generating Reports",
              subtopics: [
                "Downloading and Configuring XSLT reports",
                "Generating Excellent HTML reports for tests",
              ],
            },
            {
              title: "Jenkins - CI Tool",
              subtopics: [
                "Why Jenkins?",
                "Installing & Configuring Jenkins with Java",
                "Creating Jenkins Project",
              ],
            },
          ],
        },
        {
          id: 5,
          title: "Module 5",
          subtitle: "Domain Knowledge",
          description:
            "Gaining industry-specific testing knowledge across different domains.",
          topics: [
            {
              title: "Industry Domains",
              subtopics: [
                "Healthcare",
                "Banking & Finance",
                "E-commerce",
                "People Management",
              ],
            },
          ],
        },
        {
          id: 6,
          title: "Module 6",
          subtitle: "Performance Testing",
          description:
            "Understanding performance testing tools and metrics for load testing.",
          topics: [
            {
              title: "Introduction to Performance Testing",
              subtopics: [
                "Performance Testing Tools",
                "Load Testing",
                "Stress Testing",
                "Scalability Testing",
              ],
            },
            {
              title: "JMeter & Test Plans",
              subtopics: [
                "JMeter Setup",
                "Creating Test Plans",
                "Monitoring & Analyzing Test Results",
              ],
            },
            {
              title: "Performance Metrics",
              subtopics: ["Benchmarking", "Identifying Bottlenecks"],
            },
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
    link.href = "./syllabus.pdf";
    link.download = `${course ? course.title : "course"}.pdf`;
    link.click();
  };

  useEffect(() => {
    if (!courseId) return;

    const courseDetails = coursesRef.current.find(
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
                      <li key={index} className="topic-item">
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
      <section className="schedule-container">
        <div className="tools">
          <img src="/Images/SDET Tools.jpg" alt="SDET Tools" />
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
