import React from 'react';
import TopicIntro from '../General/CompanyInfoPageTemplate/TopicIntroComponent/TopicIntro';
import TopicData from '../General/CompanyInfoPageTemplate/TopicDataComponent/TopicData';
import TopicExample from '../General/CompanyInfoPageTemplate/TopicExampleComponent/TopicExample';
import introThemeImage from '../../Assets/Images/General/CompanyInfoPageTemplate/introThemeImage.svg'
import dateSectionIcon from '../../Assets/Icons/CustomerDataManagementScreen/customerDataManagement_DataSectionIcon.svg'
import logoIcon1 from '../../Assets/Icons/CustomerDataManagementScreen/ExampleIcon1.svg';
import logoIcon2 from '../../Assets/Icons/CustomerDataManagementScreen/ExampleIcon2.svg';
import logoIcon3 from '../../Assets/Icons/CustomerDataManagementScreen/ExampleIcon3.svg';
import logoIcon4 from '../../Assets/Icons/CustomerDataManagementScreen/ExampleIcon4.svg';
import dataSectionAnimation from '../../Assets/Icons/CustomerDataManagementScreen/customerDataManagementIntro.mp4';

const CustomerDataManagementScreen = () => {
 
const examples = [
    {
      icon: logoIcon1,
      title: 'Holistic Customer Profiles',
      description: 'Gain a full understanding of customer behaviors and preferences for more targeted engagement.',
    },
    {
      icon: logoIcon2,
      title: 'Data Synchronization',
      description: 'Effortlessly unify data from multiple sources to ensure consistent customer information.',
    },
    {
      icon: logoIcon3,
      title: 'Actionable Insights',
      description: 'Identify key metrics like LTV and ARPU to tailor marketing efforts and increase ROI.',
    },
    {
      icon: logoIcon4,
      title: 'Improved Targeting',
      description: 'Use detailed customer profiles to enhance personalization and drive better marketing outcomes.',
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
        title="Customer Data Management"
        description="Achieve a 360-degree view of your customers with cloudcom's centralized Customer Data Management module. Synchronize and manage customer data from multiple sources, providing businesses with detailed insights into customer behaviors, preferences, and key attributes like Lifetime Value (LTV), Average Revenue Per User (ARPU), and purchase history."
        image={dataSectionAnimation}
      />
      <TopicExample examples={examples} />
    </div>
  );
};

export default CustomerDataManagementScreen;
