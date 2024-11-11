import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TestimonialCarousel.css";
import img from "../../../Assets/Images/HomeScreen/TestimonialsComponent/Intersect.png"
import {Pagination } from "swiper/modules";

// Sample testimonials data
const testimonials = [
  {
    image: img, // Replace with actual image URL
    name: "Mustafa Gamal, Marketing Director at Fatura",
    job: "CPaaS – Customer Data Management – WhatsApp Channel",
    rating: 4.5,
    testimonial:
      "cloudcom’s CPaaS platform has transformed the way we manage our customer data at Fatura. The seamless integration with the WhatsApp channel has allowed us to engage our customers in real time, making our communication more personalized and efficient. Their support team is outstanding, and we’ve seen significant improvements in our customer relationships thanks to cloudcom’s solutions.",
  },
  {
    image: img,
    name: "Mohamed Seif, Commercial Director at Redbull Mobile KSA",
    job: "CPaaS – Customer Value Management – SMS Channel",
    rating: 4.5,
    testimonial:
      "Working with CloudCom has been a game-changer for us at Redbull Mobile KSA. Their SMS channel has helped us take our customer value management to the next level. The ability to reach our customers directly and measure engagement has significantly boosted our retention rates. We’re extremely satisfied with the results and the ongoing support from the CloudCom team",
  },
  {
    image: img,
    name: "Mahmoud El Far, CEO at Elfar Market",
    job: "SMS Channel & OTP Verify",
    rating: 4.5,
    testimonial:
      "CloudCom’s SMS and OTP verification solutions have been critical for us at Elfar Market. They’ve enabled us to ensure secure and reliable customer interactions, whether for account verification or promotional messaging. The simplicity and effectiveness of their services have made our processes more efficient, and we couldn’t be happier with the results.",
  },
  // {
  //   image: img,
  //   name: "Ali Mahmoud",
  //   job: "Any job",
  //   rating: 4.5,
  //   testimonial:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore m",
  // },
  // {
  //   image: img,
  //   name: "Ali Mahmoud",
  //   job: "Any job",
  //   rating: 4.5,
  //   testimonial:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore m",
  // },
];

const TestimonialCarousel = () => {
  return (
    <>
    {/* <div style={{marginTop: '5%'}}></div> */}
    <div className="testimonial-carousel">
      <h2 className="carousel-title">Testimonials</h2>
      <p className="carousel-subtitle">We care about our customer experience too</p>
      <div class="line"></div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-wrapper">
              <div className="testimonial-card-home">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <div className="testimonial-content">
                  <p className="testimonial-quote">“{testimonial.testimonial}”</p>
                  <div className="testimonial-info">
                    <strong>{testimonial.name}</strong>
                    <div className="testimonial-rating">
                      {"★".repeat(Math.floor(testimonial.rating))}
                      {"☆".repeat(5 - Math.floor(testimonial.rating))}
                    </div>
                  </div>
                  <span className="testimonial-job">{testimonial.job}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default TestimonialCarousel;
