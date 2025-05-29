import React, { Suspense } from "react";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Header/header";
import HeroSection from "../section/HeroSection/heroSection";
import Loader from "../utils/loader";
import ErrorBoundary from "../utils/errorBoundary";

const CourseCards = React.lazy(() => import("../section/Courses/course"));
const FAQSection = React.lazy(() =>
  import("../components/FAQSection/faqSection")
);
const MeetHeroes = React.lazy(() =>
  import("../section/MeetOurHeros/meetHeros")
);
const TestimonialPage = React.lazy(() =>
  import("../section/MeetOurHeros/career")
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
