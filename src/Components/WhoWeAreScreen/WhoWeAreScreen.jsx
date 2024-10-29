import React from 'react';
import AboutUs from './AboutUsComponent/AboutUs';
import introThemeImage from '../../Assets/Images/General/CompanyInfoPageTemplate/introThemeImage.svg'
import TopicIntro from '../General/CompanyInfoPageTemplate/TopicIntroComponent/TopicIntro';

const WhoAreWeScreen = () => {
  return (
    <div>
        <TopicIntro
        backgroundImage={introThemeImage}
        title="Who We Are"
        breadcrumb="Home ➔ Who We Are"
      />
        <AboutUs />
    </div>
  );
};

export default WhoAreWeScreen;