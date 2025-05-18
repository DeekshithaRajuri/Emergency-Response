// backend/controllers/adminController.js

import User from "../models/User.js";

// Get all reports (example)
export const getAllReports = async (req, res) => {
  try {
    const reports = await Report.find(); // Assuming you have a Report model
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ msg: "Error retrieving reports", error: error.message });
  }
};

// Get all volunteers (example)
export const getAllVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find(); // Assuming you have a Volunteer model
    res.status(200).json(volunteers);
  } catch (error) {
    res.status(500).json({ msg: "Error retrieving volunteers", error: error.message });
  }
};

// Get all donations (example)
export const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find(); // Assuming you have a Donation model
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ msg: "Error retrieving donations", error: error.message });
  }
};

// Get all users (example)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Assuming you have a User model
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: "Error retrieving users", error: error.message });
  }
};

// Verify a report (example)
export const verifyReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) {
      return res.status(404).json({ msg: "Report not found" });
    }

    report.status = "verified";
    await report.save();
    res.status(200).json({ msg: "Report verified successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Error verifying report", error: error.message });
  }
};

// Delete a user (the function that was missing in your code)
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Error deleting user", error: error.message });
  }
};
