import React from 'react'
import  "./TestimonialCard.css"

const ClientTestimonialCard = ({ image, name, job, review, rating }) => {
  return (
    <div>
      <div className="testimonial-card">
        <img src={image} alt={name} className="testimonial-image" />
        <div className="testimonial-content">
            <p className="testimonial-quote">“{review}”</p>
            <div className="testimonial-info">
            <strong>{name}</strong>
            <div className="testimonial-rating">
                {"★".repeat(Math.floor(rating))}
                {"☆".repeat(5 - Math.floor(rating))}
            </div>
            </div>
            <span className="testimonial-job">{job}</span>
        </div>
      </div>
  </div>
  )
};
export default ClientTestimonialCard;
