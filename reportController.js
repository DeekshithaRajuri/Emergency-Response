import Report from "../models/Emergency.js";
export const createReport = async (req, res) => {
    const report = new Report(req.body);
    await report.save();
    res.json(report);
};
export const getReports = async (req, res) => {
    const reports = await Report.find();
    res.json(reports);
};