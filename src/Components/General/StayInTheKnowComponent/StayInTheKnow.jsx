import React from 'react';
import './StayInTheKnow.css';
import ArrowIcon from '../../../Assets/Icons/General/StayInTheKnowComponent/arrow.svg';

const StayInTheKnow = () => {
  return (
    <div className="outer-container">
      <div className="blue-section">
        <h2>Stay in the know</h2>
        <p>
          Stay ahead with CloudCom's insights. Subscribe for updates.
        </p>
        <div className="input-container">
          <input className='contactus-email-input' type="email" placeholder="Enter your email address" />
          <button className="gradient-button">
            <img src={ArrowIcon} alt="Send" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StayInTheKnow;
