import { Home, Users, LogOut } from "lucide-react";
import logo from "../assets/img/logo.png";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/auth/authSlice";

function SideBar({ setActiveTab }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser()); // Remove user from Redux
    window.location.href = "/"; // Redirect to login (quick way)
  };

  return (
    <aside className="w-64 bg-[#F3F9FA] p-5 shadow-md min-h-screen">
      <img className="w-40" src={logo} alt="logo" />
      <ul className="space-y-4 mt-8 text-[#313957] font-medium">
        <li
          onClick={() => setActiveTab("dashboard")}
          className="flex items-center gap-3 text-[#162D3A] p-3 cursor-pointer rounded-[18px] hover:bg-[#162D3A] hover:text-white transition duration-200 ease-in-out"
        >
          <Home className="w-5 h-5" />
          Dashboard
        </li>
        <li
          onClick={() => setActiveTab("employees")}
          className="flex items-center gap-3 text-[#162D3A] p-3 cursor-pointer rounded-[18px] hover:bg-[#162D3A] hover:text-white transition duration-200 ease-in-out"
        >
          <Users className="w-5 h-5" />
          Employees
        </li>
        <li
          onClick={handleLogout}
          className="flex items-center gap-3 text-[#162D3A] p-3 cursor-pointer rounded-[18px] hover:bg-[#162D3A] hover:text-white transition duration-200 ease-in-out"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
