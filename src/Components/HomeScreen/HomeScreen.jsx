import React from 'react';
import SubNavbar from '../General/SubNavbarComponent/SubNavbar';
import PrimaryNavbar from '../General/PrimaryNavbarComponent/PrimaryNavbar';
import Intro from './IntroComponent/Intro';
import Clients from './ClientsComponent/Clients';
import MainFooter from '../General/MainFooterComponent/MainFooter';
import DataManagement from './DataManagementComponent/DataManagement';

const HomeScreen = () => {
  return (
    <div>
      <SubNavbar />
      <PrimaryNavbar />
      <Intro />
      <Clients />
      <DataManagement />
      <MainFooter/>
    </div>
  );
};

export default HomeScreen;