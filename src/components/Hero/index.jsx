import React from 'react'
import Image from "next/image"
import styles from "./hero.module.scss"

export const Hero = ({ src = "hero1.jpg", title = "", blog = false }) => {
    return (
        <div className={styles.heroSection}>
            <Image fill className={styles.heroImage} src={src} alt="Vet" />
        </div>
    )
}
