import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Import routes
import authRoutes from "./routes/authRoutes.js";
import reportRoutes from "./routes/emergencyRoutes.js";
import volunteerRoutes from "./routes/volunteerRoutes.js";
import incidentRoutes from "./routes/incident.js";
import donationRoutes from "./routes/donationRoutes.js";
import protectedRoute from "./routes/protectedRoute.js";
import { adminRoutes } from "./routes/adminRoutes.js";

// --- ADD these two new imports ---
import reportsRouter from './routes/reports.js';
import volunteersRouter from './routes/volunteers.js';

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Database connection (MongoDB)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// API Routes
app.use("/api", authRoutes); // Authentication routes
app.use("/api/reports", reportRoutes); // Emergency reports routes
app.use("/api/volunteers", volunteerRoutes); // Volunteer routes
app.use("/api/incidents", incidentRoutes); // Incident reporting routes
app.use("/api/donations", donationRoutes); // Donation routes
app.use("/api/admin", authRoutes); // Admin routes (protected)
app.use("/api", protectedRoute); // Protected route (authentication required)

// --- ADD these two new mountings ---
app.use("/api/reports", reportsRouter);      // new reports router
app.use("/api/volunteers", volunteersRouter); // new volunteers router

// Default route
app.get("/", (req, res) => {
  res.send("Volunteer-Based Emergency Response API is running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
