import { useState, useEffect } from "react";
import axios from "axios";
import Register from "./Register";
import Volunteers from "./Volunteers";

const VolunteerPage = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("register"); // 'register' or 'volunteers'

  const fetchVolunteers = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("http://localhost:5000/api/volunteers");
      setVolunteers(res.data);
    } catch (error) {
      console.error("Error fetching volunteers:", error.response);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVolunteers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Join Our Volunteer Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make a difference by contributing your time and skills to help those in need.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setActiveTab("register")}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                activeTab === "register"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Register Now
            </button>
            <button
              onClick={() => setActiveTab("volunteers")}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                activeTab === "volunteers"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              View Volunteers
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          {/* Register Section */}
          {activeTab === "register" && (
            <div className="p-8 sm:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Become a Volunteer
                </h2>
                <p className="text-gray-600">
                  Fill out the form below to join our team of dedicated volunteers.
                </p>
              </div>
              <Register onRegister={fetchVolunteers} />
            </div>
          )}

          {/* Volunteers List Section */}
          {activeTab === "volunteers" && (
            <div className="p-8 sm:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Our Amazing Volunteers
                </h2>
                <p className="text-gray-600">
                  Meet the wonderful people who make our mission possible.
                </p>
              </div>
              {isLoading ? (
                <div className="flex justify-center items-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <Volunteers volunteers={volunteers} />
              )}
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Total Volunteers
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {volunteers.length}
              </dd>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Active Projects
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">12</dd>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Hours Contributed
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">1,240</dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;