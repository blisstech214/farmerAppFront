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
} from "react-icons/fa";
import AdminNavbar from "./AdminNavbar";

function AdminSideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

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
      {/* Admin Navbar */}
      <AdminNavbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`bg-[#34a853] text-white w-64 p-4 fixed top-0 left-0 h-full z-50 transition-all duration-300 md:block ${
            sidebarOpen ? "block" : "hidden"
          } md:relative md:w-64`}
        >
          {/* Close Button for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white text-2xl absolute top-4 right-4"
            >
              <FaTimes />
            </button>
          </div>
          {/* Sidebar Menu Items */}
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
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
            <li
              onClick={() => console.log("Logged out")}
              className="cursor-pointer p-3 rounded-lg text-sm font-medium text-black transition-all flex items-center space-x-3"
            >
              <FaUserAlt />
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
        <div className="flex-1 p-2 bg-[#f0f0f0] overflow-y-auto ml-0">
          {/* Outlet for page content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminSideBar;
