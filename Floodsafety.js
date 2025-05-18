import React from 'react';
import './common.css';

const FloodSafety = () => {
  return (
    <div className="safety-component">
      <header className="safety-header">
        <h1>Flood Safety Guide</h1>
        <p>Protect yourself from rising waters and flood dangers</p>
      </header>

      <div className="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1580015915218-685fd3cbfa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Flooded neighborhood showing importance of preparedness"
        />
        <div className="image-overlay">
          <h2>Floods Can Happen Anywhere</h2>
          <p>Know your risks and how to stay safe</p>
        </div>
      </div>

      <section className="safety-tips">
        <h2>Flood Safety Tips</h2>
        
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon">🏠</div>
            <h3>Before a Flood</h3>
            <ul>
              <li>Know your flood risk and elevation</li>
              <li>Install check valves in sewer traps</li>
              <li>Waterproof your basement</li>
              <li>Create a flood emergency plan</li>
              <li>Keep important documents in waterproof containers</li>
            </ul>
          </div>

          <div className="tip-card">
            <div className="tip-icon">⚠️</div>
            <h3>During a Flood</h3>
            <ul>
              <li>Move to higher ground immediately</li>
              <li>Avoid walking or driving through flood waters</li>
              <li>Stay off bridges over fast-moving water</li>
              <li>Evacuate when told to do so</li>
              <li>Turn off utilities at main switches if instructed</li>
            </ul>
          </div>

          <div className="tip-card">
            <div className="tip-icon">🚑</div>
            <h3>After a Flood</h3>
            <ul>
              <li>Return home only when authorities say it's safe</li>
              <li>Avoid flood water as it may be contaminated</li>
              <li>Be aware of areas where flood waters have receded</li>
              <li>Clean and disinfect everything that got wet</li>
              <li>Document damage for insurance claims</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Additional sections similar to earthquake component */}
      
      <section className="additional-resources">
        <h2>Additional Resources</h2>
        <div className="resources-grid">
          <a href="https://www.ready.gov/floods" target="_blank" rel="noopener noreferrer">
            FEMA Flood Safety
          </a>
          <a href="https://www.floodsmart.gov/" target="_blank" rel="noopener noreferrer">
            FloodSmart.gov
          </a>
          <a href="https://www.weather.gov/safety/flood" target="_blank" rel="noopener noreferrer">
            NWS Flood Safety
          </a>
        </div>
      </section>

      <footer className="safety-footer">
        <p>Floods are the most common natural disaster. Stay informed and prepared!</p>
      </footer>
    </div>
  );
};

export default FloodSafety;