import React, { useState } from 'react';
import './DonationPage.css';

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState(500);
  const [donationType, setDonationType] = useState('one-time');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pan: '',
    address: '',
    volunteer: false,
    skills: ''
  });
  const [activeTab, setActiveTab] = useState('financial');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your submission! We will contact you soon.');
  };

  const handleDonateNow = () => {
    alert(`Thank you for your ${donationType} donation of ₹${donationAmount}!`);
  };

  // Image URLs (replace with your actual image paths)
// Replace these with your actual image URLs or keep these working examples
const images = {
  hero: 'https://www.istockphoto.com/search/2/image-film?phrase=emergency+assistance',
  emergencySupplies: 'https://images.unsplash.com/photo-1593113598332-cd59a93c6138?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  recoverySupplies: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  volunteers: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  reliefDistribution: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  shelterConstruction: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  medicalCamp: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  happyFamily: 'https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  upiQr: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=disasterrelief@examplebank&pn=Disaster%20Relief%20Fund&cu=INR&am=' + donationAmount
};

  return (
    <div className="donation-page">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), url(${images.hero})` }}>
        <div className="hero-overlay">
          <h1>Disaster Relief Support</h1>
          <p>Help us provide immediate assistance and long-term recovery for disaster-affected communities</p>
          <button 
            className="cta-button"
            onClick={() => document.getElementById('donate-now').scrollIntoView({ behavior: 'smooth' })}
          >
            Donate Now
          </button>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="tabs">
        <button 
          className={activeTab === 'financial' ? 'active' : ''}
          onClick={() => setActiveTab('financial')}
        >
          Financial Donations
        </button>
        <button 
          className={activeTab === 'material' ? 'active' : ''}
          onClick={() => setActiveTab('material')}
        >
          Material Donations
        </button>
        <button 
          className={activeTab === 'volunteer' ? 'active' : ''}
          onClick={() => setActiveTab('volunteer')}
        >
          Volunteer
        </button>
      </div>

      {/* Financial Donations Tab */}
      {activeTab === 'financial' && (
        <section id="donate-now" className="donation-section">
          <h2>Financial Support for Disaster Relief</h2>
          <div className="donation-container">
            <div className="donation-options">
              <h3>Your Contribution Makes a Difference</h3>
              <p>Every rupee helps us provide essential supplies, shelter, and medical care to those affected by disasters.</p>
              
              <div className="donation-type">
                <label>
                  <input 
                    type="radio" 
                    name="donationType" 
                    value="one-time" 
                    checked={donationType === 'one-time'}
                    onChange={() => setDonationType('one-time')}
                  />
                  One-time Donation
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="donationType" 
                    value="monthly" 
                    checked={donationType === 'monthly'}
                    onChange={() => setDonationType('monthly')}
                  />
                  Monthly Donation
                </label>
              </div>

              <div className="amount-selector">
                <h4>Select Amount (₹)</h4>
                <div className="amount-buttons">
                  {[200, 500, 1000, 2000, 5000].map(amount => (
                    <button
                      key={amount}
                      className={donationAmount === amount ? 'selected' : ''}
                      onClick={() => setDonationAmount(amount)}
                    >
                      {amount}
                    </button>
                  ))}
                  <input
                    type="number"
                    placeholder="Other amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
                  />
                </div>
              </div>

              <button className="donate-button" onClick={handleDonateNow}>
                {donationType === 'monthly' ? 'Donate Monthly' : 'Donate Now'}
              </button>
            </div>

            <div className="payment-methods">
              <h3>Other Payment Methods</h3>
              
              <div className="payment-option">
                <h4>UPI Payment</h4>
                <div className="upi-container">
                  <img src={images.upiQr} alt="UPI QR Code" className="qr-code" />
                  <p>Scan the QR code or use this UPI ID:</p>
                  <p className="upi-id">disasterrelief@examplebank</p>
                  <p className="note">(Example UPI ID - replace with your organization's ID)</p>
                </div>
              </div>

              <div className="payment-option">
                <h4>Bank Transfer</h4>
                <div className="bank-details">
                  <p><strong>Account Name:</strong> Disaster Relief Foundation</p>
                  <p><strong>Account Number:</strong> 123456789012</p>
                  <p><strong>IFSC Code:</strong> EXMP0001234</p>
                  <p><strong>Bank Name:</strong> Example Bank</p>
                  <p><strong>Branch:</strong> Main Branch, Mumbai</p>
                </div>
              </div>

              <div className="payment-option">
                <h4>Cheque/Demand Draft</h4>
                <p>Payable to "Disaster Relief Foundation" and send to:</p>
                <address>
                  Disaster Relief Foundation<br />
                  123 Aid Street, Relief Nagar<br />
                  Mumbai - 400001<br />
                  Maharashtra, India
                </address>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Material Donations Tab */}
      {activeTab === 'material' && (
        <section className="material-section">
          <h2>Essential Items Needed</h2>
          <p>Your material donations help us provide immediate relief to affected families.</p>
          
          <div className="needs-container">
            <div className="needs-category">
              <h3>Immediate Needs (First 72 hours)</h3>
              <ul>
                <li>Dry food items (rice, dal, biscuits)</li>
                <li>Bottled water and water purification tablets</li>
                <li>Emergency shelter (tents, tarpaulins)</li>
                <li>Blankets and sleeping mats</li>
                <li>First aid kits and medicines</li>
                <li>Flashlights with extra batteries</li>
              </ul>
              <img src={images.emergencySupplies} alt="Emergency supplies" />
            </div>

            <div className="needs-category">
              <h3>Recovery Phase Needs (After 72 hours)</h3>
              <ul>
                <li>Hygiene kits (soap, toothpaste, sanitary napkins)</li>
                <li>Cooking utensils and stoves</li>
                <li>Clothing (new or gently used)</li>
                <li>School supplies for children</li>
                <li>Rebuilding materials</li>
                <li>Agricultural tools for farmers</li>
              </ul>
              <img src={images.recoverySupplies} alt="Recovery supplies" />
            </div>
          </div>

          <div className="dropoff-info">
            <h3>Drop-off Locations</h3>
            <div className="locations">
              <div className="location">
                <h4>Mumbai</h4>
                <address>
                  Disaster Relief Warehouse<br />
                  456 Aid Lane, Bandra East<br />
                  Mumbai - 400051<br />
                  Open: Mon-Sat, 9AM-5PM
                </address>
              </div>
              <div className="location">
                <h4>Delhi</h4>
                <address>
                  Central Collection Center<br />
                  789 Help Road, Connaught Place<br />
                  New Delhi - 110001<br />
                  Open: Mon-Sat, 10AM-6PM
                </address>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Volunteer Tab */}
      {activeTab === 'volunteer' && (
        <section className="volunteer-section">
          <h2>Join Our Volunteer Team</h2>
          <p>Your time and skills can make a tremendous difference in disaster response and recovery efforts.</p>
          
          <div className="volunteer-container">
            <div className="volunteer-info">
              <h3>Volunteer Opportunities</h3>
              <ul>
                <li>On-ground relief distribution</li>
                <li>Shelter construction and repair</li>
                <li>Medical support (doctors, nurses, first aid)</li>
                <li>Counseling and trauma support</li>
                <li>Coordination and logistics</li>
                <li>Fundraising and awareness campaigns</li>
              </ul>
              <img src={images.volunteers} alt="Volunteers at work" />
            </div>

            <div className="volunteer-form-container">
              <form onSubmit={handleSubmit}>
                <h3>Volunteer Registration</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name*</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number*</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <textarea 
                    id="address" 
                    name="address" 
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pan">PAN Number (for tax receipts)</label>
                  <input 
                    type="text" 
                    id="pan" 
                    name="pan" 
                    value={formData.pan}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group checkbox">
                  <input 
                    type="checkbox" 
                    id="volunteer" 
                    name="volunteer" 
                    checked={formData.volunteer}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="volunteer">I want to volunteer on-ground during disasters</label>
                </div>

                <div className="form-group">
                  <label htmlFor="skills">Skills/Expertise</label>
                  <textarea 
                    id="skills" 
                    name="skills" 
                    value={formData.skills}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Medical, construction, counseling, languages spoken, etc."
                  />
                </div>

                <button type="submit" className="submit-button">Submit Application</button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Impact Section */}
      <section className="impact-section">
        <h2>Your Impact</h2>
        <div className="impact-stats">
          <div className="stat">
            <h3>25,000+</h3>
            <p>Families helped annually</p>
          </div>
          <div className="stat">
            <h3>500+</h3>
            <p>Disaster responses</p>
          </div>
          <div className="stat">
            <h3>100+</h3>
            <p>Communities rebuilt</p>
          </div>
          <div className="stat">
            <h3>10,000+</h3>
            <p>Volunteers mobilized</p>
          </div>
        </div>
        <div className="impact-gallery">
          <img src={images.reliefDistribution} alt="Relief distribution" />
          <img src={images.shelterConstruction} alt="Shelter construction" />
          <img src={images.medicalCamp} alt="Medical camp" />
          <img src={images.happyFamily} alt="Helped family" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: help@disasterrelief.org</p>
            <p>Phone: +91 1800 123 4567</p>
            <p>24/7 Disaster Helpline: +91 1800 765 4321</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#donate-now">Donate Now</a></li>
              <li><a href="#volunteer">Volunteer</a></li>
              <li><a href="#needs">Current Needs</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#facebook"><i className="fab fa-facebook"></i></a>
              <a href="#twitter"><i className="fab fa-twitter"></i></a>
              <a href="#instagram"><i className="fab fa-instagram"></i></a>
              <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
            </div>
            <p>Registered NGO under Section 80G</p>
            <p>Tax exemption certificate available</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Disaster Relief Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DonationPage;