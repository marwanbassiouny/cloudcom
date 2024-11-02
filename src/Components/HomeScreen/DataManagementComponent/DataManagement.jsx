import React from 'react';
import './DataManagement.css';
import dataManagementImage from '../../../Assets/Icons/HomeScreen/DataManagementComponent/DataManagementImage.svg'; 
import blueElipseIcon from '../../../Assets/Icons/HomeScreen/DataManagementComponent/bluElipse.svg'; 
import whiteElipseIcon from '../../../Assets/Icons/HomeScreen/DataManagementComponent/whiteElipse.svg'; 
import titleIcon from '../../../Assets/Icons/HomeScreen/DataManagementComponent/titleIcon.svg'; 
import textContent from '../../../Assets/Data/HomeScreen/DataManagementComponent/DataManagement.json'
import { Swiper, SwiperSlide } from 'swiper/react';

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
    icon: titleIcon,

  },
  {
    image: dataManagementImage, // Replace with actual image URL
    head: `${textContent.headline2}`,
    paragraph: `${textContent.description2}`,
    icon: titleIcon,

  },
  {
    image: dataManagementImage, // Replace with actual image URL
    head: `${textContent.headline3}`,
    paragraph: `${textContent.description3}`,
    icon: titleIcon,

  },
  {
    image: dataManagementImage, // Replace with actual image URL
    head: `${textContent.headline4}`,
    paragraph: `${textContent.description4}`,
    icon: titleIcon,

  },
  {
    image: dataManagementImage, // Replace with actual image URL
    head: `${textContent.headline5}`,
    paragraph: `${textContent.description5}`,
    icon: titleIcon,

  },
];

const DataManagement = () => {
  return (
    <div className="data-management-container">
      {/* Top Section: Grey Text */}
      <div className="top-section">
        <h1>{textContent.dataManagementService1} · {textContent.dataManagementService2} · {textContent.dataManagementService3} . {textContent.dataManagementService4} . {textContent.dataManagementService5}</h1>
      </div>

    
   <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide>
            <div className="bottom-section" key={index}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DataManagement;
