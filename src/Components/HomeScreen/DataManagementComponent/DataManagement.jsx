import React from 'react';
import './DataManagement.css';
import dataManagementImage from '../../../Assets/Icons/HomeScreen/DataManagementComponent/DataManagementImage.svg';
import MultiChannelCampaignIcon from '../../../Assets/Icons/MultiChannelCampaignManagerScreen/MultiChannelCampaignIcon.svg'; 
import AiPowered from '../../../Assets/Icons/AIPoweredSegmantationScreen/AIPoweredSegmantaionScreen.svg'; 
import ChatManagement from '../../../Assets/Icons/ChatManagementScreen/ChatManagementIcon.svg';  
import Verify from '../../../Assets/Icons/VerifyScreen/verifyScreen.svg'; 
import workflow from '../../../Assets/Icons/FlowBuilderScreen/flowBuilderIcon.svg'; 

import blueElipseIcon from '../../../Assets/Icons/HomeScreen/DataManagementComponent/bluElipse.svg'; 
import whiteElipseIcon from '../../../Assets/Icons/HomeScreen/DataManagementComponent/whiteElipse.svg'; 
import titleIcon from '../../../Assets/Icons/HomeScreen/DataManagementComponent/titleIcon.svg'; 
import textContent from '../../../Assets/Data/HomeScreen/DataManagementComponent/DataManagement.json'
import { Swiper, SwiperSlide } from 'swiper/react';

import titleIcon1 from '../../../Assets/Icons/HomeScreen/DataManagementComponent/titleIcon1.svg'; 
import titleIcon2 from '../../../Assets/Icons/HomeScreen/DataManagementComponent/titleIcon2.svg'; 
import titleIcon3 from '../../../Assets/Icons/HomeScreen/DataManagementComponent/titleIcon3.svg'; 
import titleIcon4 from '../../../Assets/Icons/HomeScreen/DataManagementComponent/titleIcon4.svg'; 
import titleIcon5 from '../../../Assets/Icons/HomeScreen/DataManagementComponent/titleIcon5.svg'; 
import titleIcon6 from '../../../Assets/Icons/HomeScreen/DataManagementComponent/titleIcon6.svg'; 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Autoplay,EffectFade, Navigation, Pagination } from 'swiper/modules';

const cards = [
  {
    image: dataManagementImage, // Replace with actual image URL
    head: `${textContent.headline1}`,
    paragraph:`${textContent.description1}` ,
    icon: titleIcon1,

  },
  {
    image: MultiChannelCampaignIcon, // Replace with actual image URL
    head: `${textContent.headline2}`,
    paragraph: `${textContent.description2}`,
    icon: titleIcon2,

  },
  {
    image: AiPowered, // Replace with actual image URL
    head: `${textContent.headline3}`,
    paragraph: `${textContent.description3}`,
    icon: titleIcon3,

  },
  {
    image: ChatManagement, // Replace with actual image URL
    head: `${textContent.headline4}`,
    paragraph: `${textContent.description4}`,
    icon: titleIcon4,

  },
  {
    image: Verify, // Replace with actual image URL
    head: `${textContent.headline5}`,
    paragraph: `${textContent.description5}`,
    icon: titleIcon5,

  },
  {
    image: workflow, // Replace with actual image URL
    head: `${textContent.headline6}`,
    paragraph: `${textContent.description6}`,
    icon: titleIcon6,

  },
];

const DataManagement = () => {
  return (
    <div className="data-management-container">
      {/* Top Section: Grey Text */}
      <div className="top-section">
        <div className="scrolling-text">
          <h1>
            {textContent.dataManagementService1}  {textContent.dataManagementService2}  {textContent.dataManagementService3}  {textContent.dataManagementService4}  {textContent.dataManagementService5}  {textContent.dataManagementService6}
          </h1>
        </div>
      </div>
      <div className="data-management-scroll-container  page_padding_level_1">
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          modules={[Autoplay,EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <>   
                <div className="bottom-section">
                  {/* Left Section: Title and Description */}
                  <div className="data-left-section">
                    <img src={card.icon} className=""/>
                    <h2>{card.head}</h2>
                    <p>{card.paragraph}</p>
                    <a href="/customerDataManagement" className="data-explore-btn explore-btn-glow" target='_blank'>Explore →</a>
                  </div>

                  {/* Middle Section: Image */}
                  <div className="middle-section">
                    <img src={card.image} alt="Customer Data Management" />
                  </div>

                  {/* Right Section: Ellipses */}
                  {/* <div className="right-section">
                    <img src={blueElipseIcon} className="ellipse"/>
                    <img src={whiteElipseIcon} className="ellipse"/>
                    <img src={whiteElipseIcon} className="ellipse"/>
                    <img src={whiteElipseIcon} className="ellipse"/>
                    <img src={whiteElipseIcon} className="ellipse"/>
                  </div> */}
                </div>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DataManagement;
