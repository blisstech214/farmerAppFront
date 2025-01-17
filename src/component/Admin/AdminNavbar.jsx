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
  FaBars,
} from "react-icons/fa";

const AdminNavbar = ({ toggleSidebar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-purple-700 text-white px-4 py-3 sm:px-6 sm:py-4">
      {/* Left Section: Branding */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Hamburger Menu Icon on small screens */}
        <button className="lg:hidden text-2xl" onClick={toggleSidebar}>
          <FaBars />
        </button>
        {/* Logo on all screen sizes */}
        <h1 className="text-lg sm:text-xl font-bold">farmer</h1>
      </div>

      {/* Center Section: Search Bar (Visible only on md and larger screens) */}
      <div className="hidden md:flex items-center bg-white text-gray-800 px-3 py-1 sm:px-4 sm:py-2 rounded-md w-full sm:w-1/3">
        <FaSearch className="mr-2 text-sm sm:text-base" />
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none border-none text-sm sm:text-base"
        />
      </div>

      {/* Right Section: User Actions (Desktop) */}
      <div className="flex items-center space-x-4 sm:space-x-6 hidden lg:flex text-sm sm:text-base">
        <FaHome className="cursor-pointer" title="Home" />
        <FaChartLine className="cursor-pointer" title="Dashboard" />
        <FaEnvelope className="cursor-pointer" title="Messages" />
        <FaBell className="cursor-pointer" title="Notifications" />
        <FaCog className="cursor-pointer" title="Settings" />
        <div className="flex items-center space-x-1 sm:space-x-2 cursor-pointer">
          <FaUserCircle className="text-xl sm:text-2xl" />
          <span className="hidden sm:block">Nick Jones</span>
        </div>
        <FaSignOutAlt className="cursor-pointer" title="Logout" />
      </div>

      {/* Mobile Menu: Show only when hamburger icon is clicked */}
      <div
        className={`lg:hidden absolute top-16 left-0 w-full bg-purple-700 text-white p-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg sm:text-xl font-bold">farmer</h1>
          {/* Close button for mobile menu */}
          <button onClick={toggleMenu} className="text-2xl">
            <FaBell />
          </button>
        </div>
        <div className="flex flex-col space-y-3 sm:space-y-4">
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
