import express from "express";
import nodemailer from "nodemailer";
import Report from "../models/Emergency.js";
import Volunteer from "../models/Volunteer.js";

const router = express.Router();

router.post("/report", async (req, res) => {
  try {
    const { title, description, location } = req.body;

    if (!title || !description || !location) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newReport = new Report({ title, description, location });
    await newReport.save();
    console.log("✅ New incident report saved:", newReport);

    await sendEmailToVolunteers(location, title, description);

    res.status(201).json({
      message: "Incident reported and email sent to volunteers",
      report: newReport
    });
  } catch (error) {
    console.error("❌ Error while reporting incident:", error);
    res.status(500).json({
      message: "An error occurred while processing the incident."
    });
  }
});

async function sendEmailToVolunteers(incidentLocation, incidentTitle, incidentDescription) {
  try {
    const volunteers = await Volunteer.find({ location: incidentLocation });
    console.log(`👥 Found ${volunteers.length} volunteer(s) in ${incidentLocation}`);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS // 16-character app password
      }
    });

    for (let volunteer of volunteers) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: volunteer.email,
        subject: "🚨 Emergency Alert: Incident in Your Area",
        text: `Hello ${volunteer.name},\n\nAn incident has been reported in your area (${incidentLocation}). Please assist if you can.\n\n📌 Title: ${incidentTitle}\n📝 Description: ${incidentDescription}\n\nStay Safe,\nEmergency Response Team`
      };

      const info = await transporter.sendMail(mailOptions);
      console.log(`📧 Email sent to ${volunteer.email}: ${info.response}`);
    }

  } catch (error) {
    console.error("❌ Error sending email to volunteers:", error);
  }
}

export default router;
