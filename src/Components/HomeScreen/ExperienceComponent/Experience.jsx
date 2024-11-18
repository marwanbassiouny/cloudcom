import { React, useState, useRef } from 'react';
import './Experience.css';
import textContent from '../../../Assets/Data/HomeScreen/ExperienceComponent/ExperienceComponent.json';
import videoSrc from '../../../Assets/Icons/HomeScreen/ExperienceComponent/experience video.mov';

const Experience = () => {
  const initialNumber = 120;
  const targetNumber = 160;
  const incrementValue = 10;

  // Create a state for each number to track its current value
  const [numbers, setNumbers] = useState([initialNumber, initialNumber, initialNumber, initialNumber]);
  const [incrementIntervals, setIncrementIntervals] = useState(Array(4).fill(null));

  // Function to handle hover and increment number
  const handleMouseEnter = (index) => {
    clearInterval(incrementIntervals[index]); // Clear any previous interval on new hover

    let currentNumber = initialNumber;

    const incrementInterval = setInterval(() => {
      if (currentNumber < targetNumber) {
        currentNumber += incrementValue;
        setTimeout(() => {
          setNumbers((prevNumbers) => {
            const newNumbers = [...prevNumbers];
            newNumbers[index] = currentNumber;
            return newNumbers;
          });
        },);
      } else {
        clearInterval(incrementInterval);
      }
    }, 800);

    const newIntervals = [...incrementIntervals];
    newIntervals[index] = incrementInterval;
    setIncrementIntervals(newIntervals);
  };

  // Reset number to initial value on mouse leave
  const handleMouseLeave = (index) => {
    clearInterval(incrementIntervals[index]); // Clear the interval when leaving

    setNumbers((prevNumbers) => {
      const newNumbers = [...prevNumbers];
      newNumbers[index] = initialNumber;
      return newNumbers;
    });
  };

  return (
    <div className="experience-container page_padding_level_1 page_vertical_padding_level_1">
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
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
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
