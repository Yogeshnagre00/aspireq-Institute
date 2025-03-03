import React, { Suspense } from "react";
//import { Footer } from "../components/Footer/footer";
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
        {/* <ImageSlider /> */}
        <Suspense fallback={<Loader />}>
          <CourseCards />
          <MeetHeroes />
          <TestimonialPage />
          <FAQSection />
        </Suspense>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
