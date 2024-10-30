import React from 'react';
import './PlansPromotion.css';
import backgroundImage from '../../../Assets/Icons/PackagesAndPricesScreen/PlansPromotionComponent/background.svg';

const PlansPromotion = () => {
  return (
    <div className="plans-promotion" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <h1>Curious to try<br />Join the waiting list</h1>
        <p>Learn. Segment. Connect. Engage. Analyze. Support. Your customer.</p>
        <div className="buttons">
          <button className="book-demo-btn">Get Started <span>→</span></button>
          <button className="book-demo-btn">Book a demo <span>→</span></button>
        </div>
      </div>
    </div>
  );
};

export default PlansPromotion;
