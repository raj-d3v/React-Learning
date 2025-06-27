import React from "react";
import { Search, Bell, Settings } from "lucide-react";

function Header() {
  return (
    <header className="mb-4 text-xl font-semibold bg-white shadow-sm p-4 flex items-center justify-between">
      {/* Search bar */}
      <div className="flex items-center gap-2 w-full max-w-md">
        <Search className="text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Icons + Profile */}
      <div className="flex items-center gap-4">
        <Bell className="text-gray-600 hover:text-blue-600 cursor-pointer" />
        <Settings className="text-gray-600 hover:text-blue-600 cursor-pointer" />
        <img
          src="https://i.pravatar.cc/40" // Random placeholder avatar
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
}

export default Header;
