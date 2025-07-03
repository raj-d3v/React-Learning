import { useState, useEffect } from "react";
import axios from "axios";
import AddEmployeeDialog from "@/components/modals/AddEmployeeModal";
import EmployeeTable from "@/components/EmployeeTable";
import Pagination from "@/components/Pagination";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Download, CircleQuestionMark, ListFilterIcon } from "lucide-react";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 10;

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/users?limit=50"
        );

        // Dummy roles to assign randomly
        const roles = ["Developer", "Designer", "Manager", "HR"];

        // Format data to match required fields
        const dataWithRoles = response.data.users.map((user, idx) => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
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
      <div>
        <TopBar />
      </div>

      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-[#0C1421] flex items-center gap-2">
            Employees <CircleQuestionMark className="text-gray-300 w-4" />
          </h1>

          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <AddEmployeeDialog onAdd={handleAdd}  />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center justify-between w-full mb-6 px-3 py-2 border rounded-lg bg-white">
          <input
            type="text"
            placeholder="Search by name, email or role..."
            className="w-full px-2 py-1 text-sm bg-transparent outline-none"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <button className="flex items-center gap-1 text-sm cursor-pointer px-3 py-2 rounded-lg">
            <ListFilterIcon className="w-4 h-4" />
            Filter
          </button>
        </div>

        {/* Employee Table */}
        <EmployeeTable employees={currentEmployees} onDelete={handleDelete} />
      </div>

      {/* Pagination Controls */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default Employees;
