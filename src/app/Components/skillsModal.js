"use client"
import React from "react";
import styles from './page.module.css'
export default function Skills({skillName,logo,color,href,textColor}) {
    return (
        <a style={{textDecoration:"none"}} href={href}>
            <div className={styles.skillsButton} style={{ backgroundColor: color }}>
                <img height={"80%"} src={logo} alt={skillName} />
                <p className={styles.p} style={{ color: textColor }}>{skillName}</p>
            </div>

        </a>
    )
}