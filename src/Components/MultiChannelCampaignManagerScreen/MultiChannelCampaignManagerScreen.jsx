import React from 'react';
import TopicIntro from '../General/CompanyInfoPageTemplate/TopicIntroComponent/TopicIntro';
import TopicData from '../General/CompanyInfoPageTemplate/TopicDataComponent/TopicData';
import TopicExample from '../General/CompanyInfoPageTemplate/TopicExampleComponent/TopicExample';
import introThemeImage from '../../Assets/Images/General/CompanyInfoPageTemplate/introThemeImage.svg'
import dateSectionIcon from '../../Assets/Icons/MultiChannelCampaignManagerScreen/MultiChannelCampaignIcon.svg'
import logoIcon1 from '../../Assets/Icons/MultiChannelCampaignManagerScreen/ExampleIcon1.svg';
import logoIcon2 from '../../Assets/Icons/MultiChannelCampaignManagerScreen/ExampleIcon2.svg';
import logoIcon3 from '../../Assets/Icons/MultiChannelCampaignManagerScreen/ExampleIcon3.svg';
import logoIcon4 from '../../Assets/Icons/MultiChannelCampaignManagerScreen/ExampleIcon4.svg';

const MultiChannelCampaignManagerScreen = () => {
 
const examples = [
    {
      icon: logoIcon1,
      title: 'Consistency',
      description: 'Ensure your brand message is consistent across all channels, boosting engagement and recognition.',
    },
    {
      icon: logoIcon2,
      title: 'Real-Time Insights',
      description: 'Make data-driven decisions with real-time analytics that help optimize campaign performance on the fly.',
    },
    {
      icon: logoIcon3,
      title: 'Scalability',
      description: 'Run campaigns of any size—from small, targeted efforts to large-scale outreach—without compromising efficiency.',
    },
    {
      icon: logoIcon4,
      title: 'Cost-Effective',
      description: 'Streamline your campaign management process to reduce operational costs and improve ROI.',
    },
  ];

  return (
    <div>
      {/* <TopicIntro
        backgroundImage={introThemeImage}
        title="Our Products"
        breadcrumb="Home ➔ Our Products"
      /> */}
      <TopicData
        title="Multi-Channel Campaign Manager"
        description="Run effective multi-channel campaigns with cloudcom’s Campaign Manager. Engage customers through SMS, Email, WhatsApp, push notifications, and social media while maintaining a consistent message. Track performance and refine strategies with real-time analytics."
        image={dateSectionIcon}
      />
      <TopicExample examples={examples} />
    </div>
  );
};

export default MultiChannelCampaignManagerScreen;
