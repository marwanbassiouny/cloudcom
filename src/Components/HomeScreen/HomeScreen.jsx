import React from 'react';
import Intro from './IntroComponent/Intro';
import Clients from './ClientsComponent/Clients';
import WaitingListComponent from './WaitingListComponent/WaitingListComponent';
import DataManagement from './DataManagementComponent/DataManagement';
import FaqsComponent from './FaqsComponent/FaqsComponent';
import Experience from './ExperienceComponent/Experience';
import About from './AboutComponent/About';
import SuccessStories from './SuccessStoriesComponent/SuccessStories';
import TestimonialsCarousel from './TestimonialsComponent/Testimonials';
import WhyCloud from './WhyCloudComponent/WhyCloud';


const HomeScreen = () => {
  return (
    <div>
     
      <Intro />
      <Clients />
      <DataManagement />
      <Experience />
      <About />
      <SuccessStories />
      <WhyCloud/>
      <TestimonialsCarousel/>
      <FaqsComponent/>
      <WaitingListComponent/>

    </div>
  );
};

export default HomeScreen;