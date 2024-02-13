import React from 'react'
import styles from "./postCard.module.scss"
import Image from 'next/image'
import Link from 'next/link'

export const PostCard = () => {
    return (
        <article className={styles.postCard}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    <Image fill sizes='100%' src="/card1.png" alt='blog image' />
                </div>
                <span className={styles.date}>01.01.2024</span>

            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>title</h1>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi dolor quia unde iste, consequatur exercitationem quod nihil ipsam saepe officia.</p>
                <Link href="/blog/test" className={styles.link}> read more</Link>
            </div>
        </article>
    )
}
