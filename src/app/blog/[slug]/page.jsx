import Image from "next/image"
import styles from "./singleBlog.module.scss"

const SingleBlog = () => {
    return (
        <div className={styles.singleBlog}>
            <div className={styles.imageContainer}>
                <Image fill sizes='100%' src="/card1.png" alt='blog image' />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Cerrahi Müdahaleden Önce hasta sahiplerinin yapması gerekenler </h1>
                <div className={styles.detail}>
                    <Image
                        src="/card2.png"
                        alt='blog image'
                        className={styles.avatar}
                        width={50}
                        height={50}
                    />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>İsmail Altıntop</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur magni error quasi mollitia officiis voluptas fugiat recusandae, nam sapiente, sint, cumque voluptatibus minus nulla? Iure consequatur harum ducimus animi tenetur, dignissimos vel magni adipisci nulla labore recusandae quasi numquam, neque sapiente eligendi, repellendus architecto nemo enim eaque. Ab, reiciendis reprehenderit est autem perferendis magnam et porro animi esse ratione? Veniam corrupti maxime totam illum, fugiat ipsa autem provident magnam.
                </div>
            </div>
        </div>
    )
}

export default SingleBlog