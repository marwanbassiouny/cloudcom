import React from "react";
import '../style/MainFooter.css'; 

const MainFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src="logo.png" alt="cloudcom logo" className="logo" />
          <p>The Starting Point of customer engagement</p>
          <div className="newsletter">
            <p>Subscribe for our newsletter</p>
            <form>
              <input type="email" placeholder="Email" className="email-input" />
              <button type="submit" className="submit-btn">✈️</button>
            </form>
          </div>
        </div>

        <div className="footer-section contact-section">
          <h4>Get in touch</h4>
          <p>📍 euismod sed diam nonummy nibh</p>
          <p>📞 +1234567891011</p>
          <p>✉️ info@cloudcom.io</p>
        </div>

        <div className="footer-section links-section">
          <ul>
            <li>Our Product</li>
            <li>Who We Are</li>
            <li>FAQ</li>
          </ul>
        </div>
        
        <div className="footer-section links-section">
          <ul>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <p>© Copyright 2024 - cloudcom</p>
      </div>
    </footer>
  );
};

export default MainFooter;
