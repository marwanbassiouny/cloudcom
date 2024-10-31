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

const MainFooter = () => {
  return (
    <footer className="footer">
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

        <div className="footer-section contact-section">
          <p>Get in touch</p>
          <p><img style={{marginRight:"8px",width:"20px"}} src={location} alt="cloudcom logo"/>{textContent.address}</p>
          <p><img style={{marginRight:"8px",width:"20px"}} src={phone} alt="cloudcom logo"/>{textContent.number}</p>
          <p><img style={{marginRight:"8px",width:"20px"}} src={email} alt="cloudcom logo"/>{textContent.email}</p>
        </div>

        <div className="footer-section links-section">
          <ul>
            <li>{textContent.OurProduct}</li>
            <li>{textContent.Who}</li>
            <li>{textContent.FAQ}</li>
          </ul>
        </div>

        <div className="footer-section links-section">
          <ul>
            <li>{textContent.Pricing}</li>
            <li>{textContent.Testimonials}</li>
            <li>{textContent.Contact}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <img style={{marginRight:"8px",width:"25px"}} src={facebook} alt="cloudcom logo"/>
          <img style={{marginRight:"8px",width:"25px"}} src={linkedin} alt="cloudcom logo"/>
          <img style={{marginRight:"8px",width:"25px"}} src={twitter} alt="cloudcom logo"/>
          <img style={{marginRight:"8px",width:"25px"}} src={youtube} alt="cloudcom logo"/>
        </div>
        <p>© Copyright 2024 - cloudcom</p>
      </div>
    </footer>
  );
};

export default MainFooter;
