import React from 'react';
import './TopicIntro.css';

const TopicIntro = ({ backgroundImage, title, breadcrumb }) => {
  return (
    <div
      className="topic-intro-container page_padding_level_1"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1>{title}</h1>
      <p>{breadcrumb}</p>
    </div>
  );
};

export default TopicIntro;
