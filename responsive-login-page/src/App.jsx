import Login from "./pages/login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import TestAPI from "./pages/TestAPI";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/testAPI" element={<TestAPI />} />
      </Routes>
    </>
  );
}

export default App;
