import Link from "next/link"
import styles from "./workCard.module.scss"
import Image from "next/image"

export const WorkCard = ({ category }) => {
    return (
        <>
            {category && (
                <article className={styles.workCard}>
                    <div className={styles.workInfo}>
                        {
                            category.icon && (
                                <div className={styles.iconContainer}>
                                    <Image
                                        fill
                                        sizes="100%"
                                        src={category.icon}
                                        alt={`${category.title} icon`}
                                        className={styles.icon}
                                    />
                                </div>
                            )
                        }
                        <h2 className={styles.title}>{category.title}</h2>
                        <p className={styles.description}> {category.description}</p>
                    </div>
                    <div className={styles.animation}>
                        {
                            category.image && (
                                <Image
                                    sizes="100%"
                                    fill
                                    src={category.image}
                                    alt={`${category.title} image`}
                                    className={styles.workImage}
                                />
                            )
                        }
                        <Link href={`/hizmetlerimiz/${category.slug}`}>
                            <h1>{category.title}</h1>
                        </Link>
                    </div>
                </article>
            )}
        </>
    )
}
