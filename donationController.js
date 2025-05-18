import Donation from "../models/Donations.js"; // Ensure this is correct

export const createDonation = async (req, res) => {
  try {
    const { name, bloodType, time, location } = req.body;

    // Check if all required fields are provided
    if (!name || !bloodType || !time || !location) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newDonation = new Donation({
      name,
      bloodType,
      time,
      location,
    });

    await newDonation.save(); // Save donation to MongoDB
    return res.status(201).json({ message: "Donation recorded successfully" });
  } catch (error) {
    console.error("Error saving donation:", error);
    return res.status(500).json({ error: "Server error" });
  }
};
