import React from "react";
import SideBar from "../components/SideBar";
import styles from './AppLayout.module.css'

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar/>
    </div>
  );
}
