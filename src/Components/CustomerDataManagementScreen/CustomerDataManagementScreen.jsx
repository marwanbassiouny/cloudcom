import React from 'react';
import TopicData from '../General/CompanyInfoPageTemplate/TopicDataComponent/TopicData';
import TopicExample from '../General/CompanyInfoPageTemplate/TopicExampleComponent/TopicExample';
import exampleAnimation1 from '../../Assets/Icons/CustomerDataManagementScreen/Example1Animation.mp4';
import logoIcon2 from '../../Assets/Icons/CustomerDataManagementScreen/ExampleIcon2.svg';
import logoIcon3 from '../../Assets/Icons/CustomerDataManagementScreen/ExampleIcon3.svg';
import logoIcon4 from '../../Assets/Icons/CustomerDataManagementScreen/ExampleIcon4.svg';
import dataSectionAnimation from '../../Assets/Icons/CustomerDataManagementScreen/customerDataManagementIntro.mp4';

const CustomerDataManagementScreen = () => {
 
const examples = [
    {
      animation: exampleAnimation1,
      isIcon : false,
      title: 'Holistic Customer Profiles',
      description: 'Gain a full understanding of customer behaviors and preferences for more targeted engagement.',
    },
    {
      animation: logoIcon2,
      isIcon : true,
      title: 'Data Synchronization',
      description: 'Effortlessly unify data from multiple sources to ensure consistent customer information.',
    },
    {
      animation: logoIcon3,
      isIcon : true,
      title: 'Actionable Insights',
      description: 'Identify key metrics like LTV and ARPU to tailor marketing efforts and increase ROI.',
    },
    {
      animation: logoIcon4,
      isIcon : true,
      title: 'Improved Targeting',
      description: 'Use detailed customer profiles to enhance personalization and drive better marketing outcomes.',
    },
  ];

  return (
    <div>
      <TopicData
        title="Customer Data Management"
        description="Achieve a 360-degree view of your customers with cloudcom's centralized Customer Data Management module. Synchronize and manage customer data from multiple sources, providing businesses with detailed insights into customer behaviors, preferences, and key attributes like Lifetime Value (LTV), Average Revenue Per User (ARPU), and purchase history."
        animation={dataSectionAnimation}
      />
      <TopicExample examples={examples} />
    </div>
  );
};

export default CustomerDataManagementScreen;
