
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

function App() {
  return (
    <Router>
    <SubNavbar />
    <PrimaryNavbar />
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/customerDataManagement" element={<CustomerDataManagementScreen />} />
      <Route path="/multiChannelCampaign" element={<MultiChannelCampaignManagerScreen />} />
      <Route path="/AIPoweredSegmantation" element={<AIPoweredSegmantationScreen />} />
      <Route path="/chatManagement" element={<ChatManagementScreen />} />
      <Route path="/verify" element={<VerifyScreen />} />
      <Route path="/flowBuilder" element={<FlowBuilderScreen />} />
    </Routes>
    <MainFooter/>
    </Router>
  );
}

export default App;
