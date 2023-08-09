import React, { useState, useEffect } from "react";
import styles from "../Css/semicircle.module.css";

function Semicircle() {
  const [circleValues, setCircleValues] = useState([
    { value: "240.32", gradientId: "greenGradient1" },
    { value: "11.07", gradientId: "greenGradient2" },
    { value: "0.17", gradientId: "greenGradient3" },
    { value: "0.3", gradientId: "greenGradient4" },
    { value: "50.6", gradientId: "greenGradient5" },
  ]);

  function generateRandomValues(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  }

  function updateCircleValuesAndGradients() {
    const newCircleValues = circleValues.map((circle) => {
      const newValue = generateRandomValues(0, 100).toFixed(2);
      const newPercentage = parseFloat(newValue) / 100;
      return {
        value: newValue,
        gradientId: circle.gradientId,
        percentage: newPercentage,
      };
    });

    setCircleValues(newCircleValues);
  }

  useEffect(() => {
    const intervalId = setInterval(updateCircleValuesAndGradients, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className={styles["parameter-set"]}>
      <div className={styles["parameter-title"]}>Key Parameters</div>
      <div className={styles["parameters"]}>
        {circleValues.map((circle, index) => (
          <div key={index} className={styles["semicircle"]}>
            <svg
              width="70%"
              height="70%"
              viewBox="0 0 100 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id={circle.gradientId}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stop-color="#249689" />
                  <stop
                    offset={`${circle.percentage * 100}%`}
                    stop-color="#249689"
                  />
                  <stop
                    offset={`${circle.percentage * 100}%`}
                    stop-color="#C0C0C0"
                  />
                  <stop offset="100%" stop-color="#C0C0C0" />
                </linearGradient>
              </defs>
              <path
                d="M 50,50 m -45,0 a 45,45 0 1 1 90,0"
                stroke={`url(#${circle.gradientId})`}
                strokeWidth="2"
                strokeLinecap="round"
                fillOpacity="0"
              />
            </svg>
            <div className={styles["circle-text-container"]}>
              <div className={styles["circle-number"]}>{circle.value}</div>
              <div className={styles["circle-inner-text"]}>
                {index === 0
                  ? "Voltage(V)"
                  : index === 1
                  ? "Current(A)"
                  : index === 2
                  ? "Power(kW)"
                  : index === 3
                  ? "Power Factor"
                  : "Frequency(Hz)"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Semicircle;
