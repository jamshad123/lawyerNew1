import React from 'react';
import settings from '../../assets/settings.svg';
import './Settings.css';
import lawyer from '../../assets/lawyer.svg';

function Settings() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
    <div className="news-feed-header">
      <div className="left-sec">
        <img src={settings} alt="Settings Icon" className="icon" />
        <span className="news-text">Settings</span>
      </div>
      <div className="card-grid">
        <div className="card">
          <div className="box-1">
            <img src={lawyer} alt="End User Icon" className="icon" style={{ fontSize: "10px" }} />
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>Jospeh Cotchett</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Settings;

