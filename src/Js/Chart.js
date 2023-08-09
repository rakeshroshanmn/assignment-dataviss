import React, { useState, useEffect } from "react";
import styles from "../Css/chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Chart() {
  const [chartData1, setChartData1] = useState([]);
  const [chartData2, setChartData2] = useState([]);
  useEffect(() => {
    const intervalId1 = setInterval(() => {
      const newDataPoint1 = {
        time: new Date().toLocaleTimeString(),
        value: Math.random() * 100,
      };
      setChartData1((prevData) => [...prevData, newDataPoint1]);
      if (chartData1.length > 10) {
        setChartData1((prevData) => prevData.slice(1));
      }
    }, 2000);

    const intervalId2 = setInterval(() => {
      const newDataPoint2 = {
        time: new Date().toLocaleTimeString(),
        value: Math.random() * 50,
      };
      setChartData2((prevData) => [...prevData, newDataPoint2]);
      if (chartData2.length > 10) {
        setChartData2((prevData) => prevData.slice(1));
      }
    }, 2000);

    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
    };
  }, [chartData1, chartData2]);
  return (
    <div className={styles["line-chart-container"]}>
      {/* First Line Chart */}
      <div className={styles["line-chart"]}>
        <div className={styles["chart-title"]}>Power(kW)</div>
        <LineChart width={700} height={400} data={chartData1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis label={{ angle: -90 }} />
          <Tooltip />
          <Legend />
          <Line dataKey="value" stroke="#07459f" />
        </LineChart>
      </div>

      {/* Second Line Chart */}
      <div className={styles["line-chart"]}>
        <div className={styles["chart-title"]}>Power Factor</div>
        <LineChart width={700} height={400} data={chartData2}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis label={{ angle: -90 }} />
          <Tooltip />
          <Legend />
          <Line dataKey="value" stroke="#07459f" />
        </LineChart>
      </div>
    </div>
  );
}

export default Chart;
