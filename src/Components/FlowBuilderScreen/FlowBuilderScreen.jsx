import React from 'react';
import TopicIntro from '../General/CompanyInfoPageTemplate/TopicIntroComponent/TopicIntro';
import TopicData from '../General/CompanyInfoPageTemplate/TopicDataComponent/TopicData';
import TopicExample from '../General/CompanyInfoPageTemplate/TopicExampleComponent/TopicExample';
import introThemeImage from '../../Assets/Images/General/CompanyInfoPageTemplate/introThemeImage.svg'
import dateSectionIcon from '../../Assets/Icons/FlowBuilderScreen/flowBuilderIcon.svg'
import logoIcon1 from '../../Assets/Icons/FlowBuilderScreen/ExampleIcon1.svg';
import logoIcon2 from '../../Assets/Icons/FlowBuilderScreen/ExampleIcon2.svg';
import logoIcon3 from '../../Assets/Icons/FlowBuilderScreen/ExampleIcon3.svg';
import logoIcon4 from '../../Assets/Icons/FlowBuilderScreen/ExampleIcon4.svg';

const FlowBuilderScreen = () => {
 
const examples = [
    {
      icon: logoIcon1,
      title: 'Automated Workflows',
      description: 'Free up resources by automating customer engagement processes like onboarding, retention, and upselling.',
    },
    {
      icon: logoIcon2,
      title: 'Enhanced Personalization',
      description: 'Deliver personalized messages based on real-time customer interactions.',
    },
    {
      icon: logoIcon3,
      title: 'Multi-Channel Engagement',
      description: 'Reach customers on their preferred channels, whether via SMS, Email, WhatsApp, or Push Notifications.',
    },
    {
      icon: logoIcon4,
      title: 'Increased Retention',
      description: 'Keep customers engaged throughout their journey, improving loyalty and lifetime value.',
    }
  ];

  return (
    <div>
      {/* <TopicIntro
        backgroundImage={introThemeImage}
        title="Our Products"
        breadcrumb="Home ➔ Our Products"
      /> */}
      <TopicData
        title="Flow Builder"
        description="Create complex, personalized customer journeys without coding through cloudcom's intelligent automation workflows. Automate customer engagement with predefined drag-and-drop triggers, actions, and conditions, enabling businesses to deliver timely, relevant messages across multiple channels."
        image={dateSectionIcon}
      />
      <TopicExample examples={examples} />
    </div>
  );
};

export default FlowBuilderScreen;
