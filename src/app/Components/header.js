"use client"

import React from "react";
import styles from "./page.module.css";
export default function Header() {
    return (
        <header className={styles.header}>
            <p className={styles.headerp}><span style={{color:"gold"}}>AYUSHMAN</span><span style={{color:"white"}}>45</span></p>
            <a className={styles.button} href='./Ayushman Manishankar - Reverie Inc.pdf", "_blank"'>RESUME</a>
        </header>
    );
}