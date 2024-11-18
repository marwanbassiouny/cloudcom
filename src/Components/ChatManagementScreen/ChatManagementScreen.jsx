import React from 'react';
import TopicData from '../General/CompanyInfoPageTemplate/TopicDataComponent/TopicData';
import TopicExample from '../General/CompanyInfoPageTemplate/TopicExampleComponent/TopicExample';
import ChatManagementAnimation from '../../Assets/Icons/ChatManagementScreen/ChatManagementAnimation.mp4'
import logoIcon1 from '../../Assets/Icons/ChatManagementScreen/ExampleIcon1.svg';
import logoIcon2 from '../../Assets/Icons/ChatManagementScreen/ExampleIcon2.svg';
import logoIcon3 from '../../Assets/Icons/ChatManagementScreen/ExampleIcon3.svg';
import logoIcon4 from '../../Assets/Icons/ChatManagementScreen/ExampleIcon4.svg';

const ChatManagementScreen = () => {
 
const examples = [
    {
      animation: logoIcon1,
      isIcon : true,
      title: 'Always-On Support',
      description: 'Provide 24/7 support to your customers, ensuring timely responses even outside of business hours.',
    },
    {
      animation: logoIcon2,
      isIcon : true,
      title: 'Increased Customer Satisfaction',
      description: 'Address customer inquiries instantly, reducing wait times and improving the overall experience.',
    },
    {
      animation: logoIcon3,
      isIcon : true,
      title: 'Efficient Operations',
      description: 'Use AI-driven chat management to handle high volumes of queries without overwhelming your support team.',
    },
    {
      animation: logoIcon4,
      isIcon : true,
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
    </div>
  );
};

export default ChatManagementScreen;
