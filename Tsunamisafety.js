import React from 'react';
import './common.css';
const TsunamiSafety = () => {
    return (
      <div className="safety-component">
        <header className="safety-header">
          <h1>Tsunami Safety Guide</h1>
          <p>Recognize the danger and know how to reach safety</p>
        </header>
  
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Tsunami wave approaching shore"
          />
          <div className="image-overlay">
            <h2>Tsunamis Move Faster Than You</h2>
            <p>Know the warning signs and evacuation routes</p>
          </div>
        </div>
  
        <section className="safety-tips">
          <h2>Tsunami Safety Tips</h2>
          
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">🌊</div>
              <h3>Before a Tsunami</h3>
              <ul>
                <li>Know if you're in a tsunami hazard zone</li>
                <li>Learn community evacuation routes</li>
                <li>Practice walking evacuation routes</li>
                <li>Have emergency supplies ready</li>
                <li>Learn natural warning signs</li>
              </ul>
            </div>
  
            <div className="tip-card">
              <div className="tip-icon">⚠️</div>
              <h3>During a Tsunami</h3>
              <ul>
                <li>If in a tsunami zone and feel strong shaking, evacuate immediately</li>
                <li>Move inland and to higher ground</li>
                <li>Go on foot if possible - roads may be damaged</li>
                <li>If at sea, move to deeper water</li>
                <li>Stay away from the coast until officials say it's safe</li>
              </ul>
            </div>
  
            <div className="tip-card">
              <div className="tip-icon">🚧</div>
              <h3>After a Tsunami</h3>
              <ul>
                <li>Return only when officials say it's safe</li>
                <li>Stay away from damaged areas</li>
                <li>Check for injuries and help others if safe</li>
                <li>Be aware of continuing hazards</li>
                <li>Document damage for insurance</li>
              </ul>
            </div>
          </div>
        </section>
  
        {/* Additional sections similar to earthquake component */}
        
        <section className="additional-resources">
          <h2>Additional Resources</h2>
          <div className="resources-grid">
            <a href="https://www.ready.gov/tsunamis" target="_blank" rel="noopener noreferrer">
              FEMA Tsunami Safety
            </a>
            <a href="https://tsunami.gov/" target="_blank" rel="noopener noreferrer">
              National Tsunami Warning Center
            </a>
            <a href="https://www.weather.gov/safety/tsunami" target="_blank" rel="noopener noreferrer">
              NWS Tsunami Safety
            </a>
          </div>
        </section>
  
        <footer className="safety-footer">
          <p>Tsunamis are rare but deadly - preparation is key to survival!</p>
        </footer>
      </div>
    );
  };
  export default TsunamiSafety;