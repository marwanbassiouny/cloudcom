
import {React,useState,useEffect} from 'react';
import './Intro.css'
import CloudComButton from '../../General/CloudComButton/CloudComButton';
import AnimatedIntroImage from './AnimatedIntroImageComponent/AnimatedIntroImage';
import IntroImage from './IntroImageComponent/IntroImage';


const textArray = [
  "Customer Support",
  "Customer Engagement",
  "Customer Acquisition",
];


const Intro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

    return (
      <div className="intro-container page_padding_level_1 page_vertical_padding_level_1">
        <div className="content-section">
          <p className="highlight-text text-no-break-overflow">cloudcom the starting point of</p>  
          <p key={currentIndex} className="highlight-text slide-text gradient-text text-no-break-overflow">{textArray[currentIndex]}</p>
          <div className='intro-subtitle-section'>
            <p className="intro-sub-title">Learn. Segment. Connect. Engage. Analyze.</p>
            <p className="intro-sub-title">Support. Your customer.</p>
          </div>
          <div className="demo-btn"> 
            <CloudComButton text="Book a Demo" link="https://portal.cloudcom.io/login" glow='glow' width='183' height='40' />
          </div>
        </div>
       {/* <AnimatedIntroImage /> */}
       <IntroImage />
      </div>
    );
  };
  
  export default Intro;