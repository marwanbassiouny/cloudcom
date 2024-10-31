import React from 'react'
import './NewsAndArticlesCard.css';

const NewsAndArticlesCard = ({ image, title, description, buttonLabel, size }) => {
  return (
    <div className={`news-card ${size === 'large' ? 'news-card-large' : ''}`}>
      <img src={image} alt={title} className="news-card-image" />
      <div className="news-card-content">
        <h3 className="news-card-title">{title}</h3>
        <p className="news-card-description">{description}</p>
        <a href="/blog" className="news-card-button">{buttonLabel}</a>
      </div>
    </div>
  );
};

export default NewsAndArticlesCard