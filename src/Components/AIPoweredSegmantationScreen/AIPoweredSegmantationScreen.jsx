import React from 'react';
import TopicIntro from '../General/CompanyInfoPageTemplate/TopicIntroComponent/TopicIntro';
import TopicData from '../General/CompanyInfoPageTemplate/TopicDataComponent/TopicData';
import TopicExample from '../General/CompanyInfoPageTemplate/TopicExampleComponent/TopicExample';
import introThemeImage from '../../Assets/Images/General/CompanyInfoPageTemplate/introThemeImage.svg'
import dateSectionIcon from '../../Assets/Icons/AIPoweredSegmantationScreen/AIPoweredSegmantaionScreen.svg'
import logoIcon1 from '../../Assets/Icons/AIPoweredSegmantationScreen/ExampleIcon1.svg';
import logoIcon2 from '../../Assets/Icons/AIPoweredSegmantationScreen/ExampleIcon2.svg';
import logoIcon3 from '../../Assets/Icons/AIPoweredSegmantationScreen/ExampleIcon3.svg';
import logoIcon4 from '../../Assets/Icons/AIPoweredSegmantationScreen/ExampleIcon4.svg';

const AIPoweredSegmantationScreen = () => {
 
const examples = [
    {
      icon: logoIcon1,
      title: 'Precision Targeting',
      description: 'Identify high-value customers, churn risks, loyal customers, and more for hyper-personalized messaging.',
    },
    {
      icon: logoIcon2,
      title: 'Behavior-Based Segments',
      description: 'Use real-time behavioral data to refine customer segments for more effective campaigns.',
    },
    {
      icon: logoIcon3,
      title: 'Increased Engagement',
      description: 'Deliver messages that resonate with specific customer needs, increasing engagement and conversion rates.',
    },
    {
      icon: logoIcon4,
      title: 'Automation',
      description: 'Automate segmentation processes for continuous, up-to-date customer insights.',
    },
  ];

  return (
    <div>
      <TopicIntro
        backgroundImage={introThemeImage}
        title="Our Products"
        breadcrumb="Home ➔ Our Products"
      />
      <TopicData
        title="AI-Powered Segmentation"
        description="Leverage cloudcom's AI-powered segmentation to target the right customers at the right time. Create dynamic segments based on real-time customer behaviors, ensuring your marketing messages reach the right audience for maximum impact."
        image={dateSectionIcon}
      />
      <TopicExample examples={examples} />
    </div>
  );
};

export default AIPoweredSegmantationScreen;
