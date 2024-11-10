import React from 'react';
import CaseStudyIntro from './CaseStudyIntroComponent/CaseStudyIntro';
import CaseStudyOverview from './CaseStudyOverviewComponent/CaseStudyOverview';
import CaseStudyCharts from '../General/CaseStudyChartsComponent/CaseStudyCharts';
import CaseStudyDescription from './CaseStudyDescriptionComponent/CaseStudyDescription';
import CaseStudyCards from '../General/CaseStudyCardsComponent/CaseStudyCards';

const GourmetCaseStudyScreen = () => {
  return (
    <div className='casestudyinnerinfo'>
        <CaseStudyIntro />
        <CaseStudyOverview />
        <CaseStudyCharts />
        <CaseStudyDescription />
        <CaseStudyCards />
    </div>
  );
};

export default GourmetCaseStudyScreen;
