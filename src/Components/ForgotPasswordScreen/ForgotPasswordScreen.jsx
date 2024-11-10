import React from 'react';
import './ForgotPasswordScreen.css';
import illustration from '../../Assets/Icons/ForgotPasswordScreen/ForgotPasswordWelcomeImage.svg';
import AuthButton from '../General/AuthButton/AuthButton';
import LogoNavbar from '../General/LogoNavbarComponent/LogoNavbar';
import AuthScreenTemplate from '../General/ScreenTemplates/AuthScreenTemplateComponent/AuthScreenTemplate';
import ForgotPasswordWelcome from './ForgotPasswordWelcomeComponent/ForgotPasswordWelcome';
import ForgotPasswordForm from './ForgotPasswordFormComponent/ForgotPasswordForm';
import ResetPasswordScreenTemplate from '../General/ScreenTemplates/ResetPasswordScreenTemplateComponent/ResetPasswordScreenTemplate';

const ForgotPasswordScreen = () => {
  return (
    <ResetPasswordScreenTemplate leftPanel={<ForgotPasswordWelcome />} rightPanel={<ForgotPasswordForm />}/>
  );
};

export default ForgotPasswordScreen;
