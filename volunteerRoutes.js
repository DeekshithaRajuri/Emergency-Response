import express from "express"; // ✅ Import Express
import { addVolunteer, getVolunteers } from "../controllers/volunteerController.js";

const router = express.Router(); // ✅ Define router

// Routes
router.post("/", addVolunteer);
router.get("/", getVolunteers);

export default router; // ✅ Export router
