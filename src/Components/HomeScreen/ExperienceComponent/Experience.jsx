import {React,useEffect,useState} from 'react';
import './Experience.css';
import sixYearsImage from '../../../Assets/Icons/HomeScreen/ExperienceComponent/SixYearsImage.svg'; 
import textContent from '../../../Assets/Data/HomeScreen/ExperienceComponent/ExperienceComponent.json'

const Experience = () => {
  const initialNumber = 120;
  const finalNumber = 180;
  const incrementStep = 10;
  const [currentValues, setCurrentValues] = useState(Array(4).fill(initialNumber));
  const [hoveringIndex, setHoveringIndex] = useState(null);

  useEffect(() => {
    let interval;

    if (hoveringIndex !== null) {
      interval = setInterval(() => {
        setCurrentValues((prevValues) => {
          const newValues = [...prevValues];
          const currentValue = newValues[hoveringIndex];

          if (currentValue < finalNumber) {
            newValues[hoveringIndex] += incrementStep;
          } else {
            clearInterval(interval);
          }

          return newValues;
        });
      }, 1000); // Control the speed of the card flip and increment
    }

    return () => {
      clearInterval(interval);
    };
  }, [hoveringIndex]);

  const handleHover = (index) => {
    setHoveringIndex(index);
  };

  const handleMouseLeave = (index) => {
    setHoveringIndex(null);
    setCurrentValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = initialNumber; // Reset to initial value
      return newValues;
    });
  };

    return (
      <div className="experience-container">
        {/* Left Section */}
        <div className="experience-left">
          <img src={sixYearsImage} alt="6 Years" className="number-image" />
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
        {/*           
          <div className={`stat-item stat-item-right ${hoveredCard === 0 ? 'active' : ''}`} onMouseEnter={() => handleHover(0)} >
            <div className="number-card">
              <h3 className="number">120K+</h3>
            </div>
            <p>{textContent.stat1Text}</p>
          </div>

          <div className="stat-item stat-item-right">
            <h3 className="number" data-start="120" data-target="220">{textContent.stat2Headline}</h3>
            <p>{textContent.stat2Text}</p>
          </div>
          <div className="stat-item stat-item-right">
            <h3 className="number" data-start="120" data-target="220">{textContent.stat3Headline}</h3>
            <p>{textContent.stat3Text}</p>
          </div>
          <div className="stat-item stat-item-right">
            <h3 className="number" data-start="120" data-target="220">{textContent.stat4Headline}</h3>
            <p>{textContent.stat4Text}</p>
          </div>
        </div> */}
          
            {/* Each Stat Card */}
            {currentValues.map((value, index) => (
              <div
                className={`stat-item`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                key={index}
              >
                <div className={`number-card ${hoveringIndex === index ? 'flip-up' : ''}`}>
                  <h3 className="number">{value}K+</h3>
                </div>
                <p>{textContent[`stat${index + 1}Text`]}</p>
              </div>
            ))}
          </div>
      </div>
    );
  };
  
  export default Experience;