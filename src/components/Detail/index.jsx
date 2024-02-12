import styles from "./detail.module.scss"
import Image from 'next/image'

export const Detail = ({ title, description, img }) => {
    return (
        <article className={styles.detail}>
            <div className={styles.info}>
                {
                    img ? (
                        <Image src={img} width={50} height={50} alt="hero image" className={styles.detailImage} />

                    ) : (
                        <div className={styles.hr} />

                    )
                }
                {title}
                <div className={styles.hr} />
            </div>
            <div className={styles.text}>
                {description}
            </div>
        </article>
    )
}
