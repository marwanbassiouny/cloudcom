import React from 'react';
import './RegisterationSceen.css';
import RegistrationForm from '../RegisterationSceen/RegistrationFormComponent/RegistrationForm';
import WelcomeComponent from '../RegisterationSceen/WelcomeComponent/Welcome';
// import RightPart from './RightPart';

const RegisterationScreen = () => {
  return (
    <div className="registration-screen">
      <RegistrationForm />
      <WelcomeComponent />
    </div>
  );
};

export default RegisterationScreen;
