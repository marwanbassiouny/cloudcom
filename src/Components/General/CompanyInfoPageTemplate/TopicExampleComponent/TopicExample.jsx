import React from 'react';
import './TopicExample.css';

const isOddNumber = (num) => num % 2 !== 0;

const TopicExample = ({ examples }) => {
  let counter = 0;

  return (
    <div className="topic-example-container page_padding_level_1">
      {examples.map((example) => {
        ++counter;
        return (
          <div key={counter} className={`example-item ${!isOddNumber(counter) ? 'example-item-reverse' : ''}`}>
            {isOddNumber(counter) ? (
              <>
                <div className="example-icon">
                  <img src={example.icon} alt={example.title} />
                </div>
                <div className="examplePage-text">
                  <h1>{example.title}</h1>
                  <p className='page_context_font_size_0'>{example.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="example-text">
                  <h1>{example.title}</h1>
                  <p className='page_context_font_size_0'>{example.description}</p>
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
