import React from "react";
import ClientTestimonialCard from "../ClientTestimonialCardComponent/TestimonialCard";
import "./ClientTestimonials.css";
import img from "../../../Assets/Images/HomeScreen/TestimonialsComponent/Intersect.png"
import SuccessStoriesBanner from "./SuccessStoriesBanner ";

const ClientTestimonialsScreen = () => {

  const testimonials = [
    {
      id: 1,
      name: "Ali Mahmoud",
      job: "Any job",
      image: img, // Replace with actual image URL
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      rating: 4.5, // Star rating out of 5
    },
    {
      id: 2,
      name: "Ali Mahmoud",
      job: "Any job",
      image: img,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Ali Mahmoud",
      job: "Any job",
      image: img,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Ali Mahmoud",
      job: "Any job",
      image: img,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Ali Mahmoud",
      job: "Any job",
      image: img,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Ali Mahmoud",
      job: "Any job",
      image: img,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      rating: 4.5,
    },
    // Add more testimonial data as needed
  ];

  return (
    <div className="testimonials-section">
      <h2 className="testimonials-title">Client Testimonials</h2>
      <h3 className="testimonials-subtitle">What our clients say about us?</h3>
      <p className="testimonials-description">
        Hear from businesses that have transformed their customer engagement with cloudcom.
      </p>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <ClientTestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
      <SuccessStoriesBanner/>
    </div>
  );
};

export default ClientTestimonialsScreen;
