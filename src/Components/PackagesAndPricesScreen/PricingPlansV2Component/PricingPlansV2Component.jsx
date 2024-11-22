import React from 'react'
import "./PricingPlansV2Component.css"

const PackageAndPricingV2 = () => {
  return (
    <div className="contactusbanner-section">
        <div className="contactusbanner-content">
        <h1>Curious to try <br />Join the waiting list </h1>
        <div className='PackageAndPricing-text-container'><p>Learn. Segment. Connect. Engage. Analyze. Support. Your customer.</p></div>
        <div className="contactusbanner-buttons">
            <a style={{textDecoration:"none"}} href="/ContactUs" target="_blank"><button className="banner-button">Get Started ⟶</button></a>
            <a style={{textDecoration:"none"}} href="https://outlook.office365.com/owa/calendar/cloudcomdemocall1@arpuplus.com/bookings/" target="_blank"><button className="banner-button">Book a demo ⟶</button></a>
        </div>
        </div>
  </div>
  )
}

export default PackageAndPricingV2