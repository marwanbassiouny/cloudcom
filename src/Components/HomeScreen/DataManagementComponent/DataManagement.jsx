import React from 'react';
import './DataManagement.css';
import customerDataManagementAnimation from '../../../Assets/Icons/HomeScreen/DataManagementComponent/customerDataManagementAnimation.mp4';
import MultiChannelCampaignAnimation from '../../../Assets/Icons/HomeScreen/DataManagementComponent/MultiChannelCampaignAnimation.mp4'; 
import AiPoweredAnimation from '../../../Assets/Icons/HomeScreen/DataManagementComponent/AiPoweredAnimation.mp4'; 
import ChatManagementAnimation from '../../../Assets/Icons/HomeScreen/DataManagementComponent/ChatManagementAnimation.mp4';  
import VerifyAnimation from '../../../Assets/Icons/HomeScreen/DataManagementComponent/VerifyAnimation.mp4'; 
import flowBuilderAnimation from '../../../Assets/Icons/HomeScreen/DataManagementComponent/flowBuilderAnimation.mp4'; 
import textContent from '../../../Assets/Data/HomeScreen/DataManagementComponent/DataManagement.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import titleIcon1 from '../../../Assets/Icons/HomeScreen/DataManagementComponent/titleIcon1.svg'; 
import titleIcon2 from '../../../Assets/Icons/HomeScreen/DataManagementComponent/titleIcon2.svg'; 
import titleIcon3 from '../../../Assets/Icons/HomeScreen/DataManagementComponent/titleIcon3.svg'; 
import titleIcon4 from '../../../Assets/Icons/HomeScreen/DataManagementComponent/titleIcon4.svg'; 
import titleIcon5 from '../../../Assets/Icons/HomeScreen/DataManagementComponent/titleIcon5.svg'; 
import titleIcon6 from '../../../Assets/Icons/HomeScreen/DataManagementComponent/titleIcon6.svg'; 
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const cards = [
  {
    animation: customerDataManagementAnimation,
    head: `${textContent.headline1}`,
    paragraph: `${textContent.description1}`,
    icon: titleIcon1,
    link : '/customerDataManagement'
  },
  {
    animation: MultiChannelCampaignAnimation,
    head: `${textContent.headline2}`,
    paragraph: `${textContent.description2}`,
    icon: titleIcon2,
    link : '/multiChannelCampaignManager'
  },
  {
    animation: AiPoweredAnimation,
    head: `${textContent.headline3}`,
    paragraph: `${textContent.description3}`,
    icon: titleIcon3,
    link : '/AIPoweredSegmantation'
  },
  {
    animation: ChatManagementAnimation,
    head: `${textContent.headline4}`,
    paragraph: `${textContent.description4}`,
    icon: titleIcon4,
    link : '/chatManagement'
  },
  {
    animation: VerifyAnimation,
    head: `${textContent.headline5}`,
    paragraph: `${textContent.description5}`,
    icon: titleIcon5,
    link : '/verify'
  },
  {
    animation: flowBuilderAnimation,
    head: `${textContent.headline6}`,
    paragraph: `${textContent.description6}`,
    icon: titleIcon6,
    link : '/flowBuilder'
  },
];

const DataManagement = () => {
  return (
    <div className="data-management-container">
      <div className="top-section">
        <div className="scrolling-text">
          <h1>
            {textContent.dataManagementService1} <span> · </span> {textContent.dataManagementService2} <span> · </span> {textContent.dataManagementService3} <span> · </span> {textContent.dataManagementService4} <span> · </span> {textContent.dataManagementService5} <span> · </span> {textContent.dataManagementService6} 
          </h1>
          <h1> {/* Duplicate for seamless scrolling */}
          {textContent.dataManagementService1} <span> · </span> {textContent.dataManagementService2} <span> · </span> {textContent.dataManagementService3} <span> · </span> {textContent.dataManagementService4} <span> · </span> {textContent.dataManagementService5} <span> · </span> {textContent.dataManagementService6} 
          </h1>
        </div>
      </div>
      <div className="data-management-scroll-container page_padding_level_1">
          <div className="bottom-section">
            <Swiper
              spaceBetween={30}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              modules={[Autoplay, EffectFade, Navigation, Pagination]}
              className="mySwiper"
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <>
                  <div className='bottom-section-container'>
                    <div className="data-left-section">
                      <div className='icon_container'>
                        <img src={card.icon} alt="" className='dm_title_icon' />
                        <h3 className='cardHead_title'>{card.head}</h3>
                      </div>
                      <p className='cardParagraph'>{card.paragraph}</p>
                      <a href={card.link} className="data-explore-btn explore-btn-glow" target="_blank" rel="noopener noreferrer">Explore →</a>
                    </div>
                    <div className="middle-section">
                      {/* <img src={card.animation} alt="Customer Data Management" className='dm_icon' /> */}
                      <video   
                        autoPlay
                        loop
                        muted
                        playsInline 
                        className='dataIconAnimation dm_icon'>
                          <source src={card.animation} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                  </div>
                  </>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
      </div>
    </div>
  );
};

export default DataManagement;
