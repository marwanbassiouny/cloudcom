import {React,useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./WhyCloud.css";
import img from "../../../Assets/Images/HomeScreen/WhyCloud/1.png"
const cards = [
  {
    title: "No coding required",
    description: "Customize your communication workflows effortlessly with no coding.",
    image: img
  },
  {
    title: "Channel integrations and custom branding",
    description: "Personalize every customer touchpoint for a cohesive brand experience.",
    image: img
  },
  {
    title: "Secure & Compliant",
    description: "Focus on delivering great experiences while cloudcom ensures compliance and data security.",
    image: img
  },
  
];

const WhyCloud = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="why-cloudcom-section">
      <h2 className="why-cloudcom-section-title">Why cloudcom?</h2>
      <p className="why-cloudcom-section-subtitle">
        An all-in-one platform for a fully customized, omnichannel experience, offering seamless integration.
      </p>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={2} // Show 2 cards per view
        spaceBetween={30} // Space between cards
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Track active index
        className="swiper-container-custom"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className={`card ${index === activeIndex || index === activeIndex  ? "card-active" : "card-inactive"}`}>
              {/* Full View for the Active Card */}
              {index === activeIndex ? (
                <>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <img src={card.image} alt={card.title} className="card-image" />
                </>
              ) : (
                // Minimized View for Inactive Cards
                <>
                  <h3 className="card-title minimized-title">{card.title}</h3>
                  <p className="card-description minimized-description">{card.description}</p>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WhyCloud;
