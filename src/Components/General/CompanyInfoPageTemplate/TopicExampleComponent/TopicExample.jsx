import React from 'react';
import './TopicExample.css';


const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const TopicExample = ({ examples }) => {
  let counter = 0; 

  return (
    <div className="topic-example-container">
      {examples.map((example) => {
        ++counter; 
        return (
          <div key={counter} className="example-item">
            {!isPrime(counter) ? (
              <>
                <div className="example-icon">
                  <img src={example.icon} alt={example.title} />
                </div>
                <div className="example-text">
                  <h1>{example.title}</h1>
                  <p>{example.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="example-text">
                  <h1>{example.title}</h1>
                  <p>{example.description}</p>
                </div>
                <div className="example-icon">
                  <img src={example.icon} alt={example.title} />
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TopicExample;
