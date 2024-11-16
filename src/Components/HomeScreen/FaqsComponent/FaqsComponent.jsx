import React, { useState } from "react";
import FAQItem from "./FAQItem"; 
import "./FaqsComponent.css";

const FAQSection = () => {
  // State to track which FAQ item is open (null if none are open)
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle toggling of FAQ items
  const toggleFAQ = (index) => {
    // If clicked item is already open, close it. Otherwise, open the clicked item.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-header">
        <h2>F.A.Q s</h2>
        <h1>Do You Have Questions?</h1>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi.
        </p> */}
      </div>
      <div className="faq-list">
        <FAQItem
          question="How can I access cloudcom capabilities?"
          answer={
            <ul>
              <li>Contact us, choose your plan, then create your account on cloudcom.io/login</li>
              <li>Sync customer attributes and start engaging.</li>
            </ul>
          }
          isOpen={activeIndex === 0} // Check if this item is open
          onClick={() => toggleFAQ(0)} // Toggle this item on click
        />
        <FAQItem
          question="How Can cloudcom Help Me?"
          answer={
            <ul>
              <li>Build fast customer communication across channels (SMS, Email, etc.).</li>
              <li>Make better business decisions through all-in-one platform.</li>
            </ul>
          }
          isOpen={activeIndex === 1} // Check if this item is open
          onClick={() => toggleFAQ(1)} // Toggle this item on click
        />
        </div>
        <div className="faq-list">
        <FAQItem
          question="CPaaS Stands For?"
          answer={<p>Communication Platform As A Service</p>}
          isOpen={activeIndex === 2} // Check if this item is open
          onClick={() => toggleFAQ(2)} // Toggle this item on click
        />
         <FAQItem
          question="How can i access cloudcom capabilities ?"
          answer={<p>Communication Platform As A Service</p>}
          isOpen={activeIndex === 3} // Check if this item is open
          onClick={() => toggleFAQ(3)} // Toggle this item on click
        />
      </div>
    </div>
  );
};

export default FAQSection;
