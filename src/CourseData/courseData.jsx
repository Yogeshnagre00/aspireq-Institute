export const courses = [
  {
    id: 1,
    name: "Full Stack Development",
    title: "Full Stack Development",
    description: (
      <>
        <span style={{ color: "#7f8c8d" }}>
          Learn Full Stack Development with Frontend in <b>React</b> & backend
          in <b>Java(SpringBoot)</b>.
        </span>
      </>
    ),
    category: "Software Development",
    imageUrl: "/Images/Full stack developer.webp",
    certificates: [
      {
        title: "Course Completion Certificate",
        image: "/Images/Full-Stack-Development-course-certificate.png",
        benefits: [
          "Skill Enhancement",
          "Improved Communication and Collaboration Skills",
          "Confidence Boost",
          "Accreditation and Recognition",
          "Professional Recognition",
          "Entrepreneurial Opportunities",
          "Access to Better Pay",
        ],
      },
      {
        title: "Certificate of Internship Completion",
        image: "/Images/Full Stack Development internship.jpg",
        benefits: [
          "Real-Time Work Experience",
          "Expert Guidance",
          "End-To-End Project Implementation",
          "Certification",
          "Industry Standards and Processes",
          "Team Collaboration",
          "Networking",
        ],
      },
      {
        title: "Job Offerletter",
        image: "/Images/offerLetter.png",
        benefits: [
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
        ],
      },
    ],
    rating: "5.0",
    lessons: "7 Modules",
    students: 25,
    author: "Anup",
    modules: [
      {
        id: 1,
        title: "Module 1",
        subtitle:
          "Introduction to Programming with Java Learn the fundamentals of Java:",
        description: "Understand the basics of Java programming and its setup.",
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
          "AI tutorials in programming and Prompt engineering in chatgpt:",
        description:
          "How to use AI (ChatGPT, microsoft copilot & deepseek)  to solve business problems",
        topics: [
          {
            title: "AI in Excel",
            subtopics: [
              {
                title: " Data Analysis and Insights",
                fontWeight: "normal",
                subtopics: ["Analyze Data", "Power Query", "Forecasting"],
              },
              "Data Types",
              "Dynamic Array Functions",
              "Natural Language Queries",
              "Insert Data from Pictures",
            ],
          },
          {
            title: "AI in PowerPoint",
            subtopics: [
              {
                title: " Data Analysis and Insights",
                fontWeight: "normal",
                subtopics: ["Design Ideas", "Smart Formatting"],
              },
              "Content Generation",
              "Visual Enhancements",
              "Data Visualization",
              "AI-Powered Presentation Makers",
            ],
          },
          {
            title: "AI in Programming",
            subtopics: [
              "How To Use AI To Learn For Developers",
              "AI-Powered Code Generation and Debugging",
              "AI Prompts for Enhanced User Interfaces (front end Designs)",
              "Prompts For Learning To Code",
              "AI Prompting Practice",
              "AI-Powered Frameworks and Libraries",
              "AI Prompting CheatSheets",
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Module 3",
        subtitle: "HTML, CSS, and JavaScript :",
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
        subtitle: "Frontend Development with React :",
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
        subtitle: "Master Object-Oriented Programming concepts:",
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
        subtitle: "Handle exceptions and learn about Java collections:",
        description:
          "Master Java's exception handling and the collections framework.",
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
          "Combine your React and Java skills to build full-stack applications :",
        description:
          "Learn backend development with Java and integrate it with React to build complete applications.",
        topics: [
          {
            title: "Building Full-Stack Applications",
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
    description: "Learn manual, automation and  API Testing",
    category: "Software Testing",
    imageUrl: "/Images/SDET.webp",
    certificates: [
      {
        title: "Course Completion Certificate",
        image: "/Images/SDET-course-certificate.jpg",
        benefits: [
          "Skill Enhancement",
          "Improved Communication and Collaboration Skills",
          "Confidence Boost",
          "Accreditation and Recognition",
          "Professional Recognition",
          "Entrepreneurial Opportunities",
          "Access to Better Pay",
        ],
      },
      {
        title: "Certificate of Internship Completion",
        image: "/Images/SDET internship.jpg",
        benefits: [
          "Real-Time Work Experience",
          "Expert Guidance",
          "End-To-End Project Implementation",
          "Certification",
          "Industry Standards and Processes",
          "Team Collaboration",
          "Networking",
        ],
      },
      {
        title: "Job Offerletter",
        image: "/Images/offerLetter.png",
        benefits: [
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
        ],
      },
    ],
    rating: "5.0",
    lessons: "6 Modules",
    students: 25,
    author: "Mahesh",
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
          "AI tutorials in programming and Prompt engineering in chatgpt:",
        description:
          "How to use AI (ChatGPT, microsoft copilot & deepseek)  to solve business problems",
        topics: [
          {
            title: "AI in Excel",
            subtopics: [
              {
                title: " Data Analysis and Insights",
                fontWeight: "normal",
                subtopics: ["Analyze Data", "Power Query", "Forecasting"],
              },
              "Data Types",
              "Dynamic Array Functions",
              "Natural Language Queries",
              "Insert Data from Pictures",
            ],
          },
          {
            title: "AI in PowerPoint",
            subtopics: [
              {
                title: " Data Analysis and Insights",
                fontWeight: "normal",
                subtopics: ["Design Ideas", "Smart Formatting"],
              },
              "Content Generation",
              "Visual Enhancements",
              "Data Visualization",
              "AI-Powered Presentation Makers",
            ],
          },
          {
            title: "For Full Stack Development",
            subtopics: [
              "How To Use AI To Learn For Developers",
              "AI-Powered Code Generation and Debugging",
              "AI Prompts for Enhanced User Interfaces (front end Designs)",
              "Prompts For Learning To Code",
              "AI Prompting Practice",
              "AI-Powered Frameworks and Libraries",
              "AI Prompting CheatSheets",
            ],
          },
        ],
        style: {
          backgroundColor: "white",
          color: "black",
        },
      },
      {
        id: 3,
        title: "Module 3",
        subtitle: " API Testing",
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
                subtopics: ["Firepath", "Name", "ID", "ClassName", "LinkText"],
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
            title: "Practical problems & Methods to Handle them with Selenium",
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
  {
    id: 3,
    name: "DevOps Engineer",
    title: "DevOps Engineering",
    description:
      "Master CI/CD, Docker, Kubernetes, cloud platforms, and automation.",
    category: "DevOps",
    imageUrl: "/Images/Devops engineer.webp",
    certificates: [
      {
        title: "Course Completion Certificate",
        image: "/Images/Devops-course-certificate.jpg",
        benefits: [
          "Skill Enhancement",
          "Improved Communication and Collaboration Skills",
          "Confidence Boost",
          "Accreditation and Recognition",
          "Professional Recognition",
          "Entrepreneurial Opportunities",
          "Access to Better Pay",
        ],
      },
      {
        title: "Certificate of Internship Completion",
        image: "/Images/Devops-internship.jpg",
        benefits: [
          "Real-Time Work Experience",
          "Expert Guidance",
          "End-To-End Project Implementation",
          "Certification",
          "Industry Standards and Processes",
          "Team Collaboration",
          "Networking",
        ],
      },
      {
        title: "Job Offerletter",
        image: "/Images/offerLetter.png",
        benefits: [
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
        ],
      },
    ],
    rating: "5.0",
    lessons: "5 Modules",
    students: 5,
    author: "Jagdish",
    modules: [
      {
        id: 1,
        title: "Module 1",
        subtitle: "DevOps Fundamentals",
        description: "Understand the core principles and culture of DevOps.",
        topics: [
          {
            title: "Introduction to DevOps",
            subtopics: [
              " What is DevOps?",
              "History and evolution of DevOps",
              "DevOps principles and practices",
              "Benefits of DevOps",
            ],
          },
          {
            title: "DevOps Tools and Technologies",
            subtopics: [
              "Overview of popular DevOps tools",
              "Version control with Git",
              "Continuous Integration (CI) with Jenkins",
              "Configuration management with Ansible, Puppet, and Chef",
              "Containerization with Docker",
              "Orchestration with Kubernetes",
            ],
          },
          {
            title: "Cloud Computing and DevOps",
            subtopics: [
              "Introduction to cloud computing",
              "Cloud service models (IaaS, PaaS, SaaS)",
              "Cloud providers (AWS, Azure, Google Cloud)",
              "DevOps on cloud platforms",
            ],
          },
        ],
      },
      {
        id: 2,
        title: "New AI Module 2",
        subtitle:
          "AI tutorials in programming and Prompt engineering in chatgpt:",
        description:
          "How to use AI (ChatGPT, microsoft copilot & deepseek)  to solve business problems",
        topics: [
          {
            title: "AI in Excel",
            subtopics: [
              {
                title: " Data Analysis and Insights",
                fontWeight: "normal",
                subtopics: ["Analyze Data", "Power Query", "Forecasting"],
              },
              "Data Types",
              "Dynamic Array Functions",
              "Natural Language Queries",
              "Insert Data from Pictures",
            ],
          },
          {
            title: "AI in PowerPoint",
            subtopics: [
              {
                title: " Data Analysis and Insights",
                fontWeight: "normal",
                subtopics: ["Design Ideas", "Smart Formatting"],
              },
              "Content Generation",
              "Visual Enhancements",
              "Data Visualization",
              "AI-Powered Presentation Makers",
            ],
          },
          {
            title: "For Full Stack Development",
            subtopics: [
              "How To Use AI To Learn For Developers",
              "AI-Powered Code Generation and Debugging",
              "AI Prompts for Enhanced User Interfaces (front end Designs)",
              "Prompts For Learning To Code",
              "AI Prompting Practice",
              "AI-Powered Frameworks and Libraries",
              "AI Prompting CheatSheets",
            ],
          },
        ],
        style: {
          backgroundColor: "white",
          color: "black",
        },
      },
      {
        id: 3,
        title: "Module 3",
        subtitle: "Continuous Integration and Continuous Deployment (CI/CD)",
        description: "Learn Linux commands and scripting for automation.",
        topics: [
          {
            title: "Continuous Integration and Deployment (CI/CD)",
            subtopics: [
              "CI/CD concepts and practices",
              "Setting up CI/CD pipelines",
              "Automated testing and deployment",
              "Monitoring and logging",
            ],
          },
          {
            title: " Infrastructure as Code (IaC)",
            subtopics: [
              "Introduction to IaC",
              "Tools for IaC (Terraform, CloudFormation)",
              "Writing and managing infrastructure code",
              "Best practices for IaC",
            ],
          },
          {
            title: " Monitoring and Logging",
            subtopics: [
              "Importance of monitoring and logging",
              "Tools for monitoring (Prometheus, Grafana)",
              "Tools for logging (ELK Stack, Splunk)",
              "Setting up monitoring and logging systems",
            ],
          },
        ],
      },
      {
        id: 4,
        title: "Module 4",
        subtitle: "Security in DevOps",
        description:
          "Understand how to containerize applications using Docker.",
        topics: [
          {
            title: "Security in DevOps",
            subtopics: [
              "DevSecOps principles",
              "Integrating security into CI/CD pipelines",
              "Security best practices for DevOps",
              "Tools for security (Aqua, Twistlock)",
            ],
          },
          {
            title: "Advanced Topics",
            subtopics: [
              " Microservices architectures",
              "Serverless computing",
              "Site Reliability Engineering (SRE)",
              "DevOps for mobile applications",
            ],
          },
        ],
      },
      {
        id: 5,
        title: "Module 5",
        subtitle: "Hands-on Projects",
        description:
          "Learn Kubernetes for managing containerized applications.",
        topics: [
          {
            title: "Introduction to Kubernetes",
            subtopics: [
              "Setting up a CI/CD pipeline for a sample application",
              "Containerizing an application with Docker",
              "Deploying an application on Kubernetes",
              "Implementing IaC with Terraform",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Business Analyst",
    title: "Business Analyst",
    description:
      "Learn Business Analyst from fundamentals to advanced concepts.",
    category: "Business Analyst",
    imageUrl: "/Images/Business analyst.webp",
    certificates: [
      {
        title: "Course Completion Certificate",
        image: "/Images/Business-Analyst-course-certificate.jpg",
        benefits: [
          "Skill Enhancement",
          "Improved Communication and Collaboration Skills",
          "Confidence Boost",
          "Accreditation and Recognition",
          "Professional Recognition",
          "Entrepreneurial Opportunities",
          "Access to Better Pay",
        ],
      },
      {
        title: "Certificate of Internship Completion",
        image: "/Images/Business Analyst-internship.jpg",
        benefits: [
          "Real-Time Work Experience",
          "Expert Guidance",
          "End-To-End Project Implementation",
          "Certification",
          "Industry Standards and Processes",
          "Team Collaboration",
          "Networking",
        ],
      },
      {
        title: "Job Offerletter",
        image: "/Images/offerLetter.png",
        benefits: [
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
        ],
      },
    ],
    rating: "5.0",
    lessons: "5 Modules",
    students: 5,
    author: "Abhijit",
    modules: [
      {
        id: 1,
        title: "Module 1",
        subtitle: "Introduction to Business Analyst:",
        description:
          "Learn business analyst fundamentals, key roles, planning, and stakeholder engagement.",
        topics: [
          {
            title: "Introduction to Business Analyst",
            subtopics: [
              "Overview of Business Analysis",
              "Role and responsibilities of a Business Analyst",
              "Key skills and competencies required",
            ],
          },
          {
            title: "Business Analysis Planning and Monitoring",
            subtopics: [
              "Defining the scope of business analysis",
              "Planning business analysis activities",
              "Stakeholder analysis and management",
              "Monitoring and controlling business analysis work",
            ],
          },
          {
            title: "Elicitation and Collaboration",
            subtopics: [
              "Techniques for eliciting requirements (interviews, workshops, surveys)",
              "Documenting and validating requirements",
              "Collaborating with stakeholders",
              "Managing stakeholder expectations",
            ],
          },
        ],
      },
      {
        id: 2,
        title: "New AI Module 2",
        subtitle:
          "AI tutorials in programming and Prompt engineering in chatgpt:",
        description:
          "How to use AI (ChatGPT, microsoft copilot & deepseek)  to solve business problems",
        topics: [
          {
            title: "AI in Excel",
            subtopics: [
              {
                title: " Data Analysis and Insights",
                fontWeight: "normal",
                subtopics: ["Analyze Data", "Power Query", "Forecasting"],
              },
              "Data Types",
              "Dynamic Array Functions",
              "Natural Language Queries",
              "Insert Data from Pictures",
            ],
          },
          {
            title: "AI in PowerPoint",
            subtopics: [
              {
                title: " Data Analysis and Insights",
                fontWeight: "normal",
                subtopics: ["Design Ideas", "Smart Formatting"],
              },
              "Content Generation",
              "Visual Enhancements",
              "Data Visualization",
              "AI-Powered Presentation Makers",
            ],
          },
          {
            title: "For Full Stack Development",
            subtopics: [
              "How To Use AI To Learn For Developers",
              "AI-Powered Code Generation and Debugging",
              "AI Prompts for Enhanced User Interfaces (front end Designs)",
              "Prompts For Learning To Code",
              "AI Prompting Practice",
              "AI-Powered Frameworks and Libraries",
              "AI Prompting CheatSheets",
            ],
          },
        ],
        style: {
          backgroundColor: "white",
          color: "black",
        },
      },
      {
        id: 3,
        title: "Module 3",
        subtitle: "Requirements Life Cycle Management:",
        description:
          "Manage, prioritize, trace, and reuse business requirements effectively.",
        topics: [
          {
            title: "Requirements Life Cycle Management",
            subtopics: [
              "Tracing requirements",
              "Prioritizing requirements",
              "Managing changes to requirements",
              "Maintaining requirements for reuse",
            ],
          },
          {
            title: "Strategy Analysis",
            subtopics: [
              "Understanding the business environment",
              "Conducting SWOT analysis",
              "Defining business needs and goals",
              "Developing business cases",
            ],
          },
          {
            title: "Requirements Analysis and Design Definition",
            subtopics: [
              "Analyzing and modeling requirements",
              "Creating use cases and user stories",
              "Defining solution requirements",
              "Designing and validating solutions",
            ],
          },
        ],
      },
      {
        id: 4,
        title: "Module 4",
        subtitle: "Learn Solution Evaluation",
        description:
          "Analyze performance, identify gaps, recommend improvements, and validate solutions.",
        topics: [
          {
            title: "Solution Evaluation",
            subtopics: [
              "Assessing solution performance",
              "Identifying and analyzing solution gaps",
              "Recommending improvements",
              "Validating solution results",
            ],
          },
          {
            title: "Tools and Techniques for Business Analysis",
            subtopics: [
              "Overview of BA tools (JIRA, Confluence, MS Visio)",
              "Data analysis and visualization tools (Excel, Power BI)",
              "Modeling techniques (UML, BPMN)",
              "Agile methodologies and frameworks",
            ],
          },
        ],
      },
      {
        id: 5,
        title: "Module 5",
        subtitle: "Real-World Applications and Hands-On Experience",
        description:
          "Apply business analysis through case studies, projects, and industry insights.",
        topics: [
          {
            title: "Real-World Applications and Hands-On Experience",
            subtopics: [
              "Real-world case studies",
              "Hands-on projects and simulations",
              "Best practices and lessons learned",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Scrum Master",
    title: "Scrum Master ",
    description: "Learn Scrum framework, roles, events, and Agile principles.",
    category: "Scrum Master",
    imageUrl: "/Images/Scrum master.webp",
    certificates: [
      {
        title: "Course Completion Certificate",
        image: "/Images/Scrum-Master-course certificate.jpg",
        benefits: [
          "Skill Enhancement",
          "Improved Communication and Collaboration Skills",
          "Confidence Boost",
          "Accreditation and Recognition",
          "Professional Recognition",
          "Entrepreneurial Opportunities",
          "Access to Better Pay",
        ],
      },
      {
        title: "Certificate of Internship Completion",
        image: "/Images/Scrum-Master-internship.jpg",
        benefits: [
          "Real-Time Work Experience",
          "Expert Guidance",
          "End-To-End Project Implementation",
          "Certification",
          "Industry Standards and Processes",
          "Team Collaboration",
          "Networking",
        ],
      },
      {
        title: "Job Offeretter",
        image: "/Images/offerLetter.png",
        benefits: [
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
          "Use your certificates to make a life-changing shift",
        ],
      },
    ],
    rating: "5.0",
    lessons: "4 Modules",
    students: 5,
    author: "Mayur",
    modules: [
      {
        id: 1,
        title: "Module 1",
        subtitle: "Introduction to Scrum and Agile Principles",
        description:
          "Learn the fundamentals of Agile methodologies and the Scrum framework, including its history, principles, and core values.",
        topics: [
          {
            title: "Introduction to Scrum and Agile Principles",
            subtopics: [
              "Overview of Agile methodologies",
              "History and evolution of Scrum",
              "Key principles and values of Scrum",
            ],
          },
          {
            title: "Scrum Framework",
            subtopics: [
              "Scrum roles: Product Owner, Scrum Master, Development Team",
              "Scrum events: Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective",
              "Scrum artifacts: Product Backlog, Sprint Backlog, Increment",
            ],
          },
          {
            title: "Scrum Roles and Responsibilities",
            subtopics: [
              "Detailed responsibilities of the Scrum Master",
              "How the Scrum Master supports the Product Owner and Development Team",
              "Facilitating Scrum events and removing impediments",
            ],
          },
        ],
      },
      {
        id: 2,
        title: "New AI Module 2",
        subtitle:
          "AI tutorials in programming and Prompt engineering in chatgpt:",
        description:
          "How to use AI (ChatGPT, microsoft copilot & deepseek)  to solve business problems",
        topics: [
          {
            title: "AI in Excel",
            subtopics: [
              {
                title: " Data Analysis and Insights",
                fontWeight: "normal",
                subtopics: ["Analyze Data", "Power Query", "Forecasting"],
              },
              "Data Types",
              "Dynamic Array Functions",
              "Natural Language Queries",
              "Insert Data from Pictures",
            ],
          },
          {
            title: "AI in PowerPoint",
            subtopics: [
              {
                title: " Data Analysis and Insights",
                fontWeight: "normal",
                subtopics: ["Design Ideas", "Smart Formatting"],
              },
              "Content Generation",
              "Visual Enhancements",
              "Data Visualization",
              "AI-Powered Presentation Makers",
            ],
          },
          {
            title: "For Full Stack Development",
            subtopics: [
              "How To Use AI To Learn For Developers",
              "AI-Powered Code Generation and Debugging",
              "AI Prompts for Enhanced User Interfaces (front end Designs)",
              "Prompts For Learning To Code",
              "AI Prompting Practice",
              "AI-Powered Frameworks and Libraries",
              "AI Prompting CheatSheets",
            ],
          },
        ],
        style: {
          backgroundColor: "white",
          color: "black",
        },
      },
      {
        id: 3,
        title: "Module 3",
        subtitle: "Scrum Team Management",
        description:
          "Understand how to manage Scrum teams effectively, conduct ceremonies, and develop core competencies as a Scrum Master.",
        topics: [
          {
            title: "Scrum Ceremonies and Artifacts",
            subtopics: [
              "Conducting effective Sprint Planning sessions",
              "Running productive Daily Scrums",
              "Facilitating Sprint Reviews and Retrospectives",
              "Managing and refining the Product Backlog",
            ],
          },
          {
            title: "Core Competencies of a Scrum Master",
            subtopics: [
              "Servant leadership and coaching",
              "Conflict resolution and team dynamics",
              "Effective communication and facilitation skills",
            ],
          },
        ],
      },
      {
        id: 4,
        title: "Module 4",
        subtitle: "Practical Applications of Scrum",
        description:
          "Apply Scrum principles in real-world scenarios, including scaling Scrum for larger projects and preparing for certification.",
        topics: [
          {
            title: "Practical Applications of Scrum",
            subtopics: [
              "Implementing Scrum in different environments",
              "Scaling Scrum for large projects",
              "Using Scrum with other Agile methodologies",
            ],
          },
          {
            title: "Preparation for the CSM Exam",
            subtopics: [
              "Study tips and resources",
              "Practice questions and mock exams",
              "Understanding the certification process",
            ],
          },
        ],
      },
    ],
  },
];
