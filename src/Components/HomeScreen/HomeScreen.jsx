import React from 'react';
import SubNavbar from '../General/SubNavbarComponent/SubNavbar';
import PrimaryNavbar from '../General/PrimaryNavbarComponent/PrimaryNavbar';
import Intro from './IntroComponent/Intro';
import Clients from './ClientsComponent/Clients';
import MainFooter from '../General/MainFooterComponent/MainFooter';
import WaitingListComponent from './WaitingListComponent/WaitingListComponent';
import DataManagement from './DataManagementComponent/DataManagement';
import FaqsComponent from './FaqsComponent/FaqsComponent';
import Experience from './ExperienceComponent/Experience';

const HomeScreen = () => {
  return (
    <div>
      <SubNavbar />
      <PrimaryNavbar />
      <Intro />
      <Clients />
      <DataManagement />
      <Experience />
      <FaqsComponent/>
      <WaitingListComponent/>
      <MainFooter/>
    </div>
  );
};

export default HomeScreen;