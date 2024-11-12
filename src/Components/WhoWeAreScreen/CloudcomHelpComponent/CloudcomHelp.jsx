import React from 'react';
import './CloudcomHelp.css';
import imageLeft from '../../../Assets/Icons/WhoWeAreScreen/CloudcomHelp/help.svg'
import imageRight from '../../../Assets/Icons/WhoWeAreScreen/CloudcomHelp/help2.svg'
import tickIcon from '../../../Assets/Icons/WhoWeAreScreen/CloudcomHelp/tick.svg';

const CloudcomHelp = () => {
  return (
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
          <p className='section_2-text'>
          Led by visionaries and communication experts, cloudcom’s leadership is committed to delivering impactful, innovative solutions that shape the future of business communication. With decades of experience in technology and customer engagement, our team works tirelessly to ensure that cloudcom remains at the forefront of CPaaS innovation.
          </p>
        </div>

        <div className="cloudcom-help__image-section_2">
          <img src={imageRight} alt="Cloudcom help visual" className="cloudcom-help__image" />
        </div>
      </div>
    </div>
  );
};

export default CloudcomHelp;
