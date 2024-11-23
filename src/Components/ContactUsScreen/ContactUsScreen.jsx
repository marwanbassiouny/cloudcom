import React from 'react';
import './ContactUsScreen.css';
import image from "../../Assets/Images/ContactUsScreen/Background (1).svg"
import AuthInput from '../General/AuthInput/AuthInput';
const ContactUsScreen = () => {
    return (
        <div className="contactus-section page_padding_level_1">
            <div className="contactus-left">
                <div className="contactus-info">
                    <div className='contactus-title-container'><h2 className="contactus-title">Get In Touch</h2></div>
                    <div className='contactus-subtitle-container'>
                        <h3 className ="contactus-subtitle">Have Any Question?</h3>
                        <h3 className ="contactus-subtitle">Don't Hesitate To Send Us!</h3>
                    </div>
                </div>
                <div className="contactus-info-img">
                    <img src={image} alt="contactus illustration" className="contactus-image" loading="lazy"/>
                </div>
            </div>
            <div className="contactus-right">
                <form className="contactus-form">
                    <div className="input-group">
                    <AuthInput
                        className='contactus-input'
                        label="Name"
                        type="text"
                        name=""
                        value={''}
                        onChange={(e) => {console.log()}}
                        required
                        />
                    <AuthInput
                        className='contactus-input'
                        label="Email"
                        type="text"
                        name=""
                        value={''}
                        onChange={(e) => {console.log()}}
                        required
                        />
                        {/* <input className="contactus-input" type="text" name="name" placeholder="Name" /> */}
                        {/* <input className="contactus-input" type="email" name="email" placeholder="Email" /> */}
                    </div>
                    <div className="input-group">
                    <AuthInput
                        className='contactus-input'
                        label="Phone Number"
                        type="text"
                        name=""
                        value={''}
                        onChange={(e) => {console.log()}}
                        required
                        />
                    <AuthInput
                        className='contactus-input'
                        label="Company Name"
                        type="text"
                        name=""
                        value={''}
                        onChange={(e) => {console.log()}}
                        required
                        />
                        {/* <input className="contactus-input" type="text" name="phone" placeholder="Phone Number" />
                        <input className="contactus-input" type="text" name="company" placeholder="Company Name" /> */}
                    </div>
                    <AuthInput
                        isTextArea={true}
                        className='contactus-textarea'
                        label="Message"
                        type="text"
                        name=""
                        value={''}
                        onChange={(e) => {console.log()}}
                        required
                    />
                    {/* <textarea className="contactus-textarea" name="message" placeholder="Message"></textarea> */}
                    <button type="submit" className="product_button_glow send-button">Send <span className="arrow">&rarr;</span></button>
                </form>
            </div>
        </div>
    );
};
export default ContactUsScreen;