import React from 'react';
import './DownloadReports.css';
import pdfIcon from '../../../Assets/Icons/ReportsScreen/DownloadReportsComponent/pdf.svg';
import downloadIcon from '../../../Assets/Icons/ReportsScreen/DownloadReportsComponent/download.svg';


const DownloadReports = () => {
    return (
        <div className="reports-container page_padding_level_1">
            {[1, 2].map((_, index) => (
                <div key={index} className="report-card">
                    <div className="report-content">
                        <div className='report-icon-container'>
                            <img src={pdfIcon} alt="PDF Icon" className="icon" />
                        </div>
                        <p className="report-text">Explore in-depth reports on customer engagement trends and CPaaS innovations.</p>
                    </div>
                    <button className="download-btn">
                        <span className="download-text">Download</span>
                        <div className="rep-right-section">
                            <span className="file-size">112 MB</span>
                            <img src={downloadIcon} alt="Download Icon" className="download-icon" />
                        </div>
                    </button>
                    
                </div>
            ))}
        </div>
    );
};

export default DownloadReports;
