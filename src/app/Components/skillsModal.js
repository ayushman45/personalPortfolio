"use client"
import React from "react";
import styles from './page.module.css'
export default function Skills({skillName,logo,color,href,textColor}) {
    const openLinkInNewWindow = (href) => {
        window.open(href, "_blank");
    }
    return (
        <div className={styles.skillsButton} style={{ backgroundColor: color }} onClick={() => { openLinkInNewWindow(href) }}>
            <img height={"80%"} src={logo} alt={skillName} />
            <p className={styles.p} style={{ color: textColor }}>{skillName}</p>
        </div>
    )
}