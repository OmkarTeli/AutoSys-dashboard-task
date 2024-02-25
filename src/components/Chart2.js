import React from "react";
import ReactECharts from "echarts-for-react";

const Chart2 = () => {
  const option = {
    xAxis: {
      type: "category",
      data: [
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
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [
          10000, 12000, 10000, 40000, 50000, 10000, 30000, 20000, 10000, 20000,
          12000, 40000,
        ],
        type: "bar",
        itemStyle: {
          color: "#128c7e", // Set the color of the bars
        },
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "400px", width: "100%" }}
      className="react_for_echarts"
    />
  );
};

export default Chart2;
