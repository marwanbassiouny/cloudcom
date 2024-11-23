



import React, { useState } from 'react';
import './PasswordInput.css';
import openEye from '../../../Assets/Icons/General/AuthComponents/openEye.svg';
import closedEye from '../../../Assets/Icons/General/AuthComponents/closedEye.svg';


const PasswordInput = ({label}) => {

  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleInputChange = (e) => {
    setHasValue(true)
    setPassword(e.target.value);
  };

  const getMaskedPassword = (password) => {
    return '*'.repeat(password.length);
  };

  return (
        <div className={`floating-input-container ${isFocused || hasValue ? 'focused' : ''}`}>
            <label htmlFor='product_pass_input' className="floating-label input-floating-label">
              {label} {<span className="required">*</span>}
            </label>
            <input className="password-input" type='text' name='product_pass_input' 
            value={isPasswordVisible ? password : getMaskedPassword(password)} 
            required 
            onChange={handleInputChange}  
            onFocus={() => setIsFocused(true)} 
            onBlur={() => setIsFocused(false)} 
            // placeholder="Password"
            />
            
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


