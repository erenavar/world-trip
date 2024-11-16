import React from "react";
import styles from "./CityItem.module.css";

function CityItem({ city }) {
  const { cityName, emoji, date } = city;
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <h3 className={styles.date}>{date}</h3>
    </li>
  );
}

export default CityItem;
