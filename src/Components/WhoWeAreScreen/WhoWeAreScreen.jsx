import React from 'react';
import AboutUs from './AboutUsComponent/AboutUs';
import introThemeImage from '../../Assets/Images/General/CompanyInfoPageTemplate/introThemeImage.svg'
import TopicIntro from '../General/CompanyInfoPageTemplate/TopicIntroComponent/TopicIntro';
import MissionAndVision from './MissionAndVisionComponent/MissionAndVision';
import CloudcomHelp from './CloudcomHelpComponent/CloudcomHelp';
import OurTeamComponent from './OurTeamComponent/OurTeamComponent';

const WhoAreWeScreen = () => {
  return (
    <div>
        <TopicIntro
        backgroundImage={introThemeImage}
        title="Who We Are"
        breadcrumb="Home ➔ Who We Are"
      />
        <AboutUs />
        <MissionAndVision />
        <CloudcomHelp />
        <OurTeamComponent />
    </div>
  );
};

export default WhoAreWeScreen;