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
import About from './AboutComponent/About';
import SuccessStories from './SuccessStoriesComponent/SuccessStories';
import TestimonialsCarousel from './TestimonialsComponent/Testimonials';


const HomeScreen = () => {
  return (
    <div>
     
      <Intro />
      <Clients />
      <DataManagement />
      <Experience />
      <About />
      <SuccessStories />
      <TestimonialsCarousel/>
      <FaqsComponent/>
      <WaitingListComponent/>

    </div>
  );
};

export default HomeScreen;