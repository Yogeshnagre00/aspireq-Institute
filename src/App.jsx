import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

const CoursesPage = React.lazy(() => import("./Pages/Courses/courses"));
const CourseDetails = React.lazy(() => import("./Pages/Courses/courseDetails"));
const ContactForm = React.lazy(() => import("./Pages/ContactUs/contactUs"));
const AboutUs = React.lazy(() => import("./Pages/AboutUs/aboutUs"));
const Home = React.lazy(() => import("./Pages/home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactForm />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course-details/:courseId" element={<CourseDetails />} />
          <Route
            path="/course-details/:formattedName"
            element={<CourseDetails />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
