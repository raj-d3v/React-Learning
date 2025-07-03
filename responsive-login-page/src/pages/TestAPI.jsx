import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import axios from "axios";

export default function TestAPI() {
  const addUser = async () => {
    try {
      const response = await axios.post("https://dummyjson.com/users/add", {
        firstName: "Raj",
        lastName: "Patel",
        age: 25,
        role: Developer,
        birthDate: "01/10/2000",
        domain: "D3V",
      });
      toast.success(`User ${response.data.firstName}  added successfully`);
      console.log("User added:", response.data);
    } catch (error) {
      toast.error(`User was not added`);
    }
  };

  const deleteUser = async () => {
    try {
      const response = await axios.delete("https://dummyjson.com/users/5");

      toast.success(`User with ID= ${response.data.id} was Deleted`);
    } catch (error) {
      toast.error("User cannot be deleted there was a error");
    }
  };

  return (
    <>
      <div className="text-center m-10">
        <h1 className="text-4xl mb-5">TEST API</h1>
        <button
          className="bg-black text-white px-4 py-2 rounded-xl mr-5 cursor-pointer"
          onClick={addUser}
        >
          Add User
        </button>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded-xl cursor-pointer"
          onClick={deleteUser}
        >
          Delete
        </button>
      </div>

      <Toaster />
    </>
  );
}
