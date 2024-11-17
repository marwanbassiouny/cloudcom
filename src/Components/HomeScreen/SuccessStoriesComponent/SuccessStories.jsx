import React, { useRef, useEffect, useState } from 'react';
import './SuccessStories.css';
import successStoriesImage from '../../../Assets/Images/HomeScreen/SuccessStoriesComponent/SuccessStoriesImage.svg'; 
import successStoriesIcon from '../../../Assets/Icons/HomeScreen/SuccessStoriesComponent/SuccessStoriesIcon.svg'; 
import CloudComButton from '../../General/CloudComButton/CloudComButton';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay} from 'swiper/modules';
import { caseStudiesData } from '../../CaseStudiesScreen/CaseStudyData';

const SuccessStories = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const limitedCaseStudies = caseStudiesData.slice(0, 3);

  return (
    <div className="success-stories-container">
       <h2>Discover the Success Stories</h2>
      <p className="success-stories-description">
        See how businesses across various industries have transformed their customer engagement with cloudcom’s solutions.
        From increasing retention to driving growth, explore real-world results that highlight the power of personalized,
        omni-channel communication.
      </p>
      <Swiper        
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        slidesPerView={1}
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{
              delay: 2500,
              disableOnInteraction: false,
        }}
        loop={true}
        // className="mySwiper"

      >
        {caseStudiesData.slice(0, 3).map((casestudy, index) => (
          <SwiperSlide key={index}>
                <div className="story-section">
                  <div className="story-image">
                    <img src={successStoriesImage} alt="Gourmet Egypt Store" />
                  </div>

                  <div className="story-content">
                    <img src={casestudy.companyLogo} alt="Gourmet Egypt Logo" className="logo-image" />
                    <h3>{casestudy.title}</h3>
                    <p>{casestudy.description}</p>
                    <div className="stats">
                      <div className="stat-item stat-item-right">
                        <h5>{casestudy.stats[0].value}</h5>
                        <p className='stat-text'>{casestudy.stats[0].label}</p>
                      </div>
                      {/* <div className="stat-item middle-item stat-item-right n-stat-item">
                        <h5>{casestudy.stats[1].value}</h5>
                        <p className='stat-text'>{casestudy.stats[1].label}</p>
                      </div> */}
                      <div className="stat-item n-stat-item">
                        <h5>{casestudy.stats[1].value}</h5>
                        <p className='stat-text'>{casestudy.stats[1].label}</p>
                      </div>
                    </div>
                    <CloudComButton text="Explore" link="/innerCaseStudy" glow='glow' width='183' height='48' />
                  </div>
                  
                  <div className="home-nav-dots">
                  {caseStudiesData.slice(0, 3).map((_, dotIndex) => (
                    <span
                      key={dotIndex}
                      className={`dot ${activeIndex === dotIndex ? 'active' : ''}`}
                      onClick={() => {
                        if (swiperRef.current) {
                          swiperRef.current.slideTo(dotIndex); // Ensure swiperRef is not null before calling slideTo
                        }
                      }}
                    ></span>
                  ))}
                </div>
                </div>
              
              </SwiperSlide>
            ))}
          </Swiper>

     
    </div>  
  );
};

export default SuccessStories;
