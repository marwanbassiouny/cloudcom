import React, { useState } from 'react';
import './AuthInput.css';

const AuthInput = ({
  label, // Label text for the input
  type = 'text', // Default input type
  name, // Input name
  value, // Controlled value
  onChange, // onChange handler
  required = false, // Optional required flag
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`floating-input-container ${isFocused || value ? 'focused' : ''}`}>
      <label htmlFor={name} className="floating-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        required={required}
        className="floating-input"
        onFocus={() => setIsFocused(true)} // Handle focus
        onBlur={() => setIsFocused(false)} // Handle blur
        onChange={onChange} // Handle value changes
      />
    </div>
  );
};

export default AuthInput;
