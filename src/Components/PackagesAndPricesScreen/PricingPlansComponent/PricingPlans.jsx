import {React,useState} from 'react';
import './PricingPlans.css';
import tickIcon from '../../../Assets/Icons/PackagesAndPricesScreen/PricingPlansComponent/tickIcon.svg';
import CloudComButton from '../../General/CloudComButton/CloudComButton'

const PricingPlans = () => {

  const [selectedCardIndex, setSelectedCardIndex] = useState(2); // State to track the default selected card (Enterprise card)
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null); // State to track which card is hovered

  // Handler for mouse enter - set the hovered card index
  const handleMouseEnter = (index) => {
    setHoveredCardIndex(index); // Set hover state to the index of the card being hovered
  };

  // Handler for mouse leave - reset the hovered card index
  const handleMouseLeave = () => {
    setHoveredCardIndex(null); // Reset hover state when mouse leaves
  };

  // Determine which card should have the 'enterprise' class
  const getCardClass = (index) => {
    if (hoveredCardIndex !== null) {
      return hoveredCardIndex === index ? 'enterprise' : ''; // Apply 'enterprise' to hovered card
    }
    return selectedCardIndex === index ? 'enterprise' : ''; // Otherwise, apply 'enterprise' to the default selected card
  };

  
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
        <div       className={`card_plan essential ${getCardClass(0)}`} // Use getCardClass to determine if the enterprise class should be applied
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}>
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

        <div className={`card_plan pro ${getCardClass(1)}`} // Use getCardClass to determine if the enterprise class should be applied
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}>
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

        <div className={`card_plan  ${getCardClass(2)}`} // Use getCardClass to determine if the enterprise class should be applied
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}>
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
