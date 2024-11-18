import React from 'react';
import TopicData from '../General/CompanyInfoPageTemplate/TopicDataComponent/TopicData';
import TopicExample from '../General/CompanyInfoPageTemplate/TopicExampleComponent/TopicExample';
import AIPoweredSegmantaionAnimation from '../../Assets/Icons/AIPoweredSegmantationScreen/AIPoweredSegmantaionAnimation.mp4'
import ExampleAnimation1 from '../../Assets/Icons/AIPoweredSegmantationScreen/ExampleAnimation1.mp4';
import ExampleAnimation2 from '../../Assets/Icons/AIPoweredSegmantationScreen/ExampleAnimation2.mp4';
import ExampleAnimation3 from '../../Assets/Icons/AIPoweredSegmantationScreen/ExampleAnimation3.mp4';
import ExampleAnimation4 from '../../Assets/Icons/AIPoweredSegmantationScreen/ExampleAnimation4.mp4';

const AIPoweredSegmantationScreen = () => {
 
const examples = [
    {
      animation: ExampleAnimation1,
      isIcon : false,
      title: 'Precision Targeting',
      description: 'Identify high-value customers, churn risks, loyal customers, and more for hyper-personalized messaging.',
    },
    {
      animation: ExampleAnimation2,
      isIcon : false,
      title: 'Behavior-Based Segments',
      description: 'Use real-time behavioral data to refine customer segments for more effective campaigns.',
    },
    {
      animation: ExampleAnimation3,
      isIcon : false,
      title: 'Increased Engagement',
      description: 'Deliver messages that resonate with specific customer needs, increasing engagement and conversion rates.',
    },
    {
      animation: ExampleAnimation4,
      isIcon : false,
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
