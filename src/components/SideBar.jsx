import React from 'react';
import styles from "./SideBar.module.css";
import Logo from './Logo';
import AppNav from './AppNav';
import { Outlet } from 'react-router-dom';


export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo/>
      <AppNav/>
      <Outlet/>


      <footer className={styles.footer}>
        <p className={styles.copyright}>Lorem, ipsum dolor. {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
