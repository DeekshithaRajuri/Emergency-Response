import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobileNumber: { type: String, required: true }, // 🔥 Added mobile number, required
  skills: [String],
  location: { type: String },
  availability: { type: Boolean, default: false },
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

export default Volunteer;
