import React from 'react';
import TopicData from '../General/CompanyInfoPageTemplate/TopicDataComponent/TopicData';
import TopicExample from '../General/CompanyInfoPageTemplate/TopicExampleComponent/TopicExample';
import flowBuilderAnimation from '../../Assets/Icons/FlowBuilderScreen/flowBuilderAnimation.mp4'
import Example1Animation from '../../Assets/Icons/FlowBuilderScreen/Example1Animation.mp4';
import Example2Animation from '../../Assets/Icons/FlowBuilderScreen/Example2Animation.mp4';
import Example3Animation from '../../Assets/Icons/FlowBuilderScreen/Example3Animation.mp4';
import Example4Animation from '../../Assets/Icons/FlowBuilderScreen/Example4Animation.mp4';

const FlowBuilderScreen = () => {
 
const examples = [
    {
      animation: Example1Animation,
      isIcon : false,
      title: 'Automated Workflows',
      description: 'Free up resources by automating customer engagement processes like onboarding, retention, and upselling.',
    },
    {
      animation: Example2Animation,
      isIcon : false,
      title: 'Enhanced Personalization',
      description: 'Deliver personalized messages based on real-time customer interactions.',
    },
    {
      animation: Example3Animation,
      isIcon : false,
      title: 'Multi-Channel Engagement',
      description: 'Reach customers on their preferred channels, whether via SMS, Email, WhatsApp, or Push Notifications.',
    },
    {
      animation: Example4Animation,
      isIcon : false,
      title: 'Increased Retention',
      description: 'Keep customers engaged throughout their journey, improving loyalty and lifetime value.',
    }
  ];

  return (
    <div>
      <TopicData
        title="Flow Builder"
        description="Create complex, personalized customer journeys No-Code through cloudcom's intelligent automation workflows. Automate customer engagement with predefined drag-and-drop triggers, actions, and conditions, enabling businesses to deliver timely, relevant messages across multiple channels."
        animation={flowBuilderAnimation}
      />
      <TopicExample examples={examples} />
    </div>
  );
};

export default FlowBuilderScreen;
