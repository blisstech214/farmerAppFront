import React, { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
  FaChartLine,
  FaHome,
} from "react-icons/fa";

const AdminNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-purple-700 text-white px-6 py-4">
      {/* Left Section: Branding */}
      <div className="flex items-center space-x-4">
        <button className="text-2xl lg:hidden" onClick={toggleMenu}>
          {/* Hamburger Menu */}
          <span className="material-icons">menu</span>
        </button>
        <h1 className="text-xl font-bold">farmer</h1>
      </div>

      {/* Center Section: Search Bar */}
      <div className="flex items-center bg-white text-gray-800 px-4 py-2 rounded-md w-full sm:w-1/3">
        <FaSearch className="mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none border-none"
        />
      </div>

      {/* Right Section: User Actions */}
      <div className="flex items-center space-x-6 hidden lg:flex">
        <FaHome className="text-xl cursor-pointer" title="Home" />
        <FaChartLine className="text-xl cursor-pointer" title="Dashboard" />
        <FaEnvelope className="text-xl cursor-pointer" title="Messages" />
        <FaBell className="text-xl cursor-pointer" title="Notifications" />
        <FaCog className="text-xl cursor-pointer" title="Settings" />
        <div className="flex items-center space-x-2 cursor-pointer">
          <FaUserCircle className="text-2xl" />
          <span>Nick Jones</span>
        </div>
        <FaSignOutAlt className="text-xl cursor-pointer" title="Logout" />
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-16 left-0 w-full bg-purple-700 text-white p-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">farmer</h1>
          <button onClick={toggleMenu}>
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <FaHome className="text-xl cursor-pointer" title="Home" />
          <FaChartLine className="text-xl cursor-pointer" title="Dashboard" />
          <FaEnvelope className="text-xl cursor-pointer" title="Messages" />
          <FaBell className="text-xl cursor-pointer" title="Notifications" />
          <FaCog className="text-xl cursor-pointer" title="Settings" />
          <div className="flex items-center space-x-2 cursor-pointer">
            <FaUserCircle className="text-2xl" />
            <span>Nick Jones</span>
          </div>
          <FaSignOutAlt className="text-xl cursor-pointer" title="Logout" />
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
