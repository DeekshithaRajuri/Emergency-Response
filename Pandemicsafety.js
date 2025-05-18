import React from 'react';
import './common.css';
const PandemicSafety = () => {
    return (
      <div className="safety-component">
        <header className="safety-header">
          <h1>Pandemic Preparedness Guide</h1>
          <p>Protect yourself and others from infectious diseases</p>
        </header>
  
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Healthcare worker in protective gear"
          />
          <div className="image-overlay">
            <h2>Diseases Spread Quickly</h2>
            <p>Your actions can protect many lives</p>
          </div>
        </div>
  
        <section className="safety-tips">
          <h2>Pandemic Safety Tips</h2>
          
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">🛡️</div>
              <h3>Prevention</h3>
              <ul>
                <li>Get recommended vaccinations</li>
                <li>Wash hands frequently with soap</li>
                <li>Avoid touching your face</li>
                <li>Cover coughs and sneezes</li>
                <li>Disinfect frequently touched surfaces</li>
              </ul>
            </div>
  
            <div className="tip-card">
              <div className="tip-icon">🏠</div>
              <h3>Preparedness</h3>
              <ul>
                <li>Maintain emergency supplies at home</li>
                <li>Have a 2-week supply of medications</li>
                <li>Plan for school/work closures</li>
                <li>Know your employer's pandemic plan</li>
                <li>Stay informed about local health alerts</li>
              </ul>
            </div>
  
            <div className="tip-card">
              <div className="tip-icon">🏥</div>
              <h3>During an Outbreak</h3>
              <ul>
                <li>Follow official health guidance</li>
                <li>Practice social distancing if recommended</li>
                <li>Wear masks if advised</li>
                <li>Stay home if sick</li>
                <li>Seek medical care when appropriate</li>
              </ul>
            </div>
          </div>
        </section>
  
        {/* Additional sections similar to earthquake component */}
        
        <section className="additional-resources">
          <h2>Additional Resources</h2>
          <div className="resources-grid">
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/communication/guidance-list.html" target="_blank" rel="noopener noreferrer">
              CDC Pandemic Guidance
            </a>
            <a href="https://www.who.int/emergencies/diseases/en/" target="_blank" rel="noopener noreferrer">
              WHO Disease Outbreaks
            </a>
            <a href="https://www.ready.gov/pandemic" target="_blank" rel="noopener noreferrer">
              FEMA Pandemic Preparedness
            </a>
          </div>
        </section>
  
        <footer className="safety-footer">
          <p>Public health is a shared responsibility - protect yourself and your community!</p>
        </footer>
      </div>
    );
  };
  export default PandemicSafety;
