import React from 'react';
import './BlogIntro.css';

import FacebookIcon from '../../../Assets/Icons/BlogSingleScreen/facebook.svg';
import LinkedinIcon from '../../../Assets/Icons/BlogSingleScreen/linkedin.svg';
import TwitterIcon from '../../../Assets/Icons/BlogSingleScreen/twitter.svg';
import EmailIcon from '../../../Assets/Icons/BlogSingleScreen/email.svg';
import IntroImage from '../../../Assets/Images/BlogSingleScreen/blog1.svg';

const BlogIntro = () => {
    return (
        <div className="blog-intro">
            <h1 className="blog-intro-title">Insights, trends, and tips to elevate your business communication.</h1>
            <div className="blog-intro-share">
                <span>Share: </span>
                <img src={FacebookIcon} alt="Facebook" className="share-icon" />
                <img src={LinkedinIcon} alt="LinkedIn" className="share-icon" />
                <img src={TwitterIcon} alt="Twitter" className="share-icon" />
                <img src={EmailIcon} alt="Email" className="share-icon" />
            </div>
            <div className="blog-intro-image">
                <img 
                    src={IntroImage} 
                    alt="Business Insights" 
                />
            </div>
        </div>
    );
};

export default BlogIntro;