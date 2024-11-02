import React from 'react';
import './DataManagement.css';
import dataManagementImage from '../../../Assets/Icons/HomeScreen/DataManagementComponent/DataManagementImage.svg'; 
import blueElipseIcon from '../../../Assets/Icons/HomeScreen/DataManagementComponent/bluElipse.svg'; 
import whiteElipseIcon from '../../../Assets/Icons/HomeScreen/DataManagementComponent/whiteElipse.svg'; 
import titleIcon from '../../../Assets/Icons/HomeScreen/DataManagementComponent/titleIcon.svg'; 
import textContent from '../../../Assets/Data/HomeScreen/DataManagementComponent/DataManagement.json'

const DataManagement = () => {
  return (
    <div className="data-management-container">
      {/* Top Section: Grey Text */}
      <div className="top-section">
        <h1>{textContent.dataManagementService1} · {textContent.dataManagementService2} · {textContent.dataManagementService3} . {textContent.dataManagementService4} . {textContent.dataManagementService5}</h1>
      </div>

      {/* Bottom Three Parallel Sections */}
      <div className="bottom-section">
        {/* Left Section: Title and Description */}
        <div className="data-left-section">
          <img src={titleIcon} className=""/>
          <h2>{textContent.headline1}</h2>
          <p>{textContent.description}</p>
          <a href="/customerDataManagement" className="data-explore-btn explore-btn-glow" target='_blank'>{textContent.exploreButton} →</a>
        </div>

        {/* Middle Section: Image */}
        <div className="middle-section">
          <img src={dataManagementImage} alt="Customer Data Management" />
        </div>

        {/* Right Section: Ellipses */}
        {/* <div className="right-section">
          <img src={blueElipseIcon} className="ellipse"/>
          <img src={whiteElipseIcon} className="ellipse"/>
          <img src={whiteElipseIcon} className="ellipse"/>
          <img src={whiteElipseIcon} className="ellipse"/>
          <img src={whiteElipseIcon} className="ellipse"/>
        </div> */}
      </div>
    </div>
  );
};

export default DataManagement;
