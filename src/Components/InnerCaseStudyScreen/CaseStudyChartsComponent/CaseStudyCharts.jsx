import React from 'react';
import './CaseStudyCharts.css';
import leftChartImage from '../../../Assets/Icons/InnerCaseStudyScreen/CaseStudyCharts/leftChart.svg';
import rightChartImage from '../../../Assets/Icons/InnerCaseStudyScreen/CaseStudyCharts/rightChart.svg';

const CaseStudyCharts = () => {
  return (
    <div className="case-study-charts">
      <div className="chart-container">
        <img src={leftChartImage} alt="Left Chart" className="chart-image" />
      </div>
      {/* <div className="chart-container">
        <img src={rightChartImage} alt="Right Line Chart" className="chart-image" />
      </div> */}
    </div>
  );
};

export default CaseStudyCharts;
