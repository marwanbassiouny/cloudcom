import React from "react";
import "./NewsAndArticlesHeader.css";
import img from "../../../Assets/Images/NewsAndArticlesScreen/search.png"  

const NewsAndArticlesHeader = () => {
  return (
    <div className="news-articles-container">
      <h2 className="news-title">News & Articles</h2>
      <div className="search-bar-container">
        <img
          src={img}
          alt="Search Icon"
          className="search-icon-image"
        />
        <input
          type="text"
          className="search-input"
          placeholder="Search Blog Posts"
        />
      </div>
    </div>
  );
};

export default NewsAndArticlesHeader;
