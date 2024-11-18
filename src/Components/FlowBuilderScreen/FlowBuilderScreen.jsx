import React from 'react';
import TopicData from '../General/CompanyInfoPageTemplate/TopicDataComponent/TopicData';
import TopicExample from '../General/CompanyInfoPageTemplate/TopicExampleComponent/TopicExample';
import flowBuilderAnimation from '../../Assets/Icons/FlowBuilderScreen/flowBuilderAnimation.mp4'
import logoIcon1 from '../../Assets/Icons/FlowBuilderScreen/ExampleIcon1.svg';
import logoIcon2 from '../../Assets/Icons/FlowBuilderScreen/ExampleIcon2.svg';
import logoIcon3 from '../../Assets/Icons/FlowBuilderScreen/ExampleIcon3.svg';
import logoIcon4 from '../../Assets/Icons/FlowBuilderScreen/ExampleIcon4.svg';

const FlowBuilderScreen = () => {
 
const examples = [
    {
      animation: logoIcon1,
      isIcon : true,
      title: 'Automated Workflows',
      description: 'Free up resources by automating customer engagement processes like onboarding, retention, and upselling.',
    },
    {
      animation: logoIcon2,
      isIcon : true,
      title: 'Enhanced Personalization',
      description: 'Deliver personalized messages based on real-time customer interactions.',
    },
    {
      animation: logoIcon3,
      isIcon : true,
      title: 'Multi-Channel Engagement',
      description: 'Reach customers on their preferred channels, whether via SMS, Email, WhatsApp, or Push Notifications.',
    },
    {
      animation: logoIcon4,
      isIcon : true,
      title: 'Increased Retention',
      description: 'Keep customers engaged throughout their journey, improving loyalty and lifetime value.',
    }
  ];

  return (
    <div>
      <TopicData
        title="Flow Builder"
        description="Create complex, personalized customer journeys without coding through cloudcom's intelligent automation workflows. Automate customer engagement with predefined drag-and-drop triggers, actions, and conditions, enabling businesses to deliver timely, relevant messages across multiple channels."
        animation={flowBuilderAnimation}
      />
      <TopicExample examples={examples} />
    </div>
  );
};

export default FlowBuilderScreen;
