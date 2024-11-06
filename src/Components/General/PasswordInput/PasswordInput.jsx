




import React , { useState } from 'react';
import './PasswordInput.css';
import openEye from '../../../Assets/Icons/General/AuthComponents/openEye.svg';
import closedEye from '../../../Assets/Icons/General/AuthComponents/closedEye.svg';


const PasswordInput = () => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
        <div className="password-input-container">
            <input className="password-input"  type={isPasswordVisible ? 'text' : 'password'} placeholder="Password" required />
            <button
                type="button"
                className="toggle-password-visibility"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ?  <img src={openEye} alt="Google icon" /> :  <img src={closedEye} alt="Google icon" />}
              </button>
        </div>
  );
};

export default PasswordInput;


