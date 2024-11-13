
import './App.css';
import CustomerDataManagementScreen from './Components/CustomerDataManagementScreen/CustomerDataManagementScreen';
import React, { useEffect , Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import AssociateMemberBar from './Components/General/AssociateMemberBarComponent/AssociateMemberBar';

const HomeScreen = React.lazy(() => import('./Components/HomeScreen/HomeScreen'));
const SubNavbar = React.lazy(() => import('./Components/General/SubNavbarComponent/SubNavbar'));
const PrimaryNavbar = React.lazy(() => import('../src/Components/General/PrimaryNavbarComponent/PrimaryNavbar'));
const MainFooter = React.lazy(() => import('./Components/General/MainFooterComponent/MainFooter'));
const MultiChannelCampaignManagerScreen = React.lazy(() => import('./Components/MultiChannelCampaignManagerScreen/MultiChannelCampaignManagerScreen'));
const AIPoweredSegmantationScreen = React.lazy(() => import('./Components/AIPoweredSegmantationScreen/AIPoweredSegmantationScreen'));
const ChatManagementScreen = React.lazy(() => import('./Components/ChatManagementScreen/ChatManagementScreen'));
const VerifyScreen = React.lazy(() => import('./Components/VerifyScreen/VerifyScreen'));
const FlowBuilderScreen = React.lazy(() => import('./Components/FlowBuilderScreen/FlowBuilderScreen'));
const WhoAreWeScreen = React.lazy(() => import('./Components/WhoWeAreScreen/WhoWeAreScreen'));
const ClientTestimonialsScreen = React.lazy(() => import('./Components/ClientTestimonialsScreen/ClientTestimonialsComponent/ClientTestimonials'));
const CaseStudyScreen = React.lazy(() => import('./Components/CaseStudiesScreen/CaseStudyScreen'));
const NewsAndArticlesScreenComponent = React.lazy(() => import('./Components/NewsAndArticlesScreen/NewsAndArticlesScreenComponent'));
const BlogSingleScreen = React.lazy(() => import('./Components/BlogSingleScreen/BlogSingleScreen'));
const ReportsScreen = React.lazy(() => import('./Components/ReportsScreen/ReportsScreen'));
const ContactUsScreen = React.lazy(() => import('./Components/ContactUsScreen/ContactUsScreen'));
const PackagesAndPricesScreen = React.lazy(() => import('./Components/PackagesAndPricesScreen/PackagesAndPricesScreen'));
const GetStartedScreen = React.lazy(() => import('./Components/GetStartedScreen/GetStartedScreen'));
const RegisterationScreen = React.lazy(() => import('./Components/RegisterationSceen/RegisterationSceen'));
const VerificationScreen = React.lazy(() => import('./Components/VerificationScreen/VerificationScreen'));
const LoginSceen = React.lazy(() => import('./Components/LoginScreen/LoginSceen'));
const ForgotPasswordScreen = React.lazy(() => import('./Components/ForgotPasswordScreen/ForgotPasswordScreen'));
const ResetPasswordScreen = React.lazy(() => import('./Components/ResetPasswordScreen/ResetPasswordScreen'));
const CheckYourEmailScreen = React.lazy(() => import('./Components/CheckYourEmailScreen/CheckYourEmailScreen'));
const GourmetCaseStudyScreen = React.lazy(() => import('./Components/InnerCaseStudyScreen/GourmetCaseStudyScreen'));
const VisitaCaseStudyScreen = React.lazy(() => import('./Components/VisitaCaseStudyScreen/VisitaCaseStudyScreen'));
const ReachFinanceCaseStudyScreen = React.lazy(() => import('./Components/ReachFinanceCaseStudyScreen/ReachFinanceCaseStudyScreen'));


function App() {

  useEffect(() => {
    
    const setDynamicScreenPadding = () => {
      const paddingDiff = (1440 - 1200) / 2
      const paddingPercentage = (paddingDiff / 1440) * 100;
      const screenWidth = window.innerWidth;
      const calculatedPadding = (paddingPercentage / 100) * screenWidth;
      document.documentElement.style.setProperty('--dynamic-padding', `${calculatedPadding}px`);
    };

    setDynamicScreenPadding();
    console.log(window.innerWidth)
    window.addEventListener('resize', setDynamicScreenPadding);

    return () => {
      window.removeEventListener('resize', setDynamicScreenPadding);
    };
    
  }, []); 

  const location = useLocation();

  const unauthenticatedRoutes = ['/login', '/register', '/forgotPassword', '/resetPassword', '/verification', '/checkYourEmail'];
  const mainNavbar = unauthenticatedRoutes.includes(location.pathname);

  return (
    <>
      <Suspense fallback={<LoadingScreen />}>

        {!mainNavbar && <AssociateMemberBar />}
        {!mainNavbar && <SubNavbar />}
        {!mainNavbar && <PrimaryNavbar />}
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
          <Route path="/packagesAndPrices" element={<PackagesAndPricesScreen />} />
          <Route path="/CaseStudy/gourmet" element={<GourmetCaseStudyScreen />} />
          <Route path="/CaseStudy/visita" element={<VisitaCaseStudyScreen />} />
          <Route path="/CaseStudy/reachFinance" element={<ReachFinanceCaseStudyScreen />} />
          <Route path="/getStarted" element={<GetStartedScreen />} />
          <Route path="/register" element={<RegisterationScreen />} />
          <Route path="/login" element={<LoginSceen />} />
          <Route path="/verification" element={<VerificationScreen />} />
          <Route path="/forgotPassword" element={<ForgotPasswordScreen />} />
          <Route path="/resetPassword" element={<ResetPasswordScreen />} />
          <Route path="/checkYourEmail" element={<CheckYourEmailScreen />} />
        </Routes> 

        <MainFooter/>

      </Suspense>

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
