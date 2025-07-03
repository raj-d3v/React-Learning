import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";

function AddEmployeeDialog({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleAdd = () => {
    if (!name.trim() || !email.trim() || !role.trim()) return;

    onAdd({ id: Date.now(), name, email, role });
    setName("");
    setEmail("");
    setRole("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">
          <PlusCircleIcon />
          Add Employee
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="cursor-pointer">Add New Employee</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <Input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">
              Cancel
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button onClick={handleAdd} className="cursor-pointer">
              Add
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddEmployeeDialog;
