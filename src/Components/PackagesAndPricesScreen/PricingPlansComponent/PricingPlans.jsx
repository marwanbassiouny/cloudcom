import React from 'react';
import './PricingPlans.css';
import tickIcon from '../../../Assets/Icons/PackagesAndPricesScreen/PricingPlansComponent/tickIcon.svg';

const PricingPlans = () => {
  return (
    <div className="pricing-plans-container">
      <div className="background-section">
        <div className="pricing-text">
          <h2>Packages & Pricing</h2>
          <h1>cloudcom offers </h1>
          <h1>flexible plans</h1>
          <p>Designed to empower your business, whether you’re just starting out or scaling rapidly. Choose the solution that fits your growth.</p>
          <button className="pricing-button">Our Pricing ➜</button>
        </div>
      </div>

      <div className="empty-white-section"></div>

      <div className="pricing-cards">
        <div className="card essential">
          <h3 className="cardTitle">$40 /month</h3>
          <h4 className="cardTitle">Essential</h4>
          <p className='cardText'>
            Empowering businesses with the core tools to start personalizing customer interactions and manage campaigns efficiently.
          </p>
          <ul className='listContainer'>
            <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" /> Limited AI Segmentation</li>
            <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />Personalization</li>
            <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />Campaign Manager</li>
            <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />User Role Management</li>
            <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />24/7 Support</li>
          </ul>
          <button>Choose plan</button>
        </div>

        <div className="card pro">
          <h3>$54 /month</h3>
          <h4>Pro</h4>
          <ul>
            <li>Omni-Channel Campaigns</li>
            <li>Verification Model</li>
            <li>AI Segmentation</li>
            <li>Unlimited Customer Journeys</li>
            <li>Advanced Analytics</li>
          </ul>
          <button>Choose plan</button>
        </div>

        <div className="card enterprise">
          <h3>$89 /month</h3>
          <h4>Enterprise</h4>
          <ul>
            <li>Hyper Personalization</li>
            <li>Product Recommendation</li>
            <li>Chat Management</li>
            <li>Cohort Analytics</li>
            <li>Shopify Integration</li>
          </ul>
          <button>Choose plan</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
