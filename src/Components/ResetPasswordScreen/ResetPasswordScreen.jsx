import React from 'react';
import './ResetPasswordScreen.css';
import ResetPasswordScreenTemplate from '../General/ScreenTemplates/ResetPasswordScreenTemplateComponent/ResetPasswordScreenTemplate';
import ResetPasswordWelcome from './ResetPasswordWelcomeComponent/ResetPasswordWelcome';
import ResetPasswordForm from './ResetPasswordFormComponent/ResetPasswordForm';

const ResetPasswordScreen = () => {
  return (
    <ResetPasswordScreenTemplate leftPanel={<ResetPasswordWelcome />} rightPanel={<ResetPasswordForm />}/>
  );
};

export default ResetPasswordScreen;
