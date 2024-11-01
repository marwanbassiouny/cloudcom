import React from 'react';
import TopicIntro from '../General/CompanyInfoPageTemplate/TopicIntroComponent/TopicIntro';
import TopicData from '../General/CompanyInfoPageTemplate/TopicDataComponent/TopicData';
import TopicExample from '../General/CompanyInfoPageTemplate/TopicExampleComponent/TopicExample';
import introThemeImage from '../../Assets/Images/General/CompanyInfoPageTemplate/introThemeImage.svg'
import dateSectionIcon from '../../Assets/Icons/VerifyScreen/verifyScreen.svg'
import logoIcon1 from '../../Assets/Icons/VerifyScreen/ExampleIcon1.svg';
import logoIcon2 from '../../Assets/Icons/VerifyScreen/ExampleIcon2.svg';
import logoIcon3 from '../../Assets/Icons/VerifyScreen/ExampleIcon3.svg';
import logoIcon4 from '../../Assets/Icons/VerifyScreen/ExampleIcon4.svg';
import logoIcon5 from '../../Assets/Icons/VerifyScreen/ExampleIcon5.svg';

const VerifyScreen = () => {
 
const examples = [
    {
      icon: logoIcon1,
      title: 'Seamless Authentication',
      description: 'Provide users with a smooth, one-click authentication process across multiple channels, eliminating the need for repetitive logins or complex procedures.',
    },
    {
      icon: logoIcon2,
      title: 'Top-Notch Security',
      description: 'Ensure robust protection against unauthorized access with multi-layered authentication methods, reducing the risks of fraud and enhancing data security.',
    },
    {
      icon: logoIcon3,
      title: 'Regulatory Compliance',
      description: 'Meet global security standards and comply with industry regulations through the integration of secure authentication technologies, including OTPs.',
    },
    {
      icon: logoIcon4,
      title: 'Cost Efficiency',
      description: 'Reduce operational costs associated with traditional OTP methods by leveraging more cost-effective authentication alternatives.',
    },
    {
      icon: logoIcon5,
      title: 'Improved User Engagement',
      description: 'Increase user engagement by simplifying the login process, leading to higher retention rates and more frequent interactions.',
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
        title="Verify"
        description="cloudcom Verify offers a secure, multi-channel authentication solution that optimizes customer interactions while ensuring seamless, efficient user verification. By utilizing a range of channels, including SMS, WhatsApp, Email, and One-Time Passwords (OTPs), cloudcom Verify enhances the user experience by providing instant and secure access to services. This advanced solution addresses common authentication challenges, such as high costs and user frustration, offering a streamlined alternative for businesses operating in today's digital landscape."
        image={dateSectionIcon}
      />
      <TopicExample examples={examples} />
    </div>
  );
};

export default VerifyScreen;
