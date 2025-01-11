import React, { Suspense } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

const CoursesPage = React.lazy(() => import("./Pages/Courses/courses"));
const CourseDetails = React.lazy(() => import("./Pages/Courses/courseDetails"));
const ContactForm = React.lazy(() => import("./Pages/ContactUs/contactUs"));
const Home = React.lazy(() => import("./Pages/home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactForm />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course-details/:courseId" element={<CourseDetails />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
