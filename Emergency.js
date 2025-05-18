import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    status: { type: String, enum: ["pending", "resolved"], default: "pending" },
    createdAt: { type: Date, default: Date.now }
});

// Check if the model is already defined to prevent overwriting
const Report = mongoose.models.Report || mongoose.model("Report", ReportSchema);

export default Report;
