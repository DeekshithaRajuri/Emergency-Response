import React from 'react';
import './common.css';
const WildfireSafety = () => {
    return (
      <div className="safety-component">
        <header className="safety-header">
          <h1>Wildfire Safety Guide</h1>
          <p>Protect your home and family from wildfire dangers</p>
        </header>
  
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Wildfire approaching homes"
          />
          <div className="image-overlay">
            <h2>Wildfires Spread Fast</h2>
            <p>Preparation and early action are critical</p>
          </div>
        </div>
  
        <section className="safety-tips">
          <h2>Wildfire Safety Tips</h2>
          
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">🔥</div>
              <h3>Prevention & Preparation</h3>
              <ul>
                <li>Create defensible space around your home</li>
                <li>Use fire-resistant building materials</li>
                <li>Clear gutters and roofs of debris</li>
                <li>Prepare an evacuation plan</li>
                <li>Know multiple escape routes</li>
              </ul>
            </div>
  
            <div className="tip-card">
              <div className="tip-icon">🚨</div>
              <h3>During a Wildfire</h3>
              <ul>
                <li>Evacuate immediately if ordered</li>
                <li>Wear protective clothing if outside</li>
                <li>Close all windows and doors</li>
                <li>Turn off gas at the meter</li>
                <li>Leave lights on for visibility</li>
              </ul>
            </div>
  
            <div className="tip-card">
              <div className="tip-icon">🏡</div>
              <h3>After a Wildfire</h3>
              <ul>
                <li>Return only when authorities say it's safe</li>
                <li>Watch for hot spots and flare-ups</li>
                <li>Wear a mask to avoid smoke inhalation</li>
                <li>Check roof and attic for hidden burning</li>
                <li>Document damage for insurance</li>
              </ul>
            </div>
          </div>
        </section>
  
        {/* Additional sections similar to earthquake component */}
        
        <section className="additional-resources">
          <h2>Additional Resources</h2>
          <div className="resources-grid">
            <a href="https://www.ready.gov/wildfires" target="_blank" rel="noopener noreferrer">
              FEMA Wildfire Safety
            </a>
            <a href="https://www.nifc.gov/" target="_blank" rel="noopener noreferrer">
              National Interagency Fire Center
            </a>
            <a href="https://www.firewise.org/" target="_blank" rel="noopener noreferrer">
              Firewise USA
            </a>
          </div>
        </section>
  
        <footer className="safety-footer">
          <p>Wildfire preparedness starts with you - protect your home and community!</p>
        </footer>
      </div>
    );
  };
  export default WildfireSafety;
  