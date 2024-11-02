import React from 'react';
import './PlansPromotion.css';
import backgroundImage from '../../../Assets/Icons/PackagesAndPricesScreen/PlansPromotionComponent/background.svg';

const PlansPromotion = () => {
  return (
    <div className="plans-promotion" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <h1>Curious to try<br />Join the waiting list</h1>
        <p>Learn. Segment. Connect. Engage. Analyze. Support. Your customer.</p>
        <br />
        <br />
        <div className="buttons">
        <a style={{textDecoration:"none"}} href="/ContactUs" target="_blank"><button className="banner-button">Get Started →</button></a>
        <a style={{textDecoration:"none"}} href="https://portal.cloudcom.io/login" target="_blank"><button className="banner-button">Book a demo →</button></a>
        </div>
      </div>
    </div>
  );
};

export default PlansPromotion;
