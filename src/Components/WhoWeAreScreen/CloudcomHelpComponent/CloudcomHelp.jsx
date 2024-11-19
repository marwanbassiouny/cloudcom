import {React, useState,useEffect } from 'react';
import './CloudcomHelp.css';
import helpSectionAnimation from '../../../Assets/Icons/WhoWeAreScreen/CloudcomHelp/helpSectionAnimation.mp4'
import helpSectionAnimation2 from '../../../Assets/Icons/WhoWeAreScreen/CloudcomHelp/helpSectionAnimation2.mp4'
import tickIcon from '../../../Assets/Icons/WhoWeAreScreen/CloudcomHelp/tick.svg';

const CloudcomHelp = () => {
  const words = ["learn", "segment", "engage", "analyze"];
  const finalText = "At cloudcom, and connect with your clients";
  const [currentText, setCurrentText] = useState(`At Cloudcom, we help you ${words[0]}`);
  const [fadeIn, setFadeIn] = useState(true);
  const [step, setStep] = useState(0); // Track which step we're on




  useEffect(() => {
    // Timer to control the fade-out and fade-in effect
    const timer = setTimeout(() => {
      setFadeIn(false); // Fade out the current text

      setTimeout(() => {
        // Determine the next text to show
        if (step < words.length - 1) {
          // Show next word in the list
          setCurrentText(`At Cloudcom, we help you ${words[step + 1]}`);
          setStep(step + 1);
        } else if (step === words.length - 1) {
          // After the last word, show the final text
          setCurrentText(finalText);
          setStep(step + 1);
        } else {
          // Restart from the beginning
          setCurrentText(`At Cloudcom, we help you ${words[0]}`);
          setStep(0);
        }
        setFadeIn(true); // Fade in the new text
      }, 500); // Fade out duration (0.5 seconds)
    }, 2500); // Keep the text visible for 2.5 seconds

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [step]);

  // Render the text, styling specific words
  const renderText = () => {
    if (step < words.length) {
      // Highlight every word in the words array when it's displayed
      const currentWord = words[step];
      return (
        <>
          At Cloudcom, we help you <span className="highlighted">{currentWord}</span>
        </>
      );
    } else if (step === words.length) {
      // When showing the final text, highlight the word "connect"
      const parts = finalText.split(" ");
      return (
        <>
          {parts.map((word, index) => (
            <span key={index} className={word.toLowerCase() === "connect" ? "highlighted" : ""}>
              {word}{" "}
            </span>
          ))}
        </>
      );
    }
    return currentText;
  };


  return (
    <>
    <div className="cloudcom-help">
      
      <div className="cloudcom-help__header">
        <h2>
          <span className={`learn ${fadeIn ? "fade-in" : "fade-out"}`}>{renderText()}</span>
        </h2>
        {/* at cloudcom,and connect with your clients */}
      </div>

      <div className="cloudcom-help__content page_padding_level_1 page_vertical_padding_level_0">
        <div className="cloudcom-help__image-section">
          {/* <img src={imageLeft} alt="Cloudcom help visual" className="cloudcom-help__image" /> */}
          <video   
          autoPlay
          loop
          muted
          playsInline 
          className='cloudcomHelpDataAnimation cloudcom-help__image'>
            <source src={helpSectionAnimation} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>

        <div className="cloudcom-help__values-section">
          <div className="values-card">
            <h3>To CONNECT is our Value</h3>
            <div className="values-list">
              <div>
                <p><img src={tickIcon} alt="tick" className="tickIconHelp" /><strong>Collaboration</strong><br /> Partnering with businesses to meet their unique needs.</p>
                <p><img src={tickIcon} alt="tick" className="tickIconHelp" /><strong>Nimbleness</strong><br /> Adapting quickly to changing business demands.</p>
                <p><img src={tickIcon} alt="tick" className="tickIconHelp" /><strong>Empathy</strong><br /> Delivering exceptional solutions with responsibility.</p>
                <p><img src={tickIcon} alt="tick" className="tickIconHelp" /><strong>Trust</strong><br /> Supporting customer growth and success.</p>
              </div>
              <div>
                <p><img src={tickIcon} alt="tick" className="tickIconHelp" /><strong>Ownership</strong><br /> Taking responsibility for delivering exceptional solutions.</p>
                <p><img src={tickIcon} alt="tick" className="tickIconHelp" /><strong>Nurture</strong><br /> Supporting customer growth and success.</p>
                <p><img src={tickIcon} alt="tick" className="tickIconHelp" /><strong>Customer Focus</strong><br /> Adapting quickly to changing business demands.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="cloudcom-help__content_part2 page_padding_level_1 page_vertical_padding_level_0">
        <div className="cloudcom-help__values-section_2">
          <p className='section_2-text page_context_font_size_0'>
          Led by visionaries and communication experts, cloudcom’s leadership is committed to delivering impactful, innovative solutions that shape the future of business communication. With decades of experience in technology and customer engagement, our team works tirelessly to ensure that cloudcom remains at the forefront of CPaaS innovation.
          </p>
        </div>

        <div className="cloudcom-help__image-section_2">
          <video   
          autoPlay
          loop
          muted
          playsInline 
          className='cloudcomHelpDataAnimation'>
            <source src={helpSectionAnimation2} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>
      </div>

    </div>
    </>
  );
};

export default CloudcomHelp;
