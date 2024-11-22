import React from 'react';
import TopicData from '../General/CompanyInfoPageTemplate/TopicDataComponent/TopicData';
import TopicExample from '../General/CompanyInfoPageTemplate/TopicExampleComponent/TopicExample';
import MultiChannelCampaignAnimation from '../../Assets/Icons/MultiChannelCampaignManagerScreen/MultiChannelCampaignAnimation.mp4'
import logoIcon1 from '../../Assets/Icons/MultiChannelCampaignManagerScreen/ExampleAnimation1.mp4';
import logoIcon2 from '../../Assets/Icons/MultiChannelCampaignManagerScreen/ExampleAnimation2.mp4';
import logoIcon3 from '../../Assets/Icons/MultiChannelCampaignManagerScreen/ExampleAnimation3.mp4';
import logoIcon4 from '../../Assets/Icons/MultiChannelCampaignManagerScreen/ExampleAnimation4.mp4';
import PackageAndPricingV2 from '../PackagesAndPricesScreen/PricingPlansV2Component/PricingPlansV2Component';

const MultiChannelCampaignManagerScreen = () => {
 
const examples = [
    {
      animation: logoIcon1,
      isIcon : false,
      title: 'Consistency',
      description: 'Ensure your brand message is consistent across all channels, boosting engagement and recognition.',
    },
    {
      animation: logoIcon2,
      isIcon : false,
      title: 'Real-Time Insights',
      description: 'Make data-driven decisions with real-time analytics that help optimize campaign performance on the fly.',
    },
    {
      animation: logoIcon3,
      isIcon : false,
      title: 'Scalability',
      description: 'Run campaigns of any size—from small, targeted efforts to large-scale outreach—without compromising efficiency.',
    },
    {
      animation: logoIcon4,
      isIcon : false,
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
      <PackageAndPricingV2 />
    </div>
  );
};

export default MultiChannelCampaignManagerScreen;
