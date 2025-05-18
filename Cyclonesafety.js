import React from 'react';
import './common.css';
const CycloneSafety = () => {
    return (
      <div className="safety-component">
        <header className="safety-header">
          <h1>Cyclone & Hurricane Safety Guide</h1>
          <p>Prepare for and survive tropical storms and hurricanes</p>
        </header>
  
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1508515557561-0f38a957cb74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Hurricane approaching coast"
          />
          <div className="image-overlay">
            <h2>Don't Underestimate Tropical Storms</h2>
            <p>Wind and water can be deadly - prepare early</p>
          </div>
        </div>
  
        <section className="safety-tips">
          <h2>Cyclone Safety Tips</h2>
          
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">📅</div>
              <h3>Before the Storm</h3>
              <ul>
                <li>Know your evacuation zone and route</li>
                <li>Install storm shutters or board up windows</li>
                <li>Trim trees and secure outdoor items</li>
                <li>Prepare your emergency kit</li>
                <li>Charge all electronic devices</li>
              </ul>
            </div>
  
            <div className="tip-card">
              <div className="tip-icon">🌀</div>
              <h3>During the Storm</h3>
              <ul>
                <li>Stay indoors away from windows</li>
                <li>Take refuge in a small interior room</li>
                <li>Use flashlights, not candles</li>
                <li>Listen to weather updates</li>
                <li>Avoid using phones except for emergencies</li>
              </ul>
            </div>
  
            <div className="tip-card">
              <div className="tip-icon">🚧</div>
              <h3>After the Storm</h3>
              <ul>
                <li>Wait for official "all clear" before going outside</li>
                <li>Watch for downed power lines</li>
                <li>Avoid flood waters</li>
                <li>Check on neighbors</li>
                <li>Document damage for insurance</li>
              </ul>
            </div>
          </div>
        </section>
  
        {/* Additional sections similar to earthquake component */}
        
        <section className="additional-resources">
          <h2>Additional Resources</h2>
          <div className="resources-grid">
            <a href="https://www.ready.gov/hurricanes" target="_blank" rel="noopener noreferrer">
              FEMA Hurricane Safety
            </a>
            <a href="https://www.nhc.noaa.gov/" target="_blank" rel="noopener noreferrer">
              National Hurricane Center
            </a>
            <a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/hurricane.html" target="_blank" rel="noopener noreferrer">
              Red Cross Hurricane Safety
            </a>
          </div>
        </section>
  
        <footer className="safety-footer">
          <p>Cyclone season preparedness can save lives and property!</p>
        </footer>
      </div>
    );
  };
  export default CycloneSafety;