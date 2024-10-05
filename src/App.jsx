import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

const BlogsCaseStudies = React.lazy(() =>
  import("./Pages/Blogs&CaseStudies/blogsCaseStudies")
);
const ContactForm = React.lazy(() => import("./Pages/ContactUs/contactUs"));
const Home = React.lazy(() => import("./Pages/home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactForm />} />
          <Route path="/BlogsCaseStudies" element={<BlogsCaseStudies />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
