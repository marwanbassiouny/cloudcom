import React from "react";
import ClientTestimonialCard from "../ClientTestimonialCardComponent/TestimonialCard";
import "./ClientTestimonials.css";
import img from "../../../Assets/Images/HomeScreen/TestimonialsComponent/Intersect.png"
import SuccessStoriesBanner from "../../General/SuccessStoriesBanner/SuccessStoriesBanner "

const ClientTestimonialsScreen = () => {

  const testimonials = [
    {
      id: 1,
      name: "Mustafa Gamal, Marketing Director at Fatura",
      job: "CPaaS – Customer Data Management – WhatsApp Channel",
      image: img, // Replace with actual image URL
      review:
        "cloudcom’s CPaaS platform has transformed the way we manage our customer data at Fatura. The seamless integration with the WhatsApp channel has allowed us to engage our customers in real time, making our communication more personalized and efficient. Their support team is outstanding, and we’ve seen significant improvements in our customer relationships thanks to cloudcom’s solutions.",
      rating: 5, // Star rating out of 5
    },
    {
      id: 2,
      name: "Mohamed Seif, Commercial Director at Redbull Mobile KSA",
      job: "CPaaS – Customer Value Management – SMS Channel",
      image: img,
      review:
        "Working with CloudCom has been a game-changer for us at Redbull Mobile KSA. Their SMS channel has helped us take our customer value management to the next level. The ability to reach our customers directly and measure engagement has significantly boosted our retention rates. We’re extremely satisfied with the results and the ongoing support from the CloudCom team",
      rating: 5,
    },
    {
      id: 3,
      name: "Mahmoud El Far, CEO at Elfar Market",
      job: "SMS Channel & OTP Verify",
      image: img,
      review:
        "CloudCom’s SMS and OTP verification solutions have been critical for us at Elfar Market. They’ve enabled us to ensure secure and reliable customer interactions, whether for account verification or promotional messaging. The simplicity and effectiveness of their services have made our processes more efficient, and we couldn’t be happier with the results.",
      rating: 5,
    },
    {
      id: 4,
      name: "Mustafa Gamal, Marketing Director at Fatura",
      job: "CPaaS – Customer Data Management – WhatsApp Channel",
      image: img, // Replace with actual image URL
      review:
        "cloudcom’s CPaaS platform has transformed the way we manage our customer data at Fatura. The seamless integration with the WhatsApp channel has allowed us to engage our customers in real time, making our communication more personalized and efficient. Their support team is outstanding, and we’ve seen significant improvements in our customer relationships thanks to cloudcom’s solutions.",
      rating: 5, // Star rating out of 5
    },
    {
      id: 5,
      name: "Mohamed Seif, Commercial Director at Redbull Mobile KSA",
      job: "CPaaS – Customer Value Management – SMS Channel",
      image: img,
      review:
        "Working with CloudCom has been a game-changer for us at Redbull Mobile KSA. Their SMS channel has helped us take our customer value management to the next level. The ability to reach our customers directly and measure engagement has significantly boosted our retention rates. We’re extremely satisfied with the results and the ongoing support from the CloudCom team",
      rating: 5,
    },
    {
      id: 6,
      name: "Mahmoud El Far, CEO at Elfar Market",
      job: "SMS Channel & OTP Verify",
      image: img,
      review:
        "CloudCom’s SMS and OTP verification solutions have been critical for us at Elfar Market. They’ve enabled us to ensure secure and reliable customer interactions, whether for account verification or promotional messaging. The simplicity and effectiveness of their services have made our processes more efficient, and we couldn’t be happier with the results.",
      rating: 5,
    },
  ];

  return (
    <div>
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
      </div>
      <SuccessStoriesBanner/>
    </div>

  );
};

export default ClientTestimonialsScreen;
