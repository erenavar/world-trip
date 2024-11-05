import React from 'react';
import styles from "./SideBar.module.css";
import Logo from './Logo';
import AppNav from './AppNav';


export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo/>
      <AppNav/>

      <p>List of Cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>Lorem, ipsum dolor. {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
