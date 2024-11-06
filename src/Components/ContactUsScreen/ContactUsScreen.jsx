import React from 'react';
import './ContactUsScreen.css';
import image from "../../Assets/Images/ContactUsScreen/Background (1).svg"
const ContactUsScreen = () => {
    return (
        <div className="contactus-section">
            <div className="contactus-left">
                <div className="contactus-info">
                    <h2 className="contactus-title">Get In Touch</h2>
                    <h3 className ="contactus-subtitle">Have Any Question? Don't Hesitate To Send Us!</h3>
                </div>
                <div className="contactus-info-img">
                    <img src={image} alt="contactus illustration" className="contactus-image" />
                </div>
            </div>
            <div className="contactus-right">
                <form className="contactus-form">
                    <div className="input-group">
                        <input className="contactus-input" type="text" name="name" placeholder="Name" />
                        <input className="contactus-input" type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="input-group">
                        <input className="contactus-input" type="text" name="phone" placeholder="Phone Number" />
                        <input className="contactus-input" type="text" name="company" placeholder="Company Name" />
                    </div>
                    <textarea className="contactus-textarea" name="message" placeholder="Message"></textarea>
                    <button type="submit" className="send-button">Send <span className="arrow">&rarr;</span></button>
                </form>
            </div>
        </div>
    );
};
export default ContactUsScreen;