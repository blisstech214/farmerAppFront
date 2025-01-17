import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="bg-blue-100 p-4 rounded-lg shadow-md cursor-pointer"
          onClick={() => navigate("/customer")}
        >
          <h2 className="text-xl font-semibold mb-2">Total Customers</h2>
          <p className="text-2xl font-bold">500</p>
          <p className="text-blue-500">View Customers</p>
        </div>
        <div
          className="bg-green-100 p-4 rounded-lg shadow-md cursor-pointer"
          onClick={() => navigate("/farmer")}
        >
          <h2 className="text-xl font-semibold mb-2">Total Farmers</h2>
          <p className="text-2xl font-bold">350</p>
          <p className="text-blue-500">View Farmers</p>
        </div>
        <div
          className="bg-yellow-100 p-4 rounded-lg shadow-md cursor-pointer"
          onClick={() => navigate("/collection-center")}
        >
          <h2 className="text-xl font-semibold mb-2">
            Total Collection Centers
          </h2>
          <p className="text-2xl font-bold">12</p>
          <p className="text-blue-500">View Collection Centers</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
