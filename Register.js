import React, { useState } from "react";
import axios from "axios";

function Register({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState(""); // 🔥 NEW state
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Construct data with mobileNumber
      const volunteerData = {
        name,
        email,
        mobileNumber, // 🔥 added here
        skills: skills.split(",").map(skill => skill.trim()),
        location,
        availability,
      };

      // Send to backend
      await axios.post("http://localhost:5000/api/volunteers", volunteerData);
      setMessage("Volunteer registered successfully!");

      // Clear form
      setName("");
      setEmail("");
      setMobileNumber(""); // 🔥 clear mobile number
      setSkills("");
      setLocation("");
      setAvailability(false);

      // Trigger re-fetch in parent if needed
      if (onRegister) onRegister();
    } catch (error) {
      console.error("Registration error:", error.response || error.message);
      setMessage("Failed to register volunteer.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Volunteer Registration</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleRegister}>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input 
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        {/* Mobile Number - NEW */}
        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input 
            type="text"
            className="form-control"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)} 
            required 
          />
        </div>

        {/* Skills */}
        <div className="mb-3">
          <label className="form-label">Skills (comma-separated)</label>
          <input 
            type="text"
            className="form-control"
            value={skills}
            onChange={(e) => setSkills(e.target.value)} 
            required 
          />
        </div>

        {/* Location */}
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input 
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)} 
            required 
          />
        </div>

        {/* Availability */}
        <div className="form-check mb-3">
          <input 
            type="checkbox"
            className="form-check-input"
            checked={availability}
            onChange={(e) => setAvailability(e.target.checked)} 
          />
          <label className="form-check-label">Available</label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;
