import React from 'react';
import TopicData from '../General/CompanyInfoPageTemplate/TopicDataComponent/TopicData';
import TopicExample from '../General/CompanyInfoPageTemplate/TopicExampleComponent/TopicExample';
import ChatManagementAnimation from '../../Assets/Icons/ChatManagementScreen/ChatManagementAnimation.mp4'
import Example1Animation from '../../Assets/Icons/ChatManagementScreen/Example1Animation.mp4';
import Example2Animation from '../../Assets/Icons/ChatManagementScreen/Example2Animation.mp4';
import Example3Animation from '../../Assets/Icons/ChatManagementScreen/Example3Animation.mp4';
import Example4Animation from '../../Assets/Icons/ChatManagementScreen/Example4Animation.mp4';
import PackageAndPricingV2 from '../PackagesAndPricesScreen/PricingPlansV2Component/PricingPlansV2Component';

const ChatManagementScreen = () => {
 
const examples = [
    {
      animation: Example1Animation,
      isIcon : false,
      title: 'Always-On Support',
      description: 'Provide 24/7 support to your customers, ensuring timely responses even outside of business hours.',
    },
    {
      animation: Example2Animation,
      isIcon : false,
      title: 'Increased Customer Satisfaction',
      description: 'Address customer inquiries instantly, reducing wait times and improving the overall experience.',
    },
    {
      animation: Example3Animation,
      isIcon : false,
      title: 'Efficient Operations',
      description: 'Use AI-driven chat management to handle high volumes of queries without overwhelming your support team.',
    },
    {
      animation: Example4Animation,
      isIcon : false,
      title: 'Seamless Integration',
      description: 'Consolidate inquiries from all channels into one platform for easier management and faster responses.',
    },
  ];

  return (
    <div>
      <TopicData
        title="Chat Management"
        description="Ensure no customer inquiry goes unanswered with cloudcom’s 24/7 AI-powered chat management. This system integrates with SMS, WhatsApp, social media, and more to provide real-time support and enhance customer satisfaction."
        animation={ChatManagementAnimation}
      />
      <TopicExample examples={examples} />
      <PackageAndPricingV2 />
    </div>
  );
};

export default ChatManagementScreen;
