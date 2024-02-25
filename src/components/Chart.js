import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  tension: 0.3,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Your Sales",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Monthly Sales",
      data: [
        10000, 12000, 10000, 40000, 50000, 10000, 30000, 20000, 10000, 20000,
        12000, 40000,
      ],
      borderColor: "#075E54",
      backgroundColor: "#128c7e",
    },
  ],
};

export default function Chart() {
  return <Line className="text-white" options={options} data={data} />;
}
