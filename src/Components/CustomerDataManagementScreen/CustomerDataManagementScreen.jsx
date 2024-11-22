import React from 'react';
import TopicData from '../General/CompanyInfoPageTemplate/TopicDataComponent/TopicData';
import TopicExample from '../General/CompanyInfoPageTemplate/TopicExampleComponent/TopicExample';
import exampleAnimation1 from '../../Assets/Icons/CustomerDataManagementScreen/Example1Animation.mp4';
import exampleAnimation2 from '../../Assets/Icons/CustomerDataManagementScreen/Example2Animation.mp4';
import exampleAnimation3 from '../../Assets/Icons/CustomerDataManagementScreen/Example3Animation.mp4';
import exampleAnimation4 from '../../Assets/Icons/CustomerDataManagementScreen/Example4Animation.mp4';
import dataSectionAnimation from '../../Assets/Icons/CustomerDataManagementScreen/customerDataManagementIntro.mp4';
import PackageAndPricingV2 from '../PackagesAndPricesScreen/PricingPlansV2Component/PricingPlansV2Component';

const CustomerDataManagementScreen = () => {
 
const examples = [
    {
      animation: exampleAnimation1,
      isIcon : false,
      title: 'Holistic Customer Profiles',
      description: 'Gain a full understanding of customer behaviors and preferences for more targeted engagement.',
    },
    {
      animation: exampleAnimation2,
      isIcon : false,
      title: 'Data Synchronization',
      description: 'Effortlessly unify data from multiple sources to ensure consistent customer information.',
    },
    {
      animation: exampleAnimation3,
      isIcon : false,
      title: 'Actionable Insights',
      description: 'Identify key metrics like LTV and ARPU to tailor marketing efforts and increase ROI.',
    },
    {
      animation: exampleAnimation4,
      isIcon : false,
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
      <PackageAndPricingV2 />
    </div>
  );
};

export default CustomerDataManagementScreen;
