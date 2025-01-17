import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUserAlt,
  FaTachometerAlt,
  FaUsers,
  FaTractor,
  FaWarehouse,
} from "react-icons/fa"; // Import necessary icons
import AdminNavbar from "./AdminNavbar";

function AdminSideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation(); // Get current path for active menu highlighting

  // Menu items with corresponding icons
  const menuItems = [
    { name: "Dashboard", path: "/", icon: <FaTachometerAlt /> },
    { name: "Customer", path: "/customer", icon: <FaUsers /> },
    { name: "Farmer", path: "/farmer", icon: <FaTractor /> },
    {
      name: "Collection Center",
      path: "/collection-center",
      icon: <FaWarehouse />,
    },
  ];

  return (
    <div>
      <AdminNavbar />
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`bg-[#34a853] text-white w-64 p-4 flex-shrink-0 transition-all duration-300 ${
            sidebarOpen ? "block" : "hidden md:block"
          }`}
        >
          {/* Sidebar Close Button (For mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white text-2xl absolute top-4 right-4"
            >
              <FaTimes />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setSidebarOpen(false)} // Close sidebar for mobile
                  className={`flex items-center space-x-3 p-3 rounded-lg text-sm font-medium hover:bg-[#fec52b] transition-all ${
                    location.pathname === item.path ? "bg-[#fec52b]" : ""
                  }`}
                >
                  {item.icon} {/* Render the icon */}
                  <span>{item.name}</span> {/* Render the menu name */}
                </Link>
              </li>
            ))}

            {/* Logout */}
            <li
              onClick={() => console.log("Logged out")} // Add your logout logic here
              className="cursor-pointer p-3 rounded-lg text-sm font-medium text-black transition-all flex items-center space-x-3"
            >
              <FaUserAlt /> {/* Icon for logout */}
              <span>Logout</span>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center p-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white text-3xl"
          >
            <FaBars />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 bg-[#f0f0f0] overflow-y-auto">
          <Outlet /> {/* Displays the active route's content */}
        </div>
      </div>
    </div>
  );
}

export default AdminSideBar;
