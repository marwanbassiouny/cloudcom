import React from 'react';
import './AuthButton.css';

const AuthButton = ({ text, link }) => {
  return (
    <div className='authBtnContainer'>
      <a 
        href={link} 
        className="auth-button"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </div>
  );
};

export default AuthButton;
