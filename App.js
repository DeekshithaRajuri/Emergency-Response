import { Routes, Route, Navigate, NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Reports from "./components/Reports";
import Login from "./pages/AdminLogin";
import AdminDashboard from './pages/AdminDashboard';
import Register from "./components/Register";
import Volunteers from "./components/Volunteers";
import Home from "./components/Home";
import ReportForm from "./components/ReportForm";
import BloodDonation from "./components/BloodDonation";
import DonatePage from "./components/donate";
import EarthquakeSafety from "./components/EarthquakeSafety";
import Cyclonesafety from "./components/Cyclonesafety";
import Droughtsafety from "./components/Droughtsafety";
import Landslidesafety from "./components/Landslidesafety";
import Wildfiresafety from "./components/Wildfiresafety";
import Tsunamisafety from "./components/Tsunamisafety";
import Floodsafety from "./components/Floodsafety";
import  Pandemicsafety from "./components/Pandemicsafety";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

// Navbar Component
function Navbar() {
  const user = JSON.parse(sessionStorage.getItem("user")); // Get user from sessionStorage
  const navigate = useNavigate(); // To navigate after logout
  const isAdmin = user && user.role === "admin"; // Check if the user is an admin

  const handleLogout = () => {
    sessionStorage.removeItem("user"); // Remove user from sessionStorage
    sessionStorage.removeItem("authToken"); // Remove auth token from sessionStorage
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white custom-navbar">
      <div className="container">
        <NavLink className="navbar-brand" to="/"> 🚨 Emergency Response</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link nav-underline active-underline" : "nav-link nav-underline"} to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link nav-underline active-underline" : "nav-link nav-underline"} to="/reports">
                Reports
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link nav-underline active-underline" : "nav-link nav-underline"} to="/donate">
                Donate
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link nav-underline active-underline" : "nav-link nav-underline"} to="/blood-donation">
                Blood Donation
              </NavLink>
            </li>
            {/* Show login/logout link depending on user */}
            {user ? (
              <>
                {/* Show Admin Dashboard link if user is an admin */}
                {isAdmin && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin/dashboard">
                      Admin Dashboard
                    </NavLink>
                  </li>
                )}
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link nav-underline active-underline" : "nav-link nav-underline"} to="/login">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Main App Component
function App() {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error state

  // Fetch volunteers when the app loads
  useEffect(() => {
    fetchVolunteers();
  }, []);

  const fetchVolunteers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/volunteers");
      setVolunteers(res.data);
    } catch (error) {
      setError("Error fetching volunteers.");
    } finally {
      setLoading(false);
    }
  };

  // Display loading or error message
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register onRegister={fetchVolunteers} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/volunteers" element={<Volunteers volunteers={volunteers} />} />
        <Route path="/report" element={<ReportForm />} />
        <Route path="/blood-donation" element={<BloodDonation />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/safety/earthquake" element={<EarthquakeSafety />} />
        <Route path="/safety/cyclone" element={<Cyclonesafety />} />
        <Route path="/safety/flood" element={<Floodsafety />} />
        <Route path="/safety/fire" element={<Wildfiresafety />} />
        <Route path="/safety/drought" element={<Droughtsafety />} />
        <Route path="/safety/tsunami" element={<Tsunamisafety />} />
        <Route path="/safety/pandemic" element={<Pandemicsafety />} />
        <Route path="/safety/landslide" element={<Landslidesafety />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
