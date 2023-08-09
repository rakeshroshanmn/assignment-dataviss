import React, { useState, useEffect } from "react";
import styles from "../Css/card.module.css";
function Card() {
  const [randomEnergy, setRandomEnergy] = useState(
    generateRandomValue(100, 300)
  );
  const [randomPredictedEnergy, setRandomPredictedEnergy] = useState(
    generateRandomValue(100, 300)
  );
  const [randomTime, setRandomTime] = useState(generateRandomTime());

  function generateRandomValue(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }
  function generateRandomTime() {
    const year = 2023;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    const hour = Math.floor(Math.random() * 24);
    const minute = Math.floor(Math.random() * 60);
    return `${day}/${month}/${year} ${hour}:${minute} PM`;
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomEnergy(generateRandomValue(100, 300));
      setRandomPredictedEnergy(generateRandomValue(100, 300));
      setRandomTime(generateRandomTime());
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className={styles["text-container"]}>
      <div className={styles["heading"]}>
        <div className={styles["title-text"]}>
          <div className={styles["text-title"]}>Energy :</div>
        </div>
        <div className={styles["subtext-text"]}>
          <div className={styles["text-subtext"]}>{randomEnergy} kWh</div>
        </div>
      </div>
      <div className={styles["heading"]}>
        <div className={styles["title-text"]}>
          <div className={styles["text-title"]}>Last Updated :</div>
        </div>
        <div className={styles["subtext-text"]}>
          <div className={styles["text-subtext"]}>{randomTime}</div>
        </div>
      </div>{" "}
      <div className={styles["heading"]}>
        <div className={styles["title-text"]}>
          <div className={styles["text-title"]}>
            Next Hour Predicted Energy :
          </div>
        </div>
        <div className={styles["subtext-text"]}>
          <div className={styles["text-subtext"]}>
            {randomPredictedEnergy} kWh
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
