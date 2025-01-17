import React from "react";
import { FaSearch } from "react-icons/fa";

function Farmer() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
        Farmer Dashboard
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center bg-white shadow-md rounded-md p-2 w-full  border border-gray-300">
          <FaSearch className="text-gray-500 ml-2" />
          <input
            type="text"
            placeholder="Search crops or activities"
            className="flex-1 p-2 outline-none text-gray-700"
          />
        </div>
      </div>

      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Crop Details
        </h2>
        <ul className="list-disc list-inside bg-gray-50 p-4 border border-gray-300 rounded-md">
          <li className="text-lg text-gray-700">
            Wheat: <span className="font-semibold text-green-700">500kg</span>
          </li>
          <li className="text-lg text-gray-700">
            Rice: <span className="font-semibold text-green-700">300kg</span>
          </li>
          <li className="text-lg text-gray-700">
            Corn: <span className="font-semibold text-green-700">200kg</span>
          </li>
          <li className="text-lg text-gray-700">
            Barley: <span className="font-semibold text-green-700">150kg</span>
          </li>
          <li className="text-lg text-gray-700">
            Soybeans:{" "}
            <span className="font-semibold text-green-700">100kg</span>
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-md p-6 mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Upcoming Activities
        </h2>
        <ul className="list-disc list-inside bg-gray-50 p-4 border border-gray-300 rounded-md">
          <li className="text-lg text-gray-700">
            Irrigation scheduled for January 15
          </li>
          <li className="text-lg text-gray-700">
            Fertilizer application on January 20
          </li>
          <li className="text-lg text-gray-700">
            Harvesting wheat starting February 1
          </li>
        </ul>
      </div>

      <div className="mt-8 text-center">
        <button className="bg-green-700 text-white px-6 py-3 rounded-md shadow hover:bg-green-800 transition">
          Add New Crop
        </button>
      </div>
    </div>
  );
}

export default Farmer;
