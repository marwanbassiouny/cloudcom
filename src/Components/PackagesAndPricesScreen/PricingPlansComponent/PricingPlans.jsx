import React from 'react';
import './PricingPlans.css';
import tickIcon from '../../../Assets/Icons/PackagesAndPricesScreen/PricingPlansComponent/tickIcon.svg';
import CloudComButton from '../../General/CloudComButton/CloudComButton'

const PricingPlans = () => {
  return (
    <div className="pricing-plans-container ">
      <div className="background-section page_padding_level_1">
        <div className="pricing-text">
          <h3>Packages & Pricing</h3>
          <h1>cloudcom offers </h1>
          <h1>flexible plans</h1>
          <p>Designed to empower your business, whether you’re just starting out or scaling rapidly. Choose the solution that fits your growth.</p>
          <br />
          <CloudComButton text="Our Pricing" />
        </div>
      </div>

      <div className="empty-white-section"></div>

      <div className="pricing-cards">
        <div className="card_plan essential">
          <div className="cardTitleContainer">
            <h3 className="cardTitle">$40</h3>
            <p className="cardSubTitle">/month</p>
          </div>
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

        <div className="card_plan pro">
          <div className="cardTitleContainer">
            <h3 className="cardTitle">$54</h3>
            <p className="cardSubTitle">/month</p>
          </div>
          <h4 className="cardTitle">Pro</h4>
          <p className='cardText'>
          Unlock the full potential of your customer data with advanced segmentation and omni-channel campaigns to drive business growth.  
          </p>
          <ul className='listContainer'>
            <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />Omni-Channels Campaigns.</li>
            <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />Verification Model.</li>
            <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />AI Segmentation.</li>
            <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />Unlimited Customer Journeys.</li>
            <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />Advanced Analytics.</li>
            <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />Customer Data Managment.</li>
          </ul>
          <button>Choose plan</button>
        </div>

        <div className="card_plan enterprise">
          <div className='promoContainer'>
            <div className='promo'>
              MOST POPULAR
            </div>
          </div>
          <div className="cardTitleContainer">
              <h3 className="cardTitle">$89</h3>
              <p className="cardSubTitle">/month</p>
            </div>
            <h4 className="cardTitle">Enterprise</h4>
            <p className='cardText'>
               For businesses ready to scale, offering hyper-personalization, advanced analytics, and seamless integrations to maximize customer engagement.
            </p>
            <ul className='listContainer'>
              <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />Hyper Personalization.</li>
              <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />Product Recommendation Model.</li>
              <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />Chat Management.</li>
              <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />24/7 Support.</li>
              <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />Cohort Analytics.</li>
              <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />A/B Testing To Your Campaings.</li>
              <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />Identify Customers Per Channels.</li>
              <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />Productive Segmentations.</li>
              <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />Social Media Channels.</li>
              <li className='listItem'><img src={tickIcon} alt="tick" className="tickIcon" />Shopify Integration.</li>
            </ul>
            <button>Choose plan</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
