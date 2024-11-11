import React from "react";
import CaseStudyCard from "./CaseStudyCardComponent/CaseStudyCardComponent.jsx";
import { caseStudiesData } from "./CaseStudyData.js";
import "./CaseStudyScreen.css";
import ContactUsBannerComponent from "./ContactUsBannerComponent/ContactUsBannerComponent.jsx";

const CaseStudyScreen = () => {
  return (
      <>
      <div className="case-studies-section page_padding_level_1">
        <h2 className="case-studies-title">Our Case studies</h2>
        <p className="case-studies-subtitle">
          Discover how cloudcom's solutions deliver measurable results across industries.
        </p>
        <div className="case-studies-grid">
          {caseStudiesData.map((study) => (
            <CaseStudyCard key={study.id} {...study} />
          ))}
        </div>
      </div>
      <ContactUsBannerComponent/>
    </>
  );
};

export default CaseStudyScreen;
