import React, { Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Header/header";
import HeroSection from "../components/HeroSection/heroSection";
import Loader from "../components/loader";

const CourseCards = React.lazy(() => import("../components/Courses/course"));
const FAQSection = React.lazy(() =>
  import("../components/FAQSection/faqSection")
);
const MeetHeroes = React.lazy(() =>
  import("../components/MeetOurHeros/meetHeros")
);
const TestimonialPage = React.lazy(() =>
  import("../components/MeetOurHeros/career")
);

function Home() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <CourseCards />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <MeetHeroes />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <TestimonialPage />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <FAQSection />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
