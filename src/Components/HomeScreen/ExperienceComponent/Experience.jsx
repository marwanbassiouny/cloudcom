import { React, useState, useEffect, useRef } from 'react';
import './Experience.css';
import textContent from '../../../Assets/Data/HomeScreen/ExperienceComponent/ExperienceComponent.json';
import videoSrc from '../../../Assets/Icons/HomeScreen/ExperienceComponent/experience video.mov';

const Experience = () => {
  const initialNumber = 120;
  const targetNumber = 160;
  const incrementValue = 2; // Smaller increments for slower animation
  const animationSpeed = 40; // Milliseconds delay between increments for slower animation

  const [numbers, setNumbers] = useState([initialNumber, initialNumber, initialNumber, initialNumber]);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false); // To ensure animation runs only once

  // Function to animate numbers
  const animateNumbers = () => {
    if (hasAnimated.current) return; // Prevent re-animation
    hasAnimated.current = true;

    numbers.forEach((_, index) => {
      let currentNumber = initialNumber;

      const incrementInterval = setInterval(() => {
        if (currentNumber < targetNumber) {
          currentNumber += incrementValue;
          setNumbers((prevNumbers) => {
            const newNumbers = [...prevNumbers];
            newNumbers[index] = currentNumber;
            return newNumbers;
          });
        } else {
          clearInterval(incrementInterval);
        }
      }, animationSpeed);
    });
  };

  // Intersection Observer to detect when the section is in the viewport
  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumbers();
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div
      className="experience-container page_padding_level_1 page_vertical_padding_level_0"
      ref={sectionRef}
    >
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
          <div key={index} className="exp-stat-item exp-stat-item-right">
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
