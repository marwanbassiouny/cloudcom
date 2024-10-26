import React from 'react';
import './TopicExample.css';

const TopicExample = ({ examples }) => {
  return (
    <div className="topic-example-container">
      {examples.map((example, index) => (
        <div key={index} className="example-item">
          <div className="example-text">
            <h3>{example.title}</h3>
            <p>{example.description}</p>
          </div>
          <div className="example-icon">
            <img src={example.icon} alt={example.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicExample;
