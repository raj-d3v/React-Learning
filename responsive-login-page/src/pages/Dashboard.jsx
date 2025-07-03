import { useState } from "react";
import SideBar from "../components/SideBar";
import Chart from "../components/Chart";
import Employees from "./Employees";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex min-h-screen">
      <SideBar setActiveTab={setActiveTab} />
      <main className="flex-1 p-8">
        {activeTab === "dashboard" && (
          <>
            <h1 className="text-3xl text-center font-semibold text-[#0C1421]">
              Dashboard
            </h1>
            <Chart />
          </>
        )}

        {activeTab === "employees" && <Employees />}
      </main>
    </div>
  );
}

export default Dashboard;
