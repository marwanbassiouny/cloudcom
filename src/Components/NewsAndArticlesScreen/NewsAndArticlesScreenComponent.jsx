import React from 'react'
import NewsAndArticlesHeader from './NewsAndArticlesHeader/NewsAndArticlesHeader'
import { newsArticles } from './NewsAndArticlesData';
import NewsAndArticlesCard from './NewsAndArticlesCard/NewsAndArticlesCard';
import "./NewsAndArticlesScreenComponent.css"
import StayInTheKnow from '../General/StayInTheKnowComponent/StayInTheKnow';

const NewsAndArticlesScreenComponent = () => {
  return (
    <div>
       <NewsAndArticlesHeader/> 
        <div className="news-grid-container">
        {newsArticles.map((article, index) => (
          <NewsAndArticlesCard
            key={article.id}
            image={article.image}
            title={article.title}
            description={article.description}
            buttonLabel={article.buttonLabel}
            size={index % 5 < 3 ? 'small' : 'large'} 
          />
        ))}
      </div>
      <StayInTheKnow />
    </div>
  )
}

export default NewsAndArticlesScreenComponent