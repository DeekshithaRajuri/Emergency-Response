import React from 'react';
import './EarthquakeSafety.css';

const EarthquakeSafety = () => {
  return (
    <div className="earthquake-safety">
      <header className="safety-header">
        <h1>Earthquake Safety Guide</h1>
        <p>Be prepared, stay safe during, and recover after an earthquake</p>
      </header>

      <div className="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Earthquake damage showing importance of preparedness"
        />
        <div className="image-overlay">
          <h2>Your Safety Matters</h2>
          <p>Learn how to protect yourself and your loved ones</p>
        </div>
      </div>

      <section className="safety-tips">
        <h2>Earthquake Safety Tips</h2>
        
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon">🛌</div>
            <h3>Before an Earthquake</h3>
            <ul>
              <li>Secure heavy furniture to walls</li>
              <li>Create an emergency kit with food, water, and supplies</li>
              <li>Identify safe spots in each room (under sturdy furniture, away from windows)</li>
              <li>Practice "Drop, Cover, and Hold On" drills</li>
              <li>Know how to turn off gas, water, and electricity</li>
            </ul>
          </div>

          <div className="tip-card">
            <div className="tip-icon">🏃‍♂️</div>
            <h3>During an Earthquake</h3>
            <ul>
              <li><strong>Drop</strong> to your hands and knees</li>
              <li><strong>Cover</strong> your head and neck under sturdy furniture</li>
              <li><strong>Hold On</strong> until shaking stops</li>
              <li>If indoors, stay inside - don't run outside</li>
              <li>If outdoors, move to an open area away from buildings</li>
              <li>If driving, pull over and stop in a safe area</li>
            </ul>
          </div>

          <div className="tip-card">
            <div className="tip-icon">🏠</div>
            <h3>After an Earthquake</h3>
            <ul>
              <li>Expect aftershocks and be prepared to Drop, Cover, and Hold On again</li>
              <li>Check yourself and others for injuries</li>
              <li>Inspect your home for damage and gas leaks</li>
              <li>Listen to emergency broadcasts for information</li>
              <li>Use text messages instead of phone calls to communicate</li>
              <li>Be cautious when opening cabinets as items may fall</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="emergency-kit">
        <h2>Build Your Emergency Kit</h2>
        <div className="kit-content">
          <img 
            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Emergency preparedness kit"
            className="kit-image"
          />
          <div className="kit-items">
            <h3>Essential Items:</h3>
            <ul>
              <li>Water (1 gallon per person per day for 3 days)</li>
              <li>Non-perishable food (3-day supply)</li>
              <li>First aid kit and medications</li>
              <li>Flashlight with extra batteries</li>
              <li>Whistle to signal for help</li>
              <li>Dust masks and plastic sheeting</li>
              <li>Moist towelettes and garbage bags</li>
              <li>Wrench or pliers to turn off utilities</li>
              <li>Cell phone with chargers and backup battery</li>
              <li>Copies of important documents</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="interactive-section">
        <h2>Interactive Safety Resources</h2>
        
        <div className="resource-cards">
          <div className="resource-card">
            <h3>Earthquake Simulator</h3>
            <p>Experience what different magnitude earthquakes feel like</p>
            <a href="https://www.usgs.gov/natural-hazards/earthquake-hazards/science/earthquake-simulator" target="_blank" rel="noopener noreferrer">
              Try the Simulator
            </a>
          </div>
          
          <div className="resource-card">
            <h3>Safety Videos</h3>
            <div className="video-container">
              <iframe 
                width="100%" 
                height="200" 
                src="https://www.youtube.com/embed/_eQi6bWxV2A" 
                title="Earthquake Safety Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            <a href="https://www.youtube.com/results?search_query=earthquake+safety" target="_blank" rel="noopener noreferrer">
              More Safety Videos
            </a>
          </div>
          
          <div className="resource-card">
            <h3>Check Your Home Safety</h3>
            <p>Interactive checklist to earthquake-proof your home</p>
            <a href="https://www.earthquakeauthority.com/Preparedness/Household-Preparedness" target="_blank" rel="noopener noreferrer">
              Home Safety Checklist
            </a>
          </div>
        </div>
      </section>

      <section className="additional-resources">
        <h2>Additional Resources</h2>
        <div className="resources-grid">
          <a href="https://www.ready.gov/earthquakes" target="_blank" rel="noopener noreferrer">
            FEMA Earthquake Safety
          </a>
          <a href="https://www.usgs.gov/natural-hazards/earthquake-hazards" target="_blank" rel="noopener noreferrer">
            USGS Earthquake Hazards Program
          </a>
          <a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/earthquake.html" target="_blank" rel="noopener noreferrer">
            Red Cross Earthquake Safety
          </a>
          <a href="https://earthquake.usgs.gov/earthquakes/map/" target="_blank" rel="noopener noreferrer">
            Live Earthquake Map
          </a>
          <a href="https://www.shakeout.org/" target="_blank" rel="noopener noreferrer">
            Great ShakeOut Earthquake Drills
          </a>
          <a href="https://www.cdc.gov/disasters/earthquakes/index.html" target="_blank" rel="noopener noreferrer">
            CDC Earthquake Preparedness
          </a>
        </div>
      </section>

      <footer className="safety-footer">
        <p>Stay safe and be prepared! Share this information with your family and friends.</p>
        <div className="social-share">
          <button>Share on Facebook</button>
          <button>Share on Twitter</button>
          <button>Share via Email</button>
        </div>
        <p className="disclaimer">Note: This information is for general guidance only. Always follow official instructions from local authorities during emergencies.</p>
      </footer>
    </div>
  );
};

export default EarthquakeSafety;