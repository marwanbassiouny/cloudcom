import React from 'react';
import './TopicData.css';

const TopicData = ({ title, description, animation, isIcon }) => {
  return (
    <div className="topic-data-container page_padding_level_1">
      <div className="topic-data-page-text">
        <h2>{title}</h2>
        <p className='page_context_font_size_0'>{description}</p>
      </div>
      <div className="topic-data-image">
           {/* <img src={image} alt={title} className='topicDataAnimation'/> */}
          <video   
          autoPlay
          loop
          muted
          playsInline 
          className='topicDataAnimation'>
            <source src={animation} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
      </div>
    </div>
  );
};

export default TopicData;
