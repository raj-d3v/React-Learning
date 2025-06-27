import logo from "../assets/logo.png";
import React from "react";
import { Users, Wallet, BarChart2, Settings, Home } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [dropDown, setDropDown] = React.useState(false);

  function toggleDropDown() {
    setDropDown((prev) => !prev);
  }

  return (
    <aside className="w-64 bg-gray-100 text-black p-4 min-h-screen">
      <Link to="/">
        <img src={logo} alt="logo" className="w-40" />
      </Link>
      <div className="flex flex-col mt-10 space-y-2">
        <Link
          to="/"
          className="flex items-center gap-2 p-2.5 pl-2 rounded-xl transition duration-200 ease-in hover:bg-blue-800 hover:text-white text-left cursor-pointer"
        >
          <Home size={20} />
          <span>Home</span>
        </Link>
        {/* Employees button */}
        <button
          onClick={toggleDropDown}
          className="flex items-center gap-2 p-2.5 pl-2 rounded-xl transition duration-200 ease-in hover:bg-blue-800 hover:text-white text-left cursor-pointer"
        >
          <Users size={20} />
          <span>Employees</span>
        </button>

        {/* Dropdown submenu with Links */}
        {dropDown && (
          <div className="flex flex-col space-y-1 pl-8">
            <Link
              to="/employees"
              className="flex items-center gap-2 p-2.5 rounded-xl transition duration-200 ease-in hover:bg-blue-800 hover:text-white text-left"
            >
              <Users size={18} />
              <span>All Employees</span>
            </Link>

            <Link
              to="/employees/recent"
              className="flex items-center gap-2 p-2.5 rounded-xl transition duration-200 ease-in hover:bg-blue-800 hover:text-white text-left"
            >
              <Users size={18} />
              <span>Recent Hires</span>
            </Link>
          </div>
        )}

        {/* Reports */}
        <button className="flex items-center gap-2 p-2.5 pl-2 rounded-xl transition duration-200 ease-in hover:bg-blue-800 hover:text-white text-left cursor-pointer">
          <BarChart2 size={20} />
          <span>Reports</span>
        </button>

        {/* Payroll */}
        <button className="flex items-center gap-2 p-2.5 pl-2 rounded-xl transition duration-200 ease-in hover:bg-blue-800 hover:text-white text-left cursor-pointer">
          <Wallet size={20} />
          <span>Payroll</span>
        </button>

        {/* Settings */}
        <button className="flex items-center gap-2 p-2.5 pl-2 rounded-xl transition duration-200 ease-in hover:bg-blue-800 hover:text-white text-left cursor-pointer">
          <Settings size={20} />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
