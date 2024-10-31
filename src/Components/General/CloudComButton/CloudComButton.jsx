import React from 'react';
import './CloudComButton.css';
import arrowIcon from '../../../Assets/Icons/General/PrimaryNavbarComponent/signup.svg';

const CloudComButton = ({ text, link }) => {
  return (
    <div >
         <a href={link} className="cloudcom-btn">
          {text}
          <img className="arrow" src={arrowIcon} alt="icon" />
        </a>
    </div>
  );
};

export default CloudComButton;
