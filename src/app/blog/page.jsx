import { Detail, Hero } from '@/components'
import { PostCard } from '@/components'
import styles from "./blog.module.scss"

const Blog = () => {
    return (
        <section>
            <Hero
                src="/hero3.jpg"
                title="Vet Magic"
            />
            <Detail
                title="Bloglarımız"
                description="Blog yazılarımız"

            />
            <div className={styles.blogContainer}>
                <div className={styles.post}>
                    <PostCard />
                </div>
                <div className={styles.post}>
                    <PostCard />
                </div>
                <div className={styles.post}>
                    <PostCard />
                </div>
                <div className={styles.post}>
                    <PostCard />
                </div>
            </div>
        </section>
    )
}

export default Blog