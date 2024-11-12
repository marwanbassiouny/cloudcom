import React from 'react';
import AboutUs from './AboutUsComponent/AboutUs';
import MissionAndVision from './MissionAndVisionComponent/MissionAndVision';
import CloudcomHelp from './CloudcomHelpComponent/CloudcomHelp';
import OurTeamComponent from './OurTeamComponent/OurTeamComponent';

const WhoAreWeScreen = () => {
  return (
    <div>
        <AboutUs />
        <MissionAndVision />
        <CloudcomHelp />
        {/* <OurTeamComponent /> */}
    </div>
  );
};

export default WhoAreWeScreen;