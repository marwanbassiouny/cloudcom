




import React , { useState } from 'react';
import './PasswordInput.css';
import openEye from '../../../Assets/Icons/General/AuthComponents/openEye.svg';
import closedEye from '../../../Assets/Icons/General/AuthComponents/closedEye.svg';


const PasswordInput = () => {

  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleInputChange = (e) => {
    setPassword(e.target.value);
  };

  const getMaskedPassword = (password) => {
    return '*'.repeat(password.length);
  };

  return (
        <div className="password-input-container">
            <input className="password-input" type='text'  
            value={isPasswordVisible ? password : getMaskedPassword(password)} 
            onChange={handleInputChange} placeholder="Password" required />
            
            <button
                type="button"
                className="toggle-password-visibility"
                onClick={togglePasswordVisibility}
              >
                <img
                    src={isPasswordVisible ? openEye : closedEye}
                    alt={isPasswordVisible ? 'Hide password' : 'Show password'}
                    className="eyeIcon"
                  />
              </button>
        </div>
  );
};

export default PasswordInput;


