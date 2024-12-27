import React, { Suspense } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CoursesPage from "./Pages/Courses/courses";
import CourseDetails from "./Pages/Courses/courseDetails";

// const CoursesPage = React.lazy(() => import("./Pages/Courses/courses"));
const ContactForm = React.lazy(() => import("./Pages/ContactUs/contactUs"));
const Home = React.lazy(() => import("./Pages/home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactForm />} />
          {/* <Route path="/courses" element={<CoursesPage />} /> */}
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courseDetails" element={<CourseDetails />} />
          <Route path="/course/:id" element={<CourseDetails />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
