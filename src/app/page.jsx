import styles from "./page.module.scss"
import { Detail, Hero } from "@/components"


const HomePage = async () => {

    return (
        <div className={styles.homePage}>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem perspiciatis dolore doloremque possimus sapiente illum, maxime nam? Quisquam cum rerum assumenda enim laudantium aperiam harum in. Velit, libero voluptatibus.</p>
            </div>
        </div>
    )
}

export default HomePage