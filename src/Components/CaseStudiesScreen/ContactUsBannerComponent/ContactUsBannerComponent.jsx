import React from 'react'
import "./ContactUsBannerComponent.css"

const ContactUsBannerComponent = () => {
  return (
    <div className="contactusbanner-section">
        <div className="contactusbanner-content">
        <h1>Contact us to explore <br />tailored solutions for your industry.</h1>
        
        <div className="contactusbanner-buttons">
            <button className="button primary-button">Get Started →</button>
            <button className="button secondary-button">Book a demo →</button>
        </div>
        </div>
  </div>
  )
}

export default ContactUsBannerComponent