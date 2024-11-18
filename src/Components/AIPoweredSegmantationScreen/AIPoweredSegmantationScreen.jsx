import React from 'react';
import TopicData from '../General/CompanyInfoPageTemplate/TopicDataComponent/TopicData';
import TopicExample from '../General/CompanyInfoPageTemplate/TopicExampleComponent/TopicExample';
import AIPoweredSegmantaionAnimation from '../../Assets/Icons/AIPoweredSegmantationScreen/AIPoweredSegmantaionAnimation.mp4'
import logoIcon1 from '../../Assets/Icons/AIPoweredSegmantationScreen/ExampleIcon1.svg';
import logoIcon2 from '../../Assets/Icons/AIPoweredSegmantationScreen/ExampleIcon2.svg';
import logoIcon3 from '../../Assets/Icons/AIPoweredSegmantationScreen/ExampleIcon3.svg';
import logoIcon4 from '../../Assets/Icons/AIPoweredSegmantationScreen/ExampleIcon4.svg';

const AIPoweredSegmantationScreen = () => {
 
const examples = [
    {
      animation: logoIcon1,
      isIcon : true,
      title: 'Precision Targeting',
      description: 'Identify high-value customers, churn risks, loyal customers, and more for hyper-personalized messaging.',
    },
    {
      animation: logoIcon2,
      isIcon : true,
      title: 'Behavior-Based Segments',
      description: 'Use real-time behavioral data to refine customer segments for more effective campaigns.',
    },
    {
      animation: logoIcon3,
      isIcon : true,
      title: 'Increased Engagement',
      description: 'Deliver messages that resonate with specific customer needs, increasing engagement and conversion rates.',
    },
    {
      animation: logoIcon4,
      isIcon : true,
      title: 'Automation',
      description: 'Automate segmentation processes for continuous, up-to-date customer insights.',
    },
  ];

  return (
    <div>
      <TopicData
        title="AI-Powered Segmentation"
        description="Leverage cloudcom's AI-powered segmentation to target the right customers at the right time. Create dynamic segments based on real-time customer behaviors, ensuring your marketing messages reach the right audience for maximum impact."
        animation={AIPoweredSegmantaionAnimation}
      />
      <TopicExample examples={examples} />
    </div>
  );
};

export default AIPoweredSegmantationScreen;
