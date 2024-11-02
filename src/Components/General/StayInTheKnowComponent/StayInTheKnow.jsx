import React from 'react';
import './StayInTheKnow.css';
import ArrowIcon from '../../../Assets/Icons/General/StayInTheKnowComponent/arrow.svg';

const StayInTheKnow = () => {
  return (
    <div className="outer-container">
      <div className="blue-section">
        <h2>Stay in the know</h2>
        <p>
          Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi erat.
        </p>
        <div className="input-container">
          <input type="email" placeholder="Enter your email address" />
          <button className="gradient-button">
            <img src={ArrowIcon} alt="Send" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StayInTheKnow;
