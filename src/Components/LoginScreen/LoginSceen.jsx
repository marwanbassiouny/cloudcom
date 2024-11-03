import React from 'react';
import './LoginSceen.css';
import LoginForm from './LoginFormComponent/LoginForm';
import LoginWelcome from './LoginWelcomeComponent/LoginWelcome';

const LoginSceen = () => {
  return (
    <div className="registration-screen">
      <LoginForm />
      <LoginWelcome />
    </div>
  );
};

export default LoginSceen;
