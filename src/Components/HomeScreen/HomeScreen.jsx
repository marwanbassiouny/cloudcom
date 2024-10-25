import React from 'react';
import SubNavbar from '../General/SubNavbarComponent/SubNavbar';
import PrimaryNavbar from '../General/PrimaryNavbarComponent/PrimaryNavbar';
import Intro from './IntroComponent/Intro';
import Clients from './ClientsComponent/Clients';
import DataManagement from './DataManagementComponent/DataManagement';

const HomeScreen = () => {
  return (
    <div>
      <SubNavbar />
      <PrimaryNavbar />
      <Intro />
      <Clients />
      <DataManagement />
    </div>
  );
};

export default HomeScreen;