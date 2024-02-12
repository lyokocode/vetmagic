import styles from "./page.module.scss"
import { Card, Detail, Hero, WorkSpaces } from "@/components"


const HomePage = async () => {

    return (
        <section >
            <Hero
                src="/hero1.jpg"
                title="Vet Magic"
            />
            <Detail
                title="2023 | Ankara"
                description="Magic Veteriner Kliniği"

            />

            <div className={styles.about}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, pariatur nam totam tenetur ducimus libero quidem nulla adipisci qui voluptate?</p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium distinctio necessitatibus deserunt ullam temporibus officia tempore cum ad quam blanditiis molestias, nihil accusamus delectus expedita incidunt nulla perspiciatis hic in voluptas error aliquid! Perferendis, ipsum corporis laborum aut dicta ab?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos rerum fugit aut cupiditate facilis. Mollitia quasi nulla nihil ab debitis.
            </div>

            <Card />

            <WorkSpaces />
        </section>
    )
}

export default HomePage