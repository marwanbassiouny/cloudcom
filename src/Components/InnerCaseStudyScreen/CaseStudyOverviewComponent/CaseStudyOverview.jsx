import React from 'react';
import './CaseStudyOverview.css';
import overviewImage from '../../../Assets/Icons/InnerCaseStudyScreen/CaseStudyOverview/overviewImage.svg';

const CaseStudyOverview = () => {
  return (
    <div className="case-study-overview page_padding_level_1">
      <section className="overview-section">
        <div className="overview-text">
          <h2>Overview</h2>
          <p>
          Gourmet Egypt, a premium grocery retailer, faced challenges in retaining customers and maintaining consistent engagement. Despite offering high-quality products, Gourmet Egypt’s customer engagement efforts were not yielding desired results. In a competitive market, it was essential for the brand to strengthen its customer relationships and improve retention rates. To address these challenges, Gourmet Egypt partnered with cloudcom to leverage the power of personalized, omnichannel communication and AI-driven segmentation.
          </p>
        </div>
        <div className="overview-image">
          <img src={overviewImage} alt="Gourmet Egypt Store" />
        </div>
      </section>

      <section className="challenge-section">
        <h3>The Challenge</h3>
        <p>
          Gourmet Egypt was experiencing a growing disconnect with its customer base, particularly with lapsing customers. Without a comprehensive, data-driven approach to customer communication, it was difficult to understand customer behavior, deliver personalized messages, and drive retention.
        </p>
     </section>

      <section className="challenge-section">
        <h3>Key challenges included:</h3>
        <p>Declining Retention Rate:Many customers made one-off purchases with no follow-up, causing retention rates to drop.</p>
        <p>Ineffective Targeting: Without real-time segmentation, targeting customers based on their purchase history and preferences was challenging.</p>
        <br />
        <p>Fragmented Communication Channels:Managing customer communication across SMS, email, and other channels lacked cohesion, leading to inconsistent engagement.</p>
      </section>

      <section className="solution-section">
        <h3>The Solution</h3>
        <p>
        Gourmet Egypt turned to cloudcom’s CPaaS (Communication Platform as a Service) to streamline its customer communication strategy. By using cloudcom’s suite of omnichannel tools and AI-powered segmentation, Gourmet Egypt was able to automate personalized communication across SMS, WhatsApp, and email, while Flow Builder allowed them to create automated workflows for seamless customer journeys.
        </p>
        <br />
        <p>Additionally, cloudcom’s Customer Data Management provided Gourmet Egypt with a 360-degree view of each customer, enabling better insights into behaviors such as purchase history, abandoned carts, and preferences. This helped personalize messaging further and optimize engagement.
        </p>
      </section>

      <section className="key-implementations">
        <h3>Key Implementations:</h3>
        <p>AI-Powered Segmentation: cloudcom enabled Gourmet Egypt to segment its customer base based on real-time behavioral data, allowing the brand to deliver personalized messages to high-value customers, churn-risk users, and loyal shoppers.        </p>
      </section>

      <section className="key-implementations">
        <h3>Omnichannel Campaigns: </h3>
        <p>cloudcom’s Multi-Channel Campaign Manager allowed Gourmet Egypt to send unified messages across SMS, email, and WhatsApp, ensuring consistent engagement at every touchpoint.</p>
      </section>
    </div>
  );
};

export default CaseStudyOverview;
