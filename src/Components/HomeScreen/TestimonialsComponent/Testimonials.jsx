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
    name: "Ali Mahmoud",
    job: "Any job",
    rating: 4.5,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore m",
  },
  {
    image: img,
    name: "Ali Mahmoud",
    job: "Any job",
    rating: 4.5,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore m",
  },
  {
    image: img,
    name: "Ali Mahmoud",
    job: "Any job",
    rating: 4.5,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore m",
  },
  {
    image: img,
    name: "Ali Mahmoud",
    job: "Any job",
    rating: 4.5,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore m",
  },
  {
    image: img,
    name: "Ali Mahmoud",
    job: "Any job",
    rating: 4.5,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore m",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="testimonial-carousel">
      <h2 className="carousel-title">Testimonials</h2>
      <p className="carousel-subtitle">We care about our customer experience too</p>
      <div class="line"></div>
      <Swiper
        modules={[Pagination]} // Use imported modules here
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
  );
};

export default TestimonialCarousel;
