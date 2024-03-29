import { cards } from "@/mockdata/data"
import styles from "./card.module.scss"
import Image from "next/image"

export const Card = () => {
    return (
        <article className={styles.cardContainer}>
            {cards && cards.map(card => (
                <div key={card.id}
                    className={styles.card}
                >
                    <div className={styles.imageContainer}>
                        <Image sizes="100%" fill className={styles.categoryImage} src={card.image} alt="card Image" />

                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.title}>{card.title}</h2>
                    </div>
                </div>
            ))}
        </article>
    )
}
