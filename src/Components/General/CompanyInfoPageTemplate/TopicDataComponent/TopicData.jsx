import React from 'react';
import './TopicData.css';

const TopicData = ({ title, description, image }) => {
  return (
    <div className="topic-data-container page_padding_level_1">
      <div className="topic-data-page-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="topic-data-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default TopicData;
