import React from 'react';
import TopicData from '../General/CompanyInfoPageTemplate/TopicDataComponent/TopicData';
import TopicExample from '../General/CompanyInfoPageTemplate/TopicExampleComponent/TopicExample';
import verifyScreenAnimation from '../../Assets/Icons/VerifyScreen/verifyScreenAnimation.mp4'
import Example1Animation from '../../Assets/Icons/VerifyScreen/Example1Animation.mp4';
import Example2Animation from '../../Assets/Icons/VerifyScreen/Example2Animation.mp4';
import Example3Animation from '../../Assets/Icons/VerifyScreen/Example3Animation.mp4';
import Example4Animation from '../../Assets/Icons/VerifyScreen/Example4Animation.mp4';
import Example5Animation from '../../Assets/Icons/VerifyScreen/Example5Animation.mp4';
import PackageAndPricingV2 from '../PackagesAndPricesScreen/PricingPlansV2Component/PricingPlansV2Component';

const VerifyScreen = () => {
 
const examples = [
    {
      animation: Example1Animation,
      isIcon : false,
      title: 'Seamless Authentication',
      description: 'Provide users with a smooth, one-click authentication process across multiple channels, eliminating the need for repetitive logins or complex procedures.',
    },
    {
      animation: Example2Animation,
      isIcon : false,
      title: 'Top-Notch Security',
      description: 'Ensure robust protection against unauthorized access with multi-layered authentication methods, reducing the risks of fraud and enhancing data security.',
    },
    {
      animation: Example3Animation,
      isIcon : false,
      title: 'Regulatory Compliance',
      description: 'Meet global security standards and comply with industry regulations through the integration of secure authentication technologies, including OTPs.',
    },
    {
      animation: Example4Animation,
      isIcon : false,
      title: 'Cost Efficiency',
      description: 'Reduce operational costs associated with traditional OTP methods by leveraging more cost-effective authentication alternatives.',
    },
    {
      animation: Example5Animation,
      isIcon : false,
      title: 'Improved User Engagement',
      description: 'Increase user engagement by simplifying the login process, leading to higher retention rates and more frequent interactions.',
    },
  ];

  return (
    <div>
      <TopicData
        title="Verify"
        description="Enrich your users with secure frictionless authentication experience, eliminate passwords entirely with our silent Password-less Authentication solution.
	In the era of cyber threats are increasingly sophisticated, now you can strengthen security with cloudcom Multi-channel OTP 2FA, provide robust protection against unauthorized access and activities."
        animation={verifyScreenAnimation}
      />
      <TopicExample examples={examples} />
      <PackageAndPricingV2 />
    </div>
  );
};

export default VerifyScreen;
