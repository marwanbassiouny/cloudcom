import React from 'react';
import LoginForm from './LoginFormComponent/LoginForm';
import LoginWelcome from './LoginWelcomeComponent/LoginWelcome';
import AuthScreenTemplate from '../General/ScreenTemplates/AuthScreenTemplateComponent/AuthScreenTemplate';

const LoginSceen = () => {
  return (
    <AuthScreenTemplate leftPanel={<LoginForm />} rightPanel={<LoginWelcome />}/>
  );
};

export default LoginSceen;
