import {React, useState } from 'react';
import './CloudcomHelp.css';
import imageLeft from '../../../Assets/Icons/WhoWeAreScreen/CloudcomHelp/help.svg'
import imageRight from '../../../Assets/Icons/WhoWeAreScreen/CloudcomHelp/help2.svg'
import tickIcon from '../../../Assets/Icons/WhoWeAreScreen/CloudcomHelp/tick.svg';
import cloudcomHelpVideo from '../../../Assets/Videos/WhoWeAreScreen/CloudcomHelpComponent/cloudcomHelpVideo.mp4';


const CloudcomHelp = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className="cloudcom-help">
      
      <div className="cloudcom-help__header">
        <h2>
          At Cloudcom, we help you <span className="learn">learn</span>
        </h2>
      </div>

      <div className="cloudcom-help__content page_padding_level_1">
        <div className="cloudcom-help__image-section">
          <img src={imageLeft} alt="Cloudcom help visual" className="cloudcom-help__image" />
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


      <div className="cloudcom-help__content_part2 page_padding_level_1">
        <div className="cloudcom-help__values-section_2">
          <p className='section_2-text page_context_font_size_0'>
          Led by visionaries and communication experts, cloudcom’s leadership is committed to delivering impactful, innovative solutions that shape the future of business communication. With decades of experience in technology and customer engagement, our team works tirelessly to ensure that cloudcom remains at the forefront of CPaaS innovation.
          </p>
        </div>

        <div className="cloudcom-help__image-section_2">
          <img src={imageRight} onClick={openModal}  alt="Cloudcom help visual" className="cloudcom-help__image_2" />

          {/* Modal for Video */}
          {isModalOpen && (
            <div className={`modal ${isModalOpen ? 'open' : ''}`} onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <video controls autoPlay>
                  <source src={cloudcomHelpVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Add a "Cancel" button below the video */}
                <button className="cancel-button" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        
        </div>
      </div>

    </div>
    </>
  );
};

export default CloudcomHelp;
