import express from "express"; // ✅ Import Express
import { createReport, getReports } from "../controllers/reportController.js";

const router = express.Router(); // ✅ Define router

router.post("/", createReport);
router.get("/", getReports);

export default router; // ✅ Export router
