// routes/adminRoutes.js
import express from "express";
import {
  getAllReports,
  getAllVolunteers,
  getAllDonations,
  getAllUsers,
  verifyReport,
  deleteUser,
} from "../controllers/adminController.js";
import { protect, adminMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// All these routes are admin-only
router.get("/dashboard", protect, adminMiddleware, (req, res) => {
  res.json({ msg: "Welcome to the Admin Dashboard!" });
});

router.get("/reports", protect, adminMiddleware, getAllReports);
router.get("/volunteers", protect, adminMiddleware, getAllVolunteers);
router.get("/donations", protect, adminMiddleware, getAllDonations);
router.get("/users", protect, adminMiddleware, getAllUsers);
router.patch("/verify-report/:id", protect, adminMiddleware, verifyReport);
router.delete("/user/:id", protect, adminMiddleware, deleteUser);

export { router as adminRoutes };
