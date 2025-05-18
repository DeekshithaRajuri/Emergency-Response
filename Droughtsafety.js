import React from 'react';
import './common.css';
const DroughtSafety = () => {
    return (
      <div className="safety-component">
        <header className="safety-header">
          <h1>Drought Preparedness Guide</h1>
          <p>Conserve water and prepare for water shortages</p>
        </header>
  
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Cracked dry earth from drought"
          />
          <div className="image-overlay">
            <h2>Water Is Precious</h2>
            <p>Conserve today for a sustainable tomorrow</p>
          </div>
        </div>
  
        <section className="safety-tips">
          <h2>Drought Preparedness Tips</h2>
          
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">💧</div>
              <h3>Indoor Water Conservation</h3>
              <ul>
                <li>Install water-efficient fixtures</li>
                <li>Fix leaks immediately</li>
                <li>Take shorter showers</li>
                <li>Only run full loads in dishwashers/washers</li>
                <li>Collect shower warm-up water for plants</li>
              </ul>
            </div>
  
            <div className="tip-card">
              <div className="tip-icon">🌱</div>
              <h3>Outdoor Water Conservation</h3>
              <ul>
                <li>Plant drought-resistant landscaping</li>
                <li>Use mulch to retain soil moisture</li>
                <li>Water early morning or late evening</li>
                <li>Use a broom instead of hose for cleaning</li>
                <li>Install rain barrels for water collection</li>
              </ul>
            </div>
  
            <div className="tip-card">
              <div className="tip-icon">🛒</div>
              <h3>Emergency Preparedness</h3>
              <ul>
                <li>Store emergency water supply (1 gal/person/day)</li>
                <li>Learn alternative water sources</li>
                <li>Have water purification methods available</li>
                <li>Know how to shut off main water supply</li>
                <li>Monitor drought conditions in your area</li>
              </ul>
            </div>
          </div>
        </section>
  
        {/* Additional sections similar to earthquake component */}
        
        <section className="additional-resources">
          <h2>Additional Resources</h2>
          <div className="resources-grid">
            <a href="https://www.drought.gov/" target="_blank" rel="noopener noreferrer">
              National Integrated Drought Information System
            </a>
            <a href="https://www.epa.gov/watersense" target="_blank" rel="noopener noreferrer">
              EPA WaterSense Program
            </a>
            <a href="https://www.ready.gov/drought" target="_blank" rel="noopener noreferrer">
              FEMA Drought Preparedness
            </a>
          </div>
        </section>
  
        <footer className="safety-footer">
          <p>Water conservation is everyone's responsibility - every drop counts!</p>
        </footer>
      </div>
    );
  };
  export default DroughtSafety;