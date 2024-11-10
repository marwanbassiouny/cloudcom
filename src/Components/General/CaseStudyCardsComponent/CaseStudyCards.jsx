import React from "react";
import CaseStudyCard from "../../CaseStudiesScreen/CaseStudyCardComponent/CaseStudyCardComponent.jsx";
import { caseStudiesData } from "../../ReachFinanceCaseStudyScreen/CaseStudyData.js";
import "./CaseStudyCards.css";

const CaseStudyCards = () => {
  return (
    <div className="case-studies-section">
      <div className="case-studies-grid">
        {caseStudiesData.map((study) => (
          <CaseStudyCard key={study.id} {...study} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudyCards;
