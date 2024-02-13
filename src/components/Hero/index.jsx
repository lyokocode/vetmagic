import Image from "next/image"
import styles from "./hero.module.scss"

export const Hero = ({ src = "hero1.jpg" }) => {
    return (
        <div className={styles.heroSection}>
            <Image sizes="100%" fill className={styles.heroImage} src={src} alt="Vet" />
        </div>
    )
}
