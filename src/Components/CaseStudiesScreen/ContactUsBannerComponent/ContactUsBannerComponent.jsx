import React from 'react'
import "./ContactUsBannerComponent.css"

const ContactUsBannerComponent = () => {
  return (
    <div className="contactusbanner-section">
        <div className="contactusbanner-content">
        <h1>Contact us to explore <br />tailored solutions for <br /> your industry.</h1>
        
        <div className="contactusbanner-buttons">
            <a style={{textDecoration:"none"}} href="/ContactUs" target="_blank"><button className="banner-button">Get Started →</button></a>
            <a style={{textDecoration:"none"}} href="https://portal.cloudcom.io/login" target="_blank"><button className="banner-button">Book a demo →</button></a>
        </div>
        </div>
  </div>
  )
}

export default ContactUsBannerComponent