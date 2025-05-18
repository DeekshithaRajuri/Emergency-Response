import React from 'react';
import './common.css';
const LandslideSafety = () => {
    return (
      <div className="safety-component">
        <header className="safety-header">
          <h1>Landslide Safety Guide</h1>
          <p>Recognize the warning signs and stay safe</p>
        </header>
  
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Landslide damage to road and homes"
          />
          <div className="image-overlay">
            <h2>Landslides Happen Suddenly</h2>
            <p>Know the risks in your area</p>
          </div>
        </div>
  
        <section className="safety-tips">
          <h2>Landslide Safety Tips</h2>
          
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">🏔️</div>
              <h3>Before a Landslide</h3>
              <ul>
                <li>Learn if landslides have occurred in your area</li>
                <li>Watch for landslide warning signs</li>
                <li>Have an evacuation plan</li>
                <li>Consider professional assessment of property risks</li>
                <li>Monitor local weather forecasts</li>
              </ul>
            </div>
  
            <div className="tip-card">
              <div className="tip-icon">⚠️</div>
              <h3>During a Landslide</h3>
              <ul>
                <li>Evacuate immediately if safe to do so</li>
                <li>Move to higher ground if possible</li>
                <li>If escape not possible, curl into tight ball</li>
                <li>Avoid river valleys and low-lying areas</li>
                <li>Stay alert for secondary slides</li>
              </ul>
            </div>
  
            <div className="tip-card">
              <div className="tip-icon">🚧</div>
              <h3>After a Landslide</h3>
              <ul>
                <li>Stay away from slide area</li>
                <li>Check for injured or trapped people</li>
                <li>Listen for emergency information</li>
                <li>Watch for flooding</li>
                <li>Report broken utilities</li>
              </ul>
            </div>
          </div>
        </section>
  
        {/* Additional sections similar to earthquake component */}
        
        <section className="additional-resources">
          <h2>Additional Resources</h2>
          <div className="resources-grid">
            <a href="https://www.usgs.gov/natural-hazards/landslide-hazards" target="_blank" rel="noopener noreferrer">
              USGS Landslide Hazards
            </a>
            <a href="https://www.ready.gov/landslides-debris-flow" target="_blank" rel="noopener noreferrer">
              FEMA Landslide Safety
            </a>
            <a href="https://www.weather.gov/safety/landslide" target="_blank" rel="noopener noreferrer">
              NWS Landslide Safety
            </a>
          </div>
        </section>
  
        <footer className="safety-footer">
          <p>Landslides can occur with little warning - know the signs and stay safe!</p>
        </footer>
      </div>
    );
  };
  export default LandslideSafety;
