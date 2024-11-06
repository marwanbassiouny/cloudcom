import React from 'react';
import RegistrationForm from '../RegisterationSceen/RegistrationFormComponent/RegistrationForm';
import WelcomeComponent from '../RegisterationSceen/WelcomeComponent/Welcome';
import AuthScreenTemplate from '../General/ScreenTemplates/AuthScreenTemplateComponent/AuthScreenTemplate';

const RegisterationScreen = () => {
  return (
    <AuthScreenTemplate leftPanel={<RegistrationForm />} rightPanel={<WelcomeComponent />}/>
  );
};

export default RegisterationScreen;
