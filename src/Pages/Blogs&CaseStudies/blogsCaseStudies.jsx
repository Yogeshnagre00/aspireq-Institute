import { useState } from "react";
import ContactSection from "../../components/ContactSection/contact";
import FAQSection from "../../components/FAQSection/faqSection";
import { Footer } from "../../components/Footer/footer";
import Navbar from "../../components/Header/header";
import "./blogsCaseStudies.css";
import { BlogCard, CaseStudyCard } from "./card";

const BlogsCaseStudies = () => {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "Blogs"
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Navbar />
      <div className="blogs-case-studies">
        <h1 className="bcsh1">Blogs & Case Studies</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus
          vitae leo nunc.
        </p>

        <div className="tabs">
          <button
            className={`tab-button ${activeTab === "Blogs" ? "active" : ""}`}
            onClick={() => handleTabChange("Blogs")}
          >
            Blogs
          </button>
          <button
            className={`tab-button1 ${
              activeTab === "Case Studies" ? "active" : ""
            }`}
            onClick={() => handleTabChange("Case Studies")}
          >
            Case Studies
          </button>
        </div>

        <div className="content">
          {activeTab !== "Case Studies" && (
            <div className="grid">
              {/* Blog Cards */}
              <BlogCard
                title="The Rise of Telemedicine: How Virtual Care is Revolutionizing Healthcare Delivery"
                imageSrc="./Images/csaestudies.png"
                description="Lorem ipsum doller foit amet Lorem ipsum doller foit
                ametLorem ipsum doljer foit amet Lorem ipsum
                doller foit amet Lorem? ipsum doller foit amet ipsum
                doller foit amet ipsurndoller foit amet"
                tag="Blog"
                time="12 Min"
                author="Maria Ledntsova"
                authorImage="./Images/author.png"
                date="March 12, 2024"
              />
              <BlogCard
                title="Telemedicine and Mental Health: Breaking Barriers to Access and Stigma"
                imageSrc="./Images/csaestudies.png"
                description="Lorem ipsum doller foit amet Lorem ipsum doller foit
                ametLorem ipsum doljer foit amet Lorem ipsum
                doller foit amet Lorem? ipsum doller foit amet ipsum
                doller foit amet ipsurndoller foit amet"
                tag="Blog"
                time="12 Min"
                author="Maria Ledntsova"
                authorImage="./Images/author.png"
                date="March 12, 2024"
              />
              <BlogCard
                title="Enhancing Guest Experience: Innovative Strategies for Modern Hotels"
                imageSrc="./Images/csaestudies.png"
                description="Lorem ipsum doller foit amet Lorem ipsum doller foit
                ametLorem ipsum doljer foit amet Lorem ipsum
                doller foit amet Lorem? ipsum doller foit amet ipsum
                doller foit amet ipsurndoller foit amet"
                tag="Blog"
                time="12 Min"
                author="Maria Ledntsova"
                authorImage="./Images/author.png"
                date="March 12, 2024"
              />
              <BlogCard
                title="Sustainable Practices in Hotel Management: Going Green Without Compromising Luxury"
                imageSrc="./Images/csaestudies.png"
                description="Lorem ipsum doller foit amet Lorem ipsum doller foit
                ametLorem ipsum doljer foit amet Lorem ipsum
                doller foit amet Lorem? ipsum doller foit amet ipsum
                doller foit amet ipsurndoller foit amet"
                tag="Blog"
                time="12 Min"
                author="Maria Ledntsova"
                authorImage="./Images/author.png"
                date="March 12, 2024"
              />
              <BlogCard
                title="The Impact of Fintech on Traditional Banking: Opportunities and Challenges"
                imageSrc="./Images/csaestudies.png"
                description="Lorem ipsum doller foit amet Lorem ipsum doller foit
                ametLorem ipsum doljer foit amet Lorem ipsum
                doller foit amet Lorem? ipsum doller foit amet ipsum
                doller foit amet ipsurndoller foit amet"
                tag="Blog"
                time="12 Min"
                author="Maria Ledntsova"
                authorImage="./Images/author.png"
                date="March 12, 2024"
              />
              <BlogCard
                title="Navigating the Future of Investment Banking: Trends and Innovations to Watch"
                imageSrc="./Images/csaestudies.png"
                description="Lorem ipsum doller foit amet Lorem ipsum doller foit
                ametLorem ipsum doljer foit amet Lorem ipsum
                doller foit amet Lorem? ipsum doller foit amet ipsum
                doller foit amet ipsurndoller foit amet"
                tag="Blog"
                time="12 Min"
                author="Maria Ledntsova"
                authorImage="./Images/author.png"
                date="March 12, 2024"
              />
              {/* Add more BlogCard components as needed */}
            </div>
          )}

          {activeTab !== "Blogs" && (
            <div className="grid">
              {/* Case Study Cards */}

              <CaseStudyCard
                title="QA Case Study"
                imageSrc="./Images/csaestudies.png"
                description="Lorem ipsum doller foit amet Lorem ipsum doller foit
                ametLorem ipsum doljer foit amet Lorem ipsum
                doller foit amet Lorem? ipsum doller foit amet ipsum
                doller foit amet ipsurndoller foit amet"
                tag="Case Study"
                time="12 Min"
                date="March 12, 2024"
              />
              <CaseStudyCard
                title="QA Case Study"
                imageSrc="./Images/csaestudies.png"
                description="Lorem ipsum doller foit amet Lorem ipsum doller foit
                 ametLorem ipsum doljer foit amet Lorem ipsum
                 oller foit amet Lorem? ipsum doller foit amet ipsum
                 doller foit amet ipsurndoller foit amet"
                tag="Case Study"
                time="12 Min"
                date="March 12, 2024"
              />
              <CaseStudyCard
                title="QA Case Study"
                imageSrc="./Images/csaestudies.png"
                description="Lorem ipsum doller foit amet Lorem ipsum doller foit
                ametLorem ipsum doljer foit amet Lorem ipsum
                 doller foit amet Lorem? ipsum doller foit amet ipsum
                  doller foit amet ipsurndoller foit amet"
                tag="Case Study"
                time="12 Min"
                date="March 12, 2024"
              />
              <CaseStudyCard
                title="QA Case Study"
                imageSrc="./Images/csaestudies.png"
                description="Lorem ipsum doller foit amet Lorem ipsum doller foit
                ametLorem ipsum doljer foit amet Lorem ipsum
                doller foit amet Lorem? ipsum doller foit amet ipsum
                doller foit amet ipsurndoller foit amet"
                tag="Case Study"
                time="12 Min"
                date="March 12, 2024"
              />

              {/* Add more CaseStudyCard components as needed */}
            </div>
          )}
        </div>
      </div>
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default BlogsCaseStudies;
