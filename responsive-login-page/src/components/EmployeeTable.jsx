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

function EmployeeTable({ employees, onDelete }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleDeleteClick = (emp) => {
    setSelectedEmployee(emp);
    setOpenModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete(selectedEmployee?.id);
    setOpenModal(false);
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((emp) => (
            <TableRow key={emp.id}>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.role}</TableCell>
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
