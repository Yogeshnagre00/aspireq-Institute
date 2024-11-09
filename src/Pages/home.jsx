import React, { Suspense } from "react";
import Navbar from "../components/Header/header";
import HeroSection from "../components/HeroSection/heroSection";
import { Footer } from "../components/Footer/footer";
import MeetHeroes from "../components/MeetOurHeros/meetHeros";
import TestimonialPage from "../components/MeetOurHeros/career";

// Lazy load other components

const CourseCards = React.lazy(() => import("../components/Courses/course"));
const FAQSection = React.lazy(() =>
  import("../components/FAQSection/faqSection")
);
const ContactSection = React.lazy(() =>
  import("../components/ContactSection/contact")
);

function Home() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main>
        <HeroSection />
        <Suspense fallback={<div>Loading...</div>}>
          <CourseCards />
          <MeetHeroes />
          <TestimonialPage />
          <FAQSection />
          <ContactSection />
        </Suspense>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
