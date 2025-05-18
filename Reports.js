import axios from "axios";
import { useState, useEffect } from "react";

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/reports")
      .then((res) => setReports(res.data))
      .catch((err) => console.error("Error fetching reports:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-100 via-white to-red-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-red-200">
      <h2 className="text-3xl font-extrabold text-center text-red-600 mt-4 mb-10 drop-shadow">

          📍 Live Emergency Reports
        </h2>

        {reports.length === 0 ? (
          <p className="text-center text-gray-500 italic">No active reports. All clear!</p>
        ) : (
          <ul className="relative border-l-4 border-red-300 pl-6 space-y-10">
            {reports.map((report) => (
              <li key={report._id} className="relative">
                <span className="absolute -left-3 top-1.5 w-6 h-6 bg-red-400 rounded-full border-4 border-white shadow-md"></span>
                <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{report.title}</h3>
                      <p className="text-gray-600 mt-1 text-sm">{report.description}</p>
                    </div>
                    <span
                      className={`ml-4 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer 
                        ${report.status.toLowerCase() === "resolved"
                          ? "bg-green-100 text-green-700"
                          : report.status.toLowerCase() === "pending"
                          ? "bg-blue-600 text-black shadow-lg hover:bg-blue-700"
                          : "bg-red-100 text-red-700"
                        }`}
                    >
                      {report.status}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Reports;
