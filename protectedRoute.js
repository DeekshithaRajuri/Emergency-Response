import express from "express";
import { protect, adminMiddleware } from "../middleware/authMiddleware.js";


const router = express.Router();

// A protected route that only users with a valid token can access
router.get("/protected", adminMiddleware, (req, res) => {
    // You can now access `req.user` which contains the decoded user info
    res.json({ msg: `Hello, ${req.user.role} user!` });
});

export default router;
