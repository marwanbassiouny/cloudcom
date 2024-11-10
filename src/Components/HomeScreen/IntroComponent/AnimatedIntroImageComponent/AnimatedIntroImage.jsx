import React, { useEffect, useState }  from 'react';
import './AnimatedIntroImage.css'
import baseImage from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/base_image.png';

import promoteLaunch1 from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/promoteLaunch1.svg';
import promoteLaunch2 from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/promoteLaunch2.svg';
import promoteLaunch3 from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/promoteLaunch3.svg';

import abandonedCartRecovery1 from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/abandonedCartRecovery1.svg';
import abandonedCartRecovery2 from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/abandonedCartRecovery2.svg';
import abandonedCartRecovery3 from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/abandonedCartRecovery3.svg';

import upsellAndCrossSell1 from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/upsellAndCrossSell1.svg';
import upsellAndCrossSell2 from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/upsellAndCrossSell2.svg';
import upsellAndCrossSell3 from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/upsellAndCrossSell3.svg';

import personalizeEngagement1 from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/personalizeEngagement1.svg';
import personalizeEngagement2 from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/personalizeEngagement2.svg';
import personalizeEngagement3 from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/personalizeEngagement3.svg';

import plIcon1 from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/plIcon1.svg';
import plIcon2 from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/plIcon2.svg';

import acIcon1 from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/acIcon1.svg';
import acIcon2 from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/acIcon2.svg';

import peIcon1 from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/peIcon1.svg';
import peIcon2 from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/peIcon1.svg';

import topIcon from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/topIcon.svg';
import bottomIcon from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/bottomIcon.svg';

import handIcon from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/handIcon.svg';

import xIcon from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/xIcon1.svg';
import elipse1Icon from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/eclipse1.svg';
import elipse2Icon from '../../../../Assets/Icons/HomeScreen/IntroComponent/Animation/Ellipse2.svg';


const AnimatedIntroImage = () => {

  const [promoteLaunchIconIndex, setPromoteLaunchIconIndex] = useState(0);
  const [abandonedCartIconsIndex, setabandonedCartIconsIndex] = useState(0);
  const [upsellIconsIndex, setUpsellIconsIndex] = useState(0);
  const [personalizeEngagementIndex, setPersonalizeEngagementIndex] = useState(0);
  
  const [plIconIndex, setPllIconIndex] = useState(0);
  const [acIconIndex, setAcIconIndex] = useState(0);
  const [peIconIndex, setPeIconIndex] = useState(0);
  
  const [tempIcon, setTempIcon] = useState(false);

  const promoteLaunchIcons = [
    <img src={promoteLaunch1} class="introSectionSVG promoteLaunch1 promoteLaunchScaleAnimation" alt="Ellipse" />,
    <img src={promoteLaunch2} class="introSectionSVG promoteLaunch2" alt="Ellipse" />,
    <img src={promoteLaunch3} class="introSectionSVG promoteLaunch2" alt="Ellipse" />
  ];

  const abandonedCartIcons = [
    <img src={abandonedCartRecovery1} class="introSectionSVG abandonedCart abandonedCartScaleAnimation" alt="Ellipse" />,
    <img src={abandonedCartRecovery2} class="introSectionSVG abandonedCart2" alt="Ellipse" />,
    <img src={abandonedCartRecovery3} class="introSectionSVG abandonedCart2" alt="Ellipse" />
  ];

  const upsellIcons = [
    <img src={upsellAndCrossSell1} class="introSectionSVG upsellIcon upsellIconScaleAnimation" alt="Ellipse" />,
    <img src={upsellAndCrossSell2} class="introSectionSVG upsellIcon2" alt="Ellipse" />,
    <img src={upsellAndCrossSell3} class="introSectionSVG upsellIcon2" alt="Ellipse" />
  ];

  const personalizeEngagementIcons = [
    <img src={personalizeEngagement1} class="introSectionSVG personalizeEngagement personalizeEngagemenScaleAnimation" alt="Ellipse" />,
    <img src={personalizeEngagement2} class="introSectionSVG personalizeEngagemen2" alt="Ellipse" />,
    <img src={personalizeEngagement3} class="introSectionSVG personalizeEngagemen2" alt="Ellipse" />
  ];

  const plIcons = [
    <img src={plIcon1} class="introSectionSVG plIcon1 plIconScaleAnimation" alt="Ellipse" />,
    <img src={plIcon1} class="introSectionSVG plIcon1 plIconScaleAnimation" alt="Ellipse" />,
    <img src={plIcon2} class="introSectionSVG plIcon2" alt="Ellipse" />,
  ];

  const acIcons = [
    <img src={acIcon1} class="introSectionSVG acIcon1 acIconScaleAnimation" alt="Ellipse" />,
    <img src={acIcon1} class="introSectionSVG acIcon1 acIconScaleAnimation" alt="Ellipse" />,
    <img src={acIcon2} class="introSectionSVG acIcon2" alt="Ellipse" />,
  ];

  const peIcons = [
    <img src={peIcon1} class="introSectionSVG peIcon1 peIconScaleAnimation" alt="Ellipse" />,
    <img src={peIcon1} class="introSectionSVG peIcon1 peIconScaleAnimation" alt="Ellipse" />,
    <img src={peIcon2} class="introSectionSVG peIcon2" alt="Ellipse" />,
  ];

  useEffect(() => {

    const interval = setInterval(() => {
      setTimeout(() => {
        setPromoteLaunchIconIndex((prevIndex) => (prevIndex + 1) % 3);
        setPllIconIndex((prevIndex) => (prevIndex + 1) % 3);

        setabandonedCartIconsIndex((prevIndex) => (prevIndex + 1) % 3);
        setAcIconIndex((prevIndex) => (prevIndex + 1) % 3);

        setUpsellIconsIndex((prevIndex) => (prevIndex + 1) % 3);

        setPersonalizeEngagementIndex((prevIndex) => (prevIndex + 1) % 3);
        setPeIconIndex((prevIndex) => (prevIndex + 1) % 3);
      }, 2000);

      // setPromoteLaunchIconIndex((prevIndex) => (prevIndex + 1) % 3);
      // setabandonedCartIconsIndex((prevIndex) => (prevIndex + 1) % 3);
      // setUpsellIconsIndex((prevIndex) => (prevIndex + 1) % 3);
      // setPersonalizeEngagementIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000); 

    return () => clearInterval(interval);
  }, [3]);

  // useEffect(() => {

  //   const interval2 = setInterval(() => {
  //     // setTimeout(() => {
        
  //     // }, 1000);
  //     // setPllIconIndex((prevIndex) => (prevIndex + 1) % 2);
  //     // setPllIconIndex((prevIndex) => (prevIndex + 1) % 2);
  //     // setAcIconIndex((prevIndex) => (prevIndex + 1) % 2);
  //     // setPeIconIndex((prevIndex) => (prevIndex + 1) % 2);
  //   }, 6000); 

  //   return () => clearInterval(interval2);
  // }, [2]);

    return (
        <div className="intro-image-section">
          <div className="animated-svgs-parent-container">
              {promoteLaunchIcons[promoteLaunchIconIndex]}
              {abandonedCartIcons[abandonedCartIconsIndex]}
              {upsellIcons[upsellIconsIndex]}
              {personalizeEngagementIcons[personalizeEngagementIndex]}

              {plIcons[plIconIndex]}
              {acIcons[acIconIndex]}
              {peIcons[peIconIndex]}

              <img src={topIcon} class="introSectionSVG tobIcon tobIconScaleAnimation" alt="Ellipse" />
              <img src={bottomIcon} class="introSectionSVG bottomIcon bottomIconScaleAnimation" alt="Ellipse" />
          
              <img src={handIcon} class="introSectionSVG handIcon handIconAnimation" alt="Ellipse" />
              <img src={xIcon} class="introSectionSVG x1Icon x1IconAnimation" alt="Ellipse" />
              <img src={xIcon} class="introSectionSVG x2Icon x2IconAnimation" alt="Ellipse" />
              <img src={xIcon} class="introSectionSVG x3Icon x1IconAnimation" alt="Ellipse" />
              <img src={elipse1Icon} class="introSectionSVG elipse1Icon elipse1IconAnimation" alt="Ellipse" />
              <img src={elipse2Icon} class="introSectionSVG elipse2Icon elipse2IconAnimation" alt="Ellipse" />
          </div>
          <img src={baseImage} alt="Customer Support" className="support-image" />
        </div>
    );
  };
  
  export default AnimatedIntroImage;