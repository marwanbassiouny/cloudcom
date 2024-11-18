import React from 'react';
import TopicData from '../General/CompanyInfoPageTemplate/TopicDataComponent/TopicData';
import TopicExample from '../General/CompanyInfoPageTemplate/TopicExampleComponent/TopicExample';
import MultiChannelCampaignAnimation from '../../Assets/Icons/MultiChannelCampaignManagerScreen/MultiChannelCampaignAnimation.mp4'
import logoIcon1 from '../../Assets/Icons/MultiChannelCampaignManagerScreen/ExampleIcon1.svg';
import logoIcon2 from '../../Assets/Icons/MultiChannelCampaignManagerScreen/ExampleIcon2.svg';
import logoIcon3 from '../../Assets/Icons/MultiChannelCampaignManagerScreen/ExampleIcon3.svg';
import logoIcon4 from '../../Assets/Icons/MultiChannelCampaignManagerScreen/ExampleIcon4.svg';

const MultiChannelCampaignManagerScreen = () => {
 
const examples = [
    {
      animation: logoIcon1,
      isIcon : true,
      title: 'Consistency',
      description: 'Ensure your brand message is consistent across all channels, boosting engagement and recognition.',
    },
    {
      animation: logoIcon2,
      isIcon : true,
      title: 'Real-Time Insights',
      description: 'Make data-driven decisions with real-time analytics that help optimize campaign performance on the fly.',
    },
    {
      animation: logoIcon3,
      isIcon : true,
      title: 'Scalability',
      description: 'Run campaigns of any size—from small, targeted efforts to large-scale outreach—without compromising efficiency.',
    },
    {
      animation: logoIcon4,
      isIcon : true,
      title: 'Cost-Effective',
      description: 'Streamline your campaign management process to reduce operational costs and improve ROI.',
    },
  ];

  return (
    <div>
      <TopicData
        title="Multi-Channel Campaign Manager"
        description="Run effective multi-channel campaigns with cloudcom’s Campaign Manager. Engage customers through SMS, Email, WhatsApp, push notifications, and social media while maintaining a consistent message. Track performance and refine strategies with real-time analytics."
        animation={MultiChannelCampaignAnimation}
      />
      <TopicExample examples={examples} />
    </div>
  );
};

export default MultiChannelCampaignManagerScreen;
