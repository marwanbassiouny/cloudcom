import React, { useState, useEffect } from "react";
import "./CloudcomHelp.css";
import helpSectionAnimation from "../../../Assets/Icons/WhoWeAreScreen/CloudcomHelp/helpSectionAnimation.mp4";
import helpSectionAnimation2 from "../../../Assets/Icons/WhoWeAreScreen/CloudcomHelp/helpSectionAnimation2.mp4";
import tickIcon from "../../../Assets/Icons/WhoWeAreScreen/CloudcomHelp/tick.svg";

const CloudcomHelp = () => {
  const words = ["learn", "segment", "engage", "analyze", "and connect with your clients"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Cycle through words
        setIsAnimating(false);
      }, 500); // Time for swipe-out animation
    }, 2000); // Time each word stays visible

    return () => clearTimeout(timer);
  }, [currentWordIndex]);

  const displayText =
    currentWordIndex === words.length - 1 ? (
      <>
        At Cloudcom,{" "}
        {words[currentWordIndex].split(" ").map((word, i) =>
          word === "connect" ? (
            <span key={i} className="blue-word">
              {word}
            </span>
          ) : (
            <span key={i}> {word} </span>
          )
        )}
      </>
    ) : (
      `At Cloudcom, we help you`
    );

  return (
    <div className="cloudcom-help">
      <div className="cloudcom-help__header">
        <div
          className={`help__header_first_container ${
            currentWordIndex === words.length - 1 ? "flex-small" : ""
          }`}
        >
          <h2 className="help__header_first">{displayText}</h2>
        </div>
        <div
          className={`help__header_second_container ${
            currentWordIndex === words.length - 1 ? "flex-large" : ""
          }`}
        >
          {currentWordIndex !== words.length - 1 && (
            <h2>
              <span
                className={`animated-word swipe blue-word ${
                  isAnimating ? "swipe-out" : "swipe-in"
                }`}
              >
                {words[currentWordIndex]}
              </span>
            </h2>
          )}
        </div>
      </div>

      <div className="cloudcom-help__content page_padding_level_1 page_vertical_padding_level_0">
        <div className="cloudcom-help__image-section">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="cloudcomHelpDataAnimation cloudcom-help__image"
          >
            <source src={helpSectionAnimation} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="cloudcom-help__values-section">
          <div className="values-card">
            <h3>To CONNECT is our Value</h3>
            <div className="values-list">
              <div>
                <p>
                  <img src={tickIcon} alt="tick" className="tickIconHelp" />
                  <strong>Collaboration</strong>
                  <br /> Partnering with businesses to meet their unique needs.
                </p>
                <p>
                  <img src={tickIcon} alt="tick" className="tickIconHelp" />
                  <strong>Nimbleness</strong>
                  <br /> Adapting quickly to changing business demands.
                </p>
                <p>
                  <img src={tickIcon} alt="tick" className="tickIconHelp" />
                  <strong>Empathy</strong>
                  <br /> Delivering exceptional solutions with responsibility.
                </p>
                <p>
                  <img src={tickIcon} alt="tick" className="tickIconHelp" />
                  <strong>Trust</strong>
                  <br /> Supporting customer growth and success.
                </p>
              </div>
              <div>
                <p>
                  <img src={tickIcon} alt="tick" className="tickIconHelp" />
                  <strong>Ownership</strong>
                  <br /> Taking responsibility for delivering exceptional solutions.
                </p>
                <p>
                  <img src={tickIcon} alt="tick" className="tickIconHelp" />
                  <strong>Nurture</strong>
                  <br /> Supporting customer growth and success.
                </p>
                <p>
                  <img src={tickIcon} alt="tick" className="tickIconHelp" />
                  <strong>Customer Focus</strong>
                  <br /> Adapting quickly to changing business demands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cloudcom-help__content_part2 page_padding_level_1 page_vertical_padding_level_0">
        <div className="cloudcom-help__values-section_2">
          <p className="cloudhelp_section2_title">Our Team</p>
          <p className="section_2-text page_context_font_size_0">
            Led by visionaries and communication experts, cloudcom’s leadership is committed
            to delivering impactful, innovative solutions that shape the future of business
            communication. With decades of experience in technology and customer engagement,
            our team works tirelessly to ensure that cloudcom remains at the forefront of
            CPaaS innovation.
          </p>
        </div>

        <div className="cloudcom-help__image-section_2">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="cloudcomHelpDataAnimation cloudcomHelpDataAnimation2"
          >
            <source src={helpSectionAnimation2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default CloudcomHelp;
