import React, { useState } from "react";
import FAQItem from "./FAQItem";
import "./FaqsComponent.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-header">
        <h2>F.A.Q s</h2>
        <h1>Do You Have Questions?</h1>
      </div>
      <div className="faq-list">
        <div className="faq-column">
          <FAQItem
            question="CPaaS Stands for?"
            answer={
              <ul>
                <li>
                  CPaaS is a cloud-based platform, which enables businesses to build realtime communications via multiple channels on their applications for end-consumers without building a backend infrastructure.
                </li>
              </ul>
            }
            isOpen={activeIndex === 0}
            onClick={() => toggleFAQ(0)}
          />
          <FAQItem
            question="How can cloudcom help me?"
            answer={<p>Increase customer engagement, speed up personalized communication, decrease operational cost.
                Make better business decision through all-in-one platform</p>}
            isOpen={activeIndex === 2}
            onClick={() => toggleFAQ(2)}
          />
        </div>
        <div className="faq-column">
          <FAQItem
            question="Do you have Two-way messaging?"
            answer={
              <ul>
                <li>
                Yes, two-way messaging is part of our platform over SMS, WhatsApp, Instagram and Messenger.
                </li>
              </ul>
            }
            isOpen={activeIndex === 1}
            onClick={() => toggleFAQ(1)}
          />
          <FAQItem
            question="Can the cloudcom be customized for my business needs?"
            answer={<p>Yes, our platform is highly customizable; you'll have the ability to configure workflows, templates, and messaging strategies based on your business needs.</p>}
            isOpen={activeIndex === 3}
            onClick={() => toggleFAQ(3)}
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
