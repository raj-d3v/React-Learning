import React, { useState } from "react";

function AllEmployees() {
  const [searchTerm, setSearchTerm] = useState("");

  function search(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Employees</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Employee
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search employees..."
          value={searchTerm}
          onChange={search}
          className="w-full p-2 border rounded-lg shadow-sm"
        />
      </div>
    </div>
  );
}

export default AllEmployees;
