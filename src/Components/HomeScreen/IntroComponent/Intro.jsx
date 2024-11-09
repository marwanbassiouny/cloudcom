import {React,useState,useEffect} from 'react';
import introImage from '../../../Assets/Icons/HomeScreen/IntroComponent/IntroImage.svg';
import './Intro.css'
import CloudComButton from '../../General/CloudComButton/CloudComButton';
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
    }, 3000); // Change every 3 seconds

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
        <div className="intro-image-section">
          <img src={introImage} alt="Customer Support" className="support-image" />
        </div>
      </div>
    );
  };
  
  export default Intro;