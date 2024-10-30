
import './App.css';
import CustomerDataManagementScreen from './Components/CustomerDataManagementScreen/CustomerDataManagementScreen';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
    <SubNavbar />
    <PrimaryNavbar />
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
      <Route path="/BookYourDemo" element={<BookYourDemoScreen />} />
      <Route path="/packagesAndPrices" element={<PackagesAndPricesScreen />} />
      <Route path="/innerCaseStudy" element={<InnerCaseStudyScreen />} />
    </Routes>
    <MainFooter/>
    </Router>
  );
}

export default App;
