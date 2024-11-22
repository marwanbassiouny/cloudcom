import { React, useState, useEffect, useRef } from 'react';
import './Experience.css';
import textContent from '../../../Assets/Data/HomeScreen/ExperienceComponent/ExperienceComponent.json';
import videoSrc from '../../../Assets/Icons/HomeScreen/ExperienceComponent/experience video.mov';

const Experience = () => {
  const initialNumber = 120;
  const targetNumber = 160; // Target number for animation
  const [currentNumbers, setCurrentNumbers] = useState(Array(4).fill(initialNumber));
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  // Trigger the animation when the section comes into view
  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true; // Ensure it animates only once
            startAnimation();
          }
        });
      },
      { threshold: 1.0 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const startAnimation = () => {
    setIsAnimating(true); // Start the spinning animation

    let animationInterval = setInterval(() => {
      setCurrentNumbers((prevNumbers) => {
        const updatedNumbers = prevNumbers.map((num) => {
          if (num < targetNumber) {
            // return Math.min(num + 10, targetNumber); // Increment by 10 until reaching 160
            return num + 10 // Increment by 10 until reaching 160
          }
          return num;
        });
        if (updatedNumbers.every((num) => num === targetNumber)) {
          clearInterval(animationInterval); // Stop the animation when all numbers reach 160
          setIsAnimating(false); // Stop spinning
        }
        return updatedNumbers;
      });
    }, 250); // Adjust the speed of increment (300ms per spin)
  };

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
          <a href="/ContactUs" className="product_button_glow get-in-touch-btn">{textContent.getInTouchButton} ↗</a>
        </div>
      </div>

      {/* Right Section: Stats */}
      <div className="experience-right">
        {currentNumbers.map((number, index) => (
          <div key={index} className="exp-stat-item exp-stat-item-right">
            <div
              className={`number-container ${
                isAnimating ? 'spinning' : ''
              }`}
            >
              {isAnimating ? (
                <div className="spinning-numbers">
                  {Array(10)
                    .fill()
                    .map((_, i) => (
                      <div key={i}>{number + 10}K+</div>
                    ))}
                </div>
              ) : (
                <div className="final-number">{number}K+</div>
              )}
            </div>
            <p className="state-text">{textContent[`stat${index + 1}Text`]}</p>
          </div>
        ))}
      </div>
      <a href="/ContactUs" className="product_button_glow get-in-touch-btn-mobile">{textContent.getInTouchButton} ↗</a>
    </div>
  );
};

export default Experience;
