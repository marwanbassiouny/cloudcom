import React from "react";
import "./FaqsComponent.css";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`} onClick={onClick}>
      <div className="faq-question">
        <h3>{question}</h3>
        <span className="toggle-icon">{isOpen ? "▲" : "▼"}</span>
      </div>
      {/* Render answer only if isOpen is true */}
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default FAQItem;
