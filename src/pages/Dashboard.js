import React from "react";
import Chart2 from "../components/Chart2.js";
import "../component.css";

function Dashboard() {
  return (
    <div className="w-full flex flex-col space-y-6 py-12 px-14 bgcolor">
      <h2>Dashboard</h2>

      <div className="flex space-x-8">
        <div className="w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600">
          <span>Omkar Teli</span>
          <span className="text-gray-500">Your Profit : Rs.20000</span>
        </div>
        <div className="w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600">
          <span>Omkar Teli</span>
          <span className="text-gray-500">Expenses : Rs.12000</span>
        </div>
      </div>

      <div className="flex space-x-8 w-4/5 flex-col">
        <h2>Sales Chart</h2>
        <Chart2 className="w-4/5" />
      </div>

      <div className="flex space-x-8">
        <div className="w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 mt-5 text-gray-600">
          <span>Your Activity</span>
          <li className="mt-4">You Sell Macbook Air to AngelaYu</li>
        </div>
        <div className="w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 mt-5 text-gray-600">
          <span>Pending Bills</span>
          <li className="mt-4">Purchase Bill : Rs.7000</li>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
