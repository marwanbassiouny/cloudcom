import React from 'react';
import './GetStartedForm.css';

const GetStartedForm = () => {
  return (
    <div className="light-grey-background">
      <div className="form-container">
        <div className="info-section">
          <h3 className="info-title">Complete the form below</h3>
          <p>and our cloudcom team will reach out to you with more information or schedule a call to discuss your inquiry within <strong>1 business day</strong>.</p>
          <p>Let us help you find the perfect communication solution for your business.</p>
          <h4 className="demo-title">Book your Demo</h4>
          <p>Book a demo today and discover how cloudcom’s platform can optimize your communication with seamless multi-channel solutions, including SMS, WhatsApp, Email, and more.</p>
        </div>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Phone number" />
            <input type="text" placeholder="Country" />
          </div>
          <div className="form-row">
            <select>
              <option value="">Industry</option>
              <option value="tech">Technology</option>
              <option value="finance">Finance</option>
              <option value="health">Healthcare</option>
            </select>
            <select>
              <option value="">Preferred Solution</option>
              <option value="sms">SMS</option>
              <option value="email">Email</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>
          <textarea placeholder="Message"></textarea>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GetStartedForm;
