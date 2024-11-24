import {React,useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import "./WhyCloud.css";
import img from "../../../Assets/Images/HomeScreen/WhyCloud/coding.png"
import img2 from "../../../Assets/Images/HomeScreen/WhyCloud/coding Vector.svg"
import img3 from "../../../Assets/Images/HomeScreen/WhyCloud/channel.png"
import img4 from "../../../Assets/Images/HomeScreen/WhyCloud/channel Vector.svg"
import img5 from "../../../Assets/Images/HomeScreen/WhyCloud/security.png"
import img6 from "../../../Assets/Images/HomeScreen/WhyCloud/security Vector.svg"
import img7 from "../../../Assets/Images/HomeScreen/WhyCloud/Scalability.png"
import img8 from "../../../Assets/Images/HomeScreen/WhyCloud/Scalability Vector.svg"
import img9 from "../../../Assets/Images/HomeScreen/WhyCloud/integration.png"
import img10 from "../../../Assets/Images/HomeScreen/WhyCloud/integration Vector.svg"

const cards = [
  {
    id: 1,
    title: "No coding required",
    description: "Customize your communication workflows effortlessly with no coding.",
    image: img,
    icon:img2,
  },
  {
    id: 2,
    title: "Channel integrations and custom branding",
    description: "Personalize every customer touchpoint for a cohesive brand experience.",
    image: img3,
    icon:img4,
  },
  {
    id: 3,
    title: "Secure & Compliant",
    description: "Focus on delivering great experiences while cloudcom ensures compliance and data security.",
    image: img5,
    icon:img6,
  },
  {
    id: 4,
    title: "Built for Scalability",
    description: "zero downtime as cloudcom’s infrastructure seamlessly scales to handle growing demands and sudden traffic surges.",
    image: img7,
    icon:img8,
  },
  {
    id:5,
    title: "Flexible Integration",
    description: "Easily connect with multiple data sources through APIs, SDKs, Webhooks, Databases, and more, ensuring your systems work together seamlessly.",
    image: img9,
    icon:img10,
  },
  
];

const WhyCloud = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(window.innerWidth);

  return (
    <div className="why-cloudcom-section page_vertical_padding_level_0">
      <h2 className="why-cloudcom-section-title">Why cloudcom?</h2>
      <p className="why-cloudcom-section-subtitle">
        An all-in-one platform for a fully customized, omnichannel experience, offering seamless integration.
      </p>
      {/* <div class="line"></div> */}
      <div class="clients-section-line"></div>
      <Swiper
            
            slidesPerView={2.1} 
            slidesPerGroup={1}
            // centeredSlides= {true}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay,Pagination]}
            pagination={{
              clickable: true,
              type: 'bullets',
              renderBullet: (index, className) => {
                return `<span class="${className}">${index + 1}</span>`; // Add numbers inside bullets
              }
            }}
            className="mySwiper whyCloudSwiper"
            
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 1.7,
              },
              1024: {
                slidesPerView: 2.2,
              },
              1441: {
                slidesPerView: 3.1,
              },
            }}
        >
            {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className={`whycloud-card ${activeIndex === index ? 'active' : 'inactive'}`}>
                    {/* Left Section: Title and Description */}
                    <div className="whycloud-card-content">
                    {activeIndex !== index && (
                      <div className="whycloud-card-icon">
                        <img src={card.icon} alt="Card Icon" className="whycloud-card-icon-img" loading="lazy"/>
                      </div>
                    )}
                      <h2 className="whycloud-card-title">{card.title}</h2>
                      <p className="whycloud-card-details">{card.description}</p>
                      <div className={`whycloud-card-image-wrapper ${activeIndex === index ? 'active' : ''}`}>
                        <img src={card.image} alt="Customer Data Management" className="whycloud-card-image" loading="lazy"/>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
};

export default WhyCloud;
