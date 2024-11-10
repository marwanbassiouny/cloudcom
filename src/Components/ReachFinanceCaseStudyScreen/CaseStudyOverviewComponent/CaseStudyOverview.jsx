import React from 'react';
import './CaseStudyOverview.css';
import overviewImage from '../../../Assets/Icons/InnerCaseStudyScreen/CaseStudyOverview/overviewImage.svg';

const CaseStudyOverview = () => {
  return (
    <div className="case-study-overview">
      <section className="overview-section">
        <div className="overview-text">
          <h2>Overview</h2>
          <p>
          Reach Finance, a leading financial services provider in the MENA region, aimed to build stronger relationships with customers and increase repeat transactions. Despite its large customer base, the company needed a more effective communication strategy to improve engagement and drive more frequent interactions. By partnering with cloudcom, Reach Finance implemented personalized, omnichannel messaging to improve email open rates, customer engagement, and repeat transactions.
          </p>
        </div>
        <div className="overview-image">
          <img src={overviewImage} alt="Gourmet Egypt Store" />
        </div>
      </section>

      <section className="challenge-section">
        <h3>The Challenge</h3>
        <p>
        Reach Finance faced several challenges that limited their ability to retain customers and foster repeat business:
        </p>
     </section>

      <section className="challenge-section">
        <h3>Key challenges included:</h3>
        <p>Low Email Open Rates: Customers were not engaging with email communication, resulting in missed opportunities to promote additional services.</p>
        <p>Low Retention & Repeat Transactions: Many customers made a one-off transaction without returning for further services, decreasing overall retention.</p>
        <br />
        <p>Fragmented Communication: Messaging across different channels was inconsistent, affecting the user experience and leading to disengagement.</p>
      </section>

      <section className="solution-section">
        <h3>Business Objectives</h3>
        <h4>Reach Finance set clear goals to address these challenges:</h4>
        <p>
        Increase User Acquisition: Attract and engage new customers more effectively from the start.
        </p>
        <br />
        <p>Improve Engagement and Retention: Build long-term relationships with customers by keeping them engaged and returning for more services.</p>
        <p>Boost Transactions: Encourage more transactions by personalizing the customer journey and delivering relevant, timely touchpoints.</p>
      </section>

      <section className="solution-section">
        <h3>The Solution</h3>
        <p>
        cloudcom helped Reach Finance streamline its communication strategy using AI-driven segmentation and personalized omnichannel messaging. This enabled Reach Finance to deliver targeted messages to the right audience at the right time through email, in-app notifications, SMS, and push notifications.
        </p>
      </section>

      <section className="key-implementations">
        <h3>Key Implementations:</h3>
        <p>Customer Data Management: cloudcom’s solution gave Reach Finance a 360-degree view of their customers, allowing the company to manage customer data effectively and synchronize information from multiple sources for better insights.</p>
      </section>

      
      <section className="key-implementations">
        <h3>AI-Powered Segmentation: </h3>
        <p> cloudcom’s platform enabled Reach Finance to dynamically segment customers based on behavior, transaction history, and engagement data, ensuring more accurate targeting.</p>
      </section>

      <section className="key-implementations">
        <h3>Omnichannel Campaigns: </h3>
        <p>Reach Finance leveraged cloudcom’s Multi-Channel Campaign Manager to unify communication across email, SMS, in-app notifications, and push notifications, ensuring customers received consistent and personalized messaging across their preferred platforms.</p>
      </section>
    </div>
  );
};

export default CaseStudyOverview;
