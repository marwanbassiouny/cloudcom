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
            question="How can I access cloudcom capabilities?"
            answer={
              <ul>
                <li>
                  Contact us, choose your plan, then create your account on
                  cloudcom.io/login
                </li>
                <li>Sync customer attributes and start engaging.</li>
              </ul>
            }
            isOpen={activeIndex === 0}
            onClick={() => toggleFAQ(0)}
          />
          <FAQItem
            question="CPaaS Stands For?"
            answer={<p>Communication Platform As A Service</p>}
            isOpen={activeIndex === 2}
            onClick={() => toggleFAQ(2)}
          />
        </div>
        <div className="faq-column">
          <FAQItem
            question="How Can cloudcom Help Me?"
            answer={
              <ul>
                <li>
                  Build fast customer communication across channels (SMS, Email,
                  etc.).
                </li>
                <li>Make better business decisions through all-in-one platform.</li>
              </ul>
            }
            isOpen={activeIndex === 1}
            onClick={() => toggleFAQ(1)}
          />
          <FAQItem
            question="How can I access cloudcom capabilities?"
            answer={<p>Communication Platform As A Service</p>}
            isOpen={activeIndex === 3}
            onClick={() => toggleFAQ(3)}
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
