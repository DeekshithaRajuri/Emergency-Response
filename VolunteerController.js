import Volunteer from "../models/Volunteer.js";

// POST /api/volunteers
export const addVolunteer = async (req, res) => {
  try {
    const { name, email, mobileNumber, skills, location, availability } = req.body;

    // Check for missing email or mobile number
    if (!email || !mobileNumber) {
      return res.status(400).json({ message: "Email and Mobile Number are required" });
    }

    // Check for existing volunteer with same email
    const existingVolunteer = await Volunteer.findOne({ email });
    if (existingVolunteer) {
      return res.status(400).json({ message: "Volunteer with this email already exists" });
    }

    const newVolunteer = new Volunteer({
      name,
      email,
      mobileNumber, // ✅ Include this
      skills,
      location,
      availability,
    });

    await newVolunteer.save();
    res.status(201).json({ message: "Volunteer registered successfully" });

  } catch (error) {
    console.error("Error registering volunteer:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// GET /api/volunteers
export const getVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).json(volunteers);
  } catch (error) {
    console.error("Error fetching volunteers:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
