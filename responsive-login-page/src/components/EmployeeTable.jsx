import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import DeleteConfirmationModal from "./modals/DeleteConfirmationModal";

const getInitials = (name) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

function EmployeeTable({ employees, onDelete }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleDeleteClick = (emp) => {
    setSelectedEmployee(emp);
    setOpenModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete(selectedEmployee?.id);
    setOpenModal(false);
  };

  const handleSelectAll = () => {
    if (selectedAll) {
      setSelectedIds([]);
    } else {
      setSelectedIds(employees.map((emp) => emp.id));
    }
    setSelectedAll(!selectedAll);
  };

  const handleSelectOne = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((sid) => sid !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <input
                type="checkbox"
                checked={selectedAll}
                onChange={handleSelectAll}
              />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Employee ID</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Teams</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {employees.map((emp) => (
            <TableRow key={emp.id}>
              <TableCell>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(emp.id)}
                  onChange={() => handleSelectOne(emp.id)}
                />
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#E0F2FE] text-[#0369A1] rounded-full flex items-center justify-center font-semibold text-sm">
                    {getInitials(emp.name)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      {emp.name}
                    </span>
                    <span className="text-xs text-gray-500">{emp.email}</span>
                  </div>
                </div>
              </TableCell>

              <TableCell className="text-sm text-[#636363]">
                #23454GH6JYT6
              </TableCell>

              <TableCell className="text-sm">{emp.role}</TableCell>

              <TableCell>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    emp.id % 2 === 0
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {emp.id % 2 === 0 ? "Active" : "Inactive"}
                </span>
              </TableCell>

              <TableCell className="space-x-1">
                {emp.role.toLowerCase() === "developer" && (
                  <>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Product
                    </span>
                    <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Developer
                    </span>
                  </>
                )}

                {emp.role.toLowerCase() === "designer" && (
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Design
                  </span>
                )}

                {emp.role.toLowerCase() === "hr" && (
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    HR
                  </span>
                )}

                {emp.role.toLowerCase() === "manager" && (
                  <>
                    <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      HR
                    </span>
                    <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Manager
                    </span>
                  </>
                )}

                <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-0.5 rounded">
                  +{Math.floor(Math.random() * 6) + 1}
                </span>
              </TableCell>

              <TableCell>
                <Trash2
                  className="w-4 h-4 text-red-500 cursor-pointer hover:scale-110 transition"
                  onClick={() => handleDeleteClick(emp)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <DeleteConfirmationModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={handleConfirmDelete}
        employee={selectedEmployee}
      />
    </>
  );
}

export default EmployeeTable;
