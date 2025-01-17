import React from "react";
import { FaSearch } from "react-icons/fa";
import b from "../../assets/b.jpg";
function CollectionCenter() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Collection Center</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative w-full ">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white p-6 border border-gray-300 rounded-md shadow-lg mb-6">
        <p className="text-lg text-gray-600 mb-4">
          Welcome to the collection center. Here you can find details about
          stock collection and dispatch. Stay updated with the latest
          activities, stock status, and dispatch schedules.
        </p>
        <img
          src={b}
          alt="Collection Center"
          className="w-full h-auto rounded-md"
        />
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-100 p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">Total Items Collected</h2>
          <p className="text-2xl font-bold">1500</p>
        </div>
        <div className="bg-green-100 p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">
            Items Ready for Dispatch
          </h2>
          <p className="text-2xl font-bold">1200</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">Pending Dispatches</h2>
          <p className="text-2xl font-bold">300</p>
        </div>
      </div>

      {/* Stock Collection and Dispatch Table */}
      <div className="bg-white p-6 border border-gray-300 rounded-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          Stock Collection and Dispatch List
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-6 py-4 text-left text-sm font-medium text-gray-600">
                  Item ID
                </th>
                <th className="border px-6 py-4 text-left text-sm font-medium text-gray-600">
                  Item Name
                </th>
                <th className="border px-6 py-4 text-left text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="border px-6 py-4 text-left text-sm font-medium text-gray-600">
                  Dispatch Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border px-6 py-4">001</td>
                <td className="border px-6 py-4">Item A</td>
                <td className="border px-6 py-4 text-green-600">Collected</td>
                <td className="border px-6 py-4">2025-01-20</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-6 py-4">002</td>
                <td className="border px-6 py-4">Item B</td>
                <td className="border px-6 py-4 text-yellow-600">Pending</td>
                <td className="border px-6 py-4">2025-01-22</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-6 py-4">003</td>
                <td className="border px-6 py-4">Item C</td>
                <td className="border px-6 py-4 text-green-600">Collected</td>
                <td className="border px-6 py-4">2025-01-25</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CollectionCenter;
