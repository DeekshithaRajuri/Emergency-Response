
// routes/volunteers.js
import express from "express";
import Volunteer from "../models/Volunteer.js";  // Adjust this path to where your Volunteer model is defined
import { protect, adminMiddleware } from "../middleware/authMiddleware.js";   // Import your authentication middleware

const router = express.Router();

// For deleting a volunteer
router.delete("/:id", adminMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    await Volunteer.findByIdAndDelete(id);
    res.json({ message: "Volunteer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting volunteer" });
  }
});

export default router;


