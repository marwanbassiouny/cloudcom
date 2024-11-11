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
          Vezeeta, a leading health-tech platform in the Middle East and North Africa, wanted to drive higher engagement with its pharmacy services. Despite a strong user base, Vezeeta faced challenges in improving pharmacy order volumes. The goal was to enhance communication with users, educate them about the pharmacy services, and prompt them to place orders more frequently. By partnering with cloudcom, Vezeeta utilized personalized, omnichannel communication strategies powered by AI-driven segmentation to boost pharmacy orders and customer engagement.
          </p>
        </div>
        <div className="overview-image">
          <img src={overviewImage} alt="Gourmet Egypt Store" />
        </div>
      </section>

      <section className="challenge-section">
        <h3>The Challenge</h3>
        <p>
        Vezeeta’s primary challenge was low awareness and engagement for its pharmacy services, even though its main platform saw high traffic. Without targeted messaging and data-driven engagement, users were not taking full advantage of the pharmacy feature.  
        </p>
     </section>

      <section className="challenge-section">
        <h3>Key challenges included:</h3>
        <p>Lack of Awareness: Users were not fully aware of Vezeeta’s pharmacy services and their benefits.</p>
        <p>Low Conversion from Inquiries to Orders: Vezeeta struggled to convert customer inquiries into pharmacy orders due to ineffective communication strategies.</p>
        <br />
        <p>Fragmented User Data: Without robust customer segmentation, Vezeeta could not target users with personalized messages based on their health needs and previous interactions.</p>
      </section>

      <section className="solution-section">
        <h3>The Solution</h3>
        <p>
          To address these challenges, Vezeeta partnered with cloudcom to streamline its communication efforts and improve customer engagement. By leveraging cloudcom’s Customer Data Management and AI-Powered Segmentation, Vezeeta could segment users based on their health conditions, inquiries, and browsing behavior, delivering personalized messages that resonated with each user’s needs.
        </p>
        <br />
        <p>
        cloudcom’s Multi-Channel Campaign Manager allowed Vezeeta to communicate consistently via SMS, email, and WhatsApp, while Flow Builder helped automate personalized campaigns based on user activity—such as sending reminders to users who searched for medication but didn’t complete an order.</p>
      </section>

      <section className="key-implementations">
        <h3>Key Implementations:</h3>
        <p>Customer Data Management: cloudcom’s module enabled Vezeeta to create a 360-degree profile of each user, gaining insights into purchase history, preferences, and inquiries, allowing for personalized, data-driven messaging.</p>
      </section>

      
      <section className="key-implementations">
        <h3>AI-Powered Segmentation: </h3>
        <p>cloudcom helped Vezeeta segment its users dynamically based on their health needs and behavioral data, enabling the delivery of hyper-personalized messages. Omnichannel Communication: Vezeeta used cloudcom’s Multi-Channel Campaign Manager to send cohesive messages across SMS, email, and WhatsApp, ensuring consistent engagement at every touchpoint.</p>
      </section>

      <section className="key-implementations">
        <h3>Omnichannel Campaigns: </h3>
        <p>Vezeeta used cloudcom’s Multi-Channel Campaign Manager to send cohesive messages across SMS, email, and WhatsApp, ensuring consistent engagement at every touchpoint.</p>
      </section>
    </div>
  );
};

export default CaseStudyOverview;
