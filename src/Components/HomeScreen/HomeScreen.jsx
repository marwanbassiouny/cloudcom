import React from 'react';
import SubNavbar from '../General/SubNavbarComponent/SubNavbar';
import PrimaryNavbar from '../General/PrimaryNavbarComponent/PrimaryNavbar';
import Intro from './IntroComponent/Intro';

const HomeScreen = () => {
  return (
    <div>
      <SubNavbar />
      <PrimaryNavbar />
      <Intro />
    </div>
  );
};

export default HomeScreen;