import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", users: 30 },
  { name: "Feb", users: 45 },
  { name: "Mar", users: 60 },
  { name: "Apr", users: 40 },
  { name: "May", users: 70 },
  { name: "Jun", users: 50 },
];

function Welcome() {
  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">
        Welcome to the Dashboard
      </h2>
      <p className="text-gray-600 mb-6">
        Here’s a quick overview of user activity this year.
      </p>

      <div className="bg-white shadow-md rounded-xl p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Monthly User Stats
        </h3>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#3b82f6" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
