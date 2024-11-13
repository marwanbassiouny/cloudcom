import React from 'react';
import PricingPlans from './PricingPlansComponent/PricingPlans';
import PackageAndPricingV2 from './PricingPlansV2Component/PricingPlansV2Component';

const PackagesAndPricesScreen = () => {
  return (
    <div>
        <PricingPlans />
        <PackageAndPricingV2 />
    </div>
  );
};

export default PackagesAndPricesScreen;
