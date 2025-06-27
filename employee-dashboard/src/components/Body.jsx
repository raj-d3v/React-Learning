import { Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import AllEmployees from "../pages/AllEmployees";
import RecentHires from "../pages/RecentHires";

function Body() {
  return (
    <main className="p-4 md:p-6">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/employees" element={<AllEmployees />} />
        <Route path="/employees/recent" element={<RecentHires />} />
      </Routes>
    </main>
  );
}

export default Body;
