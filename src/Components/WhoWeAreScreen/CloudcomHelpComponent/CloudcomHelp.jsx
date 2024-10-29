import React from 'react';
import './CloudcomHelp.css';
import imageLeft from '../../../Assets/Icons/WhoWeAreScreen/CloudcomHelp/help.svg'

const CloudcomHelp = () => {
  return (
    <div className="cloudcom-help">
      
      <div className="cloudcom-help__header">
        <h2>
          At Cloudcom, we help you <span className="learn">learn</span>
        </h2>
      </div>

      <div className="cloudcom-help__content">
        <div className="cloudcom-help__image-section">
          <img src={imageLeft} alt="Cloudcom help visual" className="cloudcom-help__image" />
        </div>

        <div className="cloudcom-help__values-section">
          <div className="values-card">
            <h3>To CONNECT is our Value</h3>
            <div className="values-list">
              <div>
                <p><strong>Collaboration</strong><br /> Partnering with businesses to meet their unique needs.</p>
                <p><strong>Nimbleness</strong><br /> Adapting quickly to changing business demands.</p>
                <p><strong>Empathy</strong><br /> Delivering exceptional solutions with responsibility.</p>
                <p><strong>Trust</strong><br /> Supporting customer growth and success.</p>
              </div>
              <div>
                <p><strong>Ownership</strong><br /> Taking responsibility for delivering exceptional solutions.</p>
                <p><strong>Nurture</strong><br /> Supporting customer growth and success.</p>
                <p><strong>Customer Focus</strong><br /> Adapting quickly to changing business demands.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudcomHelp;
