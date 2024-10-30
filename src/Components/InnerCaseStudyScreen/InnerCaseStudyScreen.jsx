import React from 'react';
import CaseStudyIntro from './CaseStudyIntroComponent/CaseStudyIntro';
import CaseStudyOverview from './CaseStudyOverviewComponent/CaseStudyOverview';
import CaseStudyCharts from './CaseStudyChartsComponent/CaseStudyCharts';
import CaseStudyDescription from './CaseStudyDescriptionComponent/CaseStudyDescription';
import CaseStudyCards from './CaseStudyCardsComponent/CaseStudyCards';

const InnerCaseStudyScreen = () => {
  return (
    <div>
        <CaseStudyIntro />
        <CaseStudyOverview />
        <CaseStudyCharts />
        <CaseStudyDescription />
        <CaseStudyCards />
    </div>
  );
};

export default InnerCaseStudyScreen;
