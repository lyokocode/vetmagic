import styles from "./workList.module.scss"
import { categories } from '@/mockdata/data'
import { WorkCard } from '@/components'


export const WorkList = () => {
    return (
        <article className={styles.workList}>
            {categories && categories.map(category => (
                <WorkCard
                    key={category.id}
                    category={category}
                />
            ))}
        </article>
    )
}
