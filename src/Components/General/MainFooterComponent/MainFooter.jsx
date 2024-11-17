import React from "react";
import './MainFooter.css'; 
import logo from "../../../Assets/Icons/HomeScreen/MainFooterComponent/cloud.svg"
import arrow from "../../../Assets/Icons/HomeScreen/MainFooterComponent/arrow.svg"
import location from "../../../Assets/Icons/HomeScreen/MainFooterComponent/location.svg"
import phone from "../../../Assets/Icons/HomeScreen/MainFooterComponent/phone.svg"
import email from "../../../Assets/Icons/HomeScreen/MainFooterComponent/email.svg"
import facebook from "../../../Assets/Icons/HomeScreen/MainFooterComponent/facebook.svg"
import linkedin from "../../../Assets/Icons/HomeScreen/MainFooterComponent/linkedin.svg"
import twitter from "../../../Assets/Icons/HomeScreen/MainFooterComponent/twitter.svg"
import youtube from "../../../Assets/Icons/HomeScreen/MainFooterComponent/youtube.svg"
import textContent from '../../../Assets/Data/HomeScreen/MainFooterComponent/MainFooterComponent.json'
import cloudVectorLeft from "../../../Assets/Images/General/Footer/Vector-1.svg"
import cloudVectorRight from "../../../Assets/Images/General/Footer/Vector.svg"

const MainFooter = () => {
  return (
    <footer className="footer page_padding_level_1">
      <div className="footer-content">
        <div className="footer-section ">
            <div className="logo-section">
                <img src={logo} alt="cloudcom logo" className="logo" />
                <p>{textContent.cloud}</p>
            </div>
            <div className="newsletter">
                <p>{textContent.Subscribe }</p>
                <form>
                <input type="email" placeholder="Email" className="email-input" />
                <button type="submit" className="submit-btn"><img src={arrow} alt="cloudcom logo" className="send-icon" /></button>
                </form>
            </div>
        </div>

        {/* <img src={cloudVectorLeft} alt="Cloud Vector Left" className="cloud-vector-left" />
        <img src={cloudVectorRight} alt="Cloud Vector Right" className="cloud-vector-right" /> */}

        <div className="footer-section contact-section">
          <h4>Get in touch</h4>
          <p><img style={{marginRight:"8px",width:"20px"}} src={location} alt="cloudcom logo"/>OSD01-017, DLC-BC-A3- Dubai South</p>
          <p><img style={{marginRight:"8px",width:"20px"}} src={phone} alt="cloudcom logo"/>+971 52 729 5941</p>
          <p><img style={{marginRight:"8px",width:"20px"}} src={email} alt="cloudcom logo"/>{textContent.email}</p>
        </div>

        <div className="footer-section links-section">
          <ul>
            <li><a href="/">{textContent.home}</a></li>
            <li><a href="/whoWeAre">{textContent.Who}</a></li>
            <li><a href="/customerDataManagement">{textContent.OurProduct}</a></li>
            <li><a href="/packagesAndPrices">{textContent.Pricing}</a></li>
            <li><a href="/caseStudies">{textContent.casestudies}</a></li>
          </ul>
        </div>

        <div className="footer-section links-section">
          <ul>
            <li><a href="/ClientTestimonials">{textContent.Testimonials}</a></li>
            <li><a href="/reports">{textContent.Reports}</a></li>
            <li><a href="/newsandarticles">{textContent.News}</a></li>
            <li><a href="/ContactUs">{textContent.Contactus}</a></li>
            <li><a href="https://portal.cloudcom.io/login">{textContent.Signup}</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href='https://www.facebook.com/UseCloudCom' target='_blank'><img style={{marginRight:"8px",width:"25px"}} src={facebook} alt="cloudcom logo"/></a>
          <a href='https://www.linkedin.com/company/usecloudcom/about/' target='_blank'><img style={{marginRight:"8px",width:"25px"}} src={linkedin} alt="cloudcom logo"/></a>
          <a href='https://x.com/UseCloudCom' target='_blank'><img style={{marginRight:"8px",width:"25px"}} src={twitter} alt="cloudcom logo"/></a>
          <a href='https://www.youtube.com/@UseCloudCom' target='_blank'><img style={{marginRight:"8px",width:"25px"}} src={youtube} alt="cloudcom logo"/></a>
        </div>
        <p>© Copyright 2024 - cloudcom</p>
      </div>
    </footer>
  );
};

export default MainFooter;
