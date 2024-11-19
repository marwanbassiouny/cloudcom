import React from 'react';
import './TopicExample.css';

const isOddNumber = (num) => num % 2 !== 0;

const TopicExample = ({ examples }) => {
  let counter = 0;

  return (
    <div className="topic-example-container ">
      {examples.map((example) => {
        ++counter;
        const isOdd = isOddNumber(counter);
        const shouldShowImage = example.isIcon; // Check based on each example item

        return (
          <div key={counter} className={`page_padding_level_1 example-item ${!isOdd ? 'example-item-reverse' : ''}`}>
            {isOdd ? (
              <>
                <div className="example-icon">
                  {shouldShowImage ? (
                    <img src={example.animation} alt={example.title} />
                  ) : (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="topicDataAnimation"
                    >
                      <source src={example.animation} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
                <div className="examplePage-text">
                  <h1>{example.title}</h1>
                  <p className="page_context_font_size_0">{example.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="example-text">
                  <h1>{example.title}</h1>
                  <p className="page_context_font_size_0">{example.description}</p>
                </div>
                <div className="example-icon">
                  {shouldShowImage ? (
                    <img src={example.animation} alt={example.title} />
                  ) : (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="topicDataAnimation"
                    >
                      <source src={example.animation} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
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
