// routes/reports.js
import express from "express";
import Report from "../models/Emergency.js";  // Adjust this path to where your Report model is defined
import { protect, adminMiddleware } from "../middleware/authMiddleware.js";  // Import your authentication middleware

const router = express.Router();

// For deleting a report
router.delete("/:id", adminMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    await Report.findByIdAndDelete(id);
    res.json({ message: "Report deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting report" });
  }
});

export default router;
