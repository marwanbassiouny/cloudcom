import React from 'react';
import './VerificationCodeInputs.css'

const VerificationCodeInputs = () => {
  return (
    <div className="code-inputs-container">
        <input className="verification-code-input" type="text" maxLength="1" />
        <input className="verification-code-input" type="text" maxLength="1" />
        <input className="verification-code-input" type="text" maxLength="1" />
        <input className="verification-code-input" type="text" maxLength="1" />
    </div>
  );
};

export default VerificationCodeInputs;
