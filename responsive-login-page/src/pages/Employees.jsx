import { useState, useEffect } from "react";
import axios from "axios";
import AddEmployeeDialog from "@/components/modals/AddEmployeeModal";
import EmployeeTable from "@/components/EmployeeTable";
import Pagination from "@/components/Pagination";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 5;

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        const roles = ["Developer", "Designer", "Manager", "HR"];
        const dataWithRoles = response.data.map((user, idx) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          role: roles[idx % roles.length],
        }));
        setEmployees(dataWithRoles);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchEmployees();
  }, []);

  const handleAdd = (employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  const handleDelete = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  const filteredEmployees = employees.filter((emp) =>
    [emp.name, emp.email, emp.role]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  return (
    <>
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-[#0C1421]">
            All Employees
          </h1>
          <AddEmployeeDialog onAdd={handleAdd} />
        </div>

        {/* 🔍 Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name, email or role..."
            className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>

        {/* 👥 Employee Table */}
        <EmployeeTable employees={currentEmployees} onDelete={handleDelete} />
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default Employees;
