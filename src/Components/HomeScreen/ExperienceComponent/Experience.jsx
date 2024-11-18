import { React, useState, useEffect, useRef } from 'react';
import './Experience.css';
import textContent from '../../../Assets/Data/HomeScreen/ExperienceComponent/ExperienceComponent.json'
import videoSrc from '../../../Assets/Icons/HomeScreen/ExperienceComponent/experience video.mov'; 

const Experience = () => {
  const initialNumber = 120;
  const targetNumber = 160;
  const incrementValue = 10;

  // Create a state for each number to track its current value
  const [numbers, setNumbers] = useState([initialNumber, initialNumber, initialNumber, initialNumber]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const experienceSectionRef = useRef(null);

  // Function to handle increment number animation
  const startAnimation = () => {
    let currentNumbers = [...numbers];
    let animationInProgress = true;

    const incrementInterval = setInterval(() => {
      if (!animationInProgress) {
        clearInterval(incrementInterval);
        return;
      }

      let allReachedTarget = true;
      currentNumbers = currentNumbers.map((currentNumber) => {
        if (currentNumber < targetNumber) {
          allReachedTarget = false;
          return currentNumber + incrementValue;
        }
        return currentNumber;
      });

      setNumbers(currentNumbers);

      if (allReachedTarget) {
        animationInProgress = false;
        clearInterval(incrementInterval);
      }
    }, 200); // Adjusted the speed to be relatively fast but noticeable
  };

  // IntersectionObserver to detect when the section is in the viewport
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          startAnimation();
          setHasAnimated(true);
        }
      });
    };

    const observerOptions = {
      root: null, // Use the viewport as the container
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (experienceSectionRef.current) {
      observer.observe(experienceSectionRef.current);
    }

    return () => {
      if (experienceSectionRef.current) {
        observer.unobserve(experienceSectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div ref={experienceSectionRef} className="experience-container page_padding_level_1 page_vertical_padding_level_1">
      {/* Left Section */}
      <div className="experience-left">
        <div className="video-mask-container">
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            style={{ pointerEvents: 'none' }}
            className="masked-video"
            src={videoSrc}
          />
          <svg viewBox="0 0 200 300" className="number-mask">
            <defs>
              <clipPath id="clip-mask">
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fontSize="320"
                  fontWeight="bold"
                  fill="white"
                >
                  6
                </text>
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="experience-text">
          <h2>{textContent.headline1}<br />{textContent.headline2}</h2>
          <p>
            {textContent.description1}<br />
            {textContent.description2}
          </p>
          <a href="#" className="get-in-touch-btn">{textContent.getInTouchButton} ↗</a>
        </div>
      </div>

      {/* Right Section: Stats */}
      <div className="experience-right">   
        {numbers.map((number, index) => (
          <div
            key={index}
            className="exp-stat-item exp-stat-item-right"
          >
            <h3 className="number">{number}K+</h3>
            <p className="state-text">{textContent[`stat${index + 1}Text`]}</p>
          </div>
        ))}
      </div>
      <a href="#" className="get-in-touch-btn-mobile">{textContent.getInTouchButton} ↗</a>
    </div>
  );
};

export default Experience;
