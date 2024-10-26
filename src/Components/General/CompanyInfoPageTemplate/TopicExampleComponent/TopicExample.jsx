import React from 'react';
import './TopicExample.css';

const TopicExample = ({ examples }) => {
  return (
    <div className="topic-example-container">
      {examples.map((example, index) => (
        <div key={index} className="example-item">
          <img src={example.icon} alt={example.title} />
          <h3>{example.title}</h3>
          <p>{example.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TopicExample;
