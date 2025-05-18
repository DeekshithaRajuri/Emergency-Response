import "./Home.css";
import sampleImage from "../assests/mylogo.jpg";
import { motion } from "framer-motion";
import DisasterSlideshow from "../components/DisasterSlideshow"; // ✅ Importing the slideshow
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate hook directly inside the component

  // Handle the Donate Now button click
  const handleDonateClick = () => {
    navigate("/donate"); // Navigate to the donate page when the button is clicked
  };

  return (
    <div className="home-container" style={{ fontFamily: "sans-serif" }}>
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="hero-left">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src={sampleImage}
            alt="Disaster Relief"
            className="hero-image"
          />
        </div>

        <div className="hero-right">
          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Help Can't Wait <br /> After a Disaster
          </motion.h2>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            In moments of heartbreak, your gift gives hope by providing shelter,
            food, relief supplies, financial support, and other assistance.
          </motion.p>

          <motion.button
  whileHover={{ scale: 1.1 }}
  className="donate-button"
  style={{
    marginTop: "20px",
    padding: "12px 24px",
    backgroundColor: "#e63946",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    width: "200px",         // Add width
    maxWidth: "100%",        // Safe for mobile
    alignSelf: "center",     // Center it if inside flex
    textAlign: "center",     // Center text
  }}
  onClick={handleDonateClick}
>
  DONATE NOW
</motion.button>

        </div>
      </section>

      {/* Buttons Section */}
      <section className="buttons-section">
        <h2 className="section-title">Take Action</h2>
        <div className="cards-container">
          {[
            { title: "Volunteer Registration", link: "/register" },
            { title: "View Volunteers", link: "/volunteers" },
            { title: "Report Emergency", link: "/report" },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              className="action-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.title}
            </motion.a>
          ))}
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="slideshow-section">
        <DisasterSlideshow />
      </section>
    </div>
  );
};

export default Home;
