import React from 'react';
import './BookYourDemoScreen.css';
import SuccessStoriesBanner from '../General/SuccessStoriesBanner/SuccessStoriesBanner '
const BookYourDemoScreen = () => {
    return (
    <div>
        <div className="book-demo-section">
            <div className="form-info">
                <h2>Complete the form below</h2>
                <p>
                    and our cloudcom team will reach out to you with more information or schedule a call to discuss your inquiry <strong>within 1 business day.</strong>
                </p>
                <p>Let us help you find the perfect communication solution for your business.</p>
                <h3>Book your Demo</h3>
                <p>
                    <span className="checkmark">&#10003;</span> Book a demo today and discover how cloudcom’s platform can optimize your communication with seamless multi-channel solutions, including SMS, WhatsApp, Email, and more.
                </p>
            </div>
            <div className="form-section">
                <form className="demo-form">
                    <div className="input-group">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="input-group">
                        <input type="text" name="phone" placeholder="Phone number" />
                        <input type="text" name="country" placeholder="Country" />
                    </div>
                    <div className="input-group">
                        <select name="industry">
                            <option>Please Select</option>
                            <option>Industry 1</option>
                            <option>Industry 2</option>
                        </select>
                        <select name="solution">
                            <option>Please Select</option>
                            <option>Solution 1</option>
                            <option>Solution 2</option>
                        </select>
                    </div>
                    <textarea name="message" placeholder="Write your message.."></textarea>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
        <SuccessStoriesBanner/>
        </div>
        
    );
};

export default BookYourDemoScreen;