"use client"

import React from "react";
import styles from "./page.module.css";
export default function Header() {
    const openInNewWindow = () => {
        window.open("./Ayushman Manishankar - Reverie Inc.pdf", "_blank");
    }
    return (
        <header className={styles.header}>
            <p className={styles.headerp}><span style={{color:"gold"}}>AYUSHMAN</span><span style={{color:"white"}}>45</span></p>
            <button className={styles.button} onClick={openInNewWindow}>RESUME</button>
        </header>
    );
}