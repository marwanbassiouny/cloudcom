import React, { useState } from 'react';
import './AuthInput.css';

const AuthInput = ({
  label, // Label text for the input
  type = 'text', // Default input type
  name, // Input name
  // value, // Controlled value
  onChange, // onChange handler
  required = false, // Optional required flag
  isTextArea = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value)
  };
  
  return (
    <div className={`floating-input-container ${isFocused || value ? 'focused' : ''}`}>
      <label htmlFor={name} className={`floating-label ${isTextArea ? 'floating-label textarea-floating-label' : 'input-floating-label'}`}>
        {label} {required && <span className="required">*</span>}
      </label>
      {
        !isTextArea && 
        <input
        id={name}
        type={type}
        name={name}
        value={value}
        required={required}
        className="floating-input"
        onFocus={() => setIsFocused(true)} 
        onBlur={() => setIsFocused(false)} 
        onChange={handleInputChange} 
      />
      }
      {
        isTextArea && 
        <textarea 
          id={name}
          className="contactus-textarea floating-input" 
          name={name} 
          // placeholder="Message"
          onFocus={() => setIsFocused(true)} 
          onBlur={() => setIsFocused(false)} 
          onChange={onChange} 
          ></textarea>
      }
    </div>
  );
};

export default AuthInput;
