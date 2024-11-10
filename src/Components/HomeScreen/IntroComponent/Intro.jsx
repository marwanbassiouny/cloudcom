
import {React,useState,useEffect} from 'react';
import './Intro.css'
import CloudComButton from '../../General/CloudComButton/CloudComButton';
import AnimatedIntroImage from './AnimatedIntroImageComponent/AnimatedIntroImage';
import textContent from "../../../Assets/Data/HomeScreen/Intro/Intro.json"
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
      <div className="intro-container">
        <div className="content-section">
          <h1 className="highlight-text">cloudcom the starting point of</h1>  
          <h1 key={currentIndex} className="slide-text gradient-text">{textArray[currentIndex]}</h1>
          <p>{textContent.headline3}</p>
          <div className="demo-btn"> 
            <CloudComButton text="Book a Demo" link="https://portal.cloudcom.io/login" glow='glow' />
          </div>
        </div>
       <AnimatedIntroImage />
      </div>
    );
  };
  
  export default Intro;