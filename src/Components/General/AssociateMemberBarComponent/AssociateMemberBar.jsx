import React, { useState } from 'react';
import phoneIcon from '../../../Assets/Icons/General/AssociateMemberComponent/associate_logo.png';
import './AssociateMemberBar.css';

const AssociateMemberBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // Do not render the component if it's not visible
  }

  return (
    <div className="AssociateMemberBar-container page_padding_level_1">
      <img src={phoneIcon} alt="phoneIcon" className="GSMA_logo_image" loading="lazy" />
      <button className="close-button" onClick={handleClose}>
        &times;
      </button>
    </div>
  );
};

export default AssociateMemberBar;
