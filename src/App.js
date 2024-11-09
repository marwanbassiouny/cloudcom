
import './App.css';
import CustomerDataManagementScreen from './Components/CustomerDataManagementScreen/CustomerDataManagementScreen';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import SubNavbar from './Components/General/SubNavbarComponent/SubNavbar'
import PrimaryNavbar from '../src/Components/General/PrimaryNavbarComponent/PrimaryNavbar'
import MainFooter from './Components/General/MainFooterComponent/MainFooter'
import MultiChannelCampaignManagerScreen from './Components/MultiChannelCampaignManagerScreen/MultiChannelCampaignManagerScreen';
import AIPoweredSegmantationScreen from './Components/AIPoweredSegmantationScreen/AIPoweredSegmantationScreen';
import ChatManagementScreen from './Components/ChatManagementScreen/ChatManagementScreen';
import VerifyScreen from './Components/VerifyScreen/VerifyScreen';
import FlowBuilderScreen from './Components/FlowBuilderScreen/FlowBuilderScreen';
import WhoAreWeScreen from './Components/WhoWeAreScreen/WhoWeAreScreen';
import ClientTestimonialsScreen from './Components/ClientTestimonialsScreen/ClientTestimonialsComponent/ClientTestimonials';
import CaseStudyScreen from './Components/CaseStudiesScreen/CaseStudyScreen';
import NewsAndArticlesScreenComponent from './Components/NewsAndArticlesScreen/NewsAndArticlesScreenComponent';
import BlogSingleScreen from './Components/BlogSingleScreen/BlogSingleScreen';
import ReportsScreen from './Components/ReportsScreen/ReportsScreen';
import ContactUsScreen from './Components/ContactUsScreen/ContactUsScreen';
import BookYourDemoScreen from './Components/BookYourDemoScreen/BookYourDemoScreen';
import PackagesAndPricesScreen from './Components/PackagesAndPricesScreen/PackagesAndPricesScreen';
import InnerCaseStudyScreen from './Components/InnerCaseStudyScreen/InnerCaseStudyScreen';
import GetStartedScreen from './Components/GetStartedScreen/GetStartedScreen';
import RegisterationScreen from './Components/RegisterationSceen/RegisterationSceen';
import VerificationScreen from './Components/VerificationScreen/VerificationScreen';
import LoginSceen from './Components/LoginScreen/LoginSceen';
import ForgotPasswordScreen from './Components/ForgotPasswordScreen/ForgotPasswordScreen';
import ResetPasswordScreen from './Components/ResetPasswordScreen/ResetPasswordScreen';
import CheckYourEmailScreen from './Components/CheckYourEmailScreen/CheckYourEmailScreen';
import LogoNavbar from './Components/General/LogoNavbarComponent/LogoNavbar';

function App() {

  const location = useLocation();

  const unauthenticatedRoutes = ['/login', '/register', '/forgotPassword', '/resetPassword', '/verification', '/checkYourEmail'];
  const mainNavbar = unauthenticatedRoutes.includes(location.pathname);

  return (
    <>
      {!mainNavbar && <SubNavbar />}
      {!mainNavbar && <PrimaryNavbar />}
      {/* {mainNavbar && <LogoNavbar />} */}
      
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/whoWeAre" element={<WhoAreWeScreen />} />
        <Route path="/customerDataManagement" element={<CustomerDataManagementScreen />} />
        <Route path="/multiChannelCampaignManager" element={<MultiChannelCampaignManagerScreen />} />
        <Route path="/AIPoweredSegmantation" element={<AIPoweredSegmantationScreen />} />
        <Route path="/chatManagement" element={<ChatManagementScreen />} />
        <Route path="/verify" element={<VerifyScreen />} />
        <Route path="/flowBuilder" element={<FlowBuilderScreen />} />
        <Route path="/ClientTestimonials" element={<ClientTestimonialsScreen />} />
        <Route path="/CaseStudies" element={<CaseStudyScreen />} />
        <Route path="/newsandarticles" element={<NewsAndArticlesScreenComponent />} />
        <Route path="/blog" element={<BlogSingleScreen />} />
        <Route path="/reports" element={<ReportsScreen />} />
        <Route path="/ContactUs" element={<ContactUsScreen />} />
        {/* <Route path="/BookYourDemo" element={<BookYourDemoScreen />} /> */}
        <Route path="/packagesAndPrices" element={<PackagesAndPricesScreen />} />
        <Route path="/innerCaseStudy" element={<InnerCaseStudyScreen />} />
        <Route path="/getStarted" element={<GetStartedScreen />} />
        <Route path="/register" element={<RegisterationScreen />} />
        <Route path="/login" element={<LoginSceen />} />
        <Route path="/verification" element={<VerificationScreen />} />
        <Route path="/forgotPassword" element={<ForgotPasswordScreen />} />
        <Route path="/resetPassword" element={<ResetPasswordScreen />} />
        <Route path="/checkYourEmail" element={<CheckYourEmailScreen />} />
      </Routes> 
      <MainFooter/>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
