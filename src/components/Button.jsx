import React from "react";
import styles from "./Button.module.css";

function Button(children, onClick, type) {
  return (
    <button className={`${styles.btn} ${styles.primary}`}>{children}</button>
  );
}

export default Button;
