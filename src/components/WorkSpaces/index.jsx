import Link from 'next/link'
import styles from "./workSpaces.module.scss"
import Image from 'next/image'
import { WorkList } from "@/components"
export const WorkSpaces = () => {
    return (
        <div className={styles.workSpaces}>
            <div className={styles.bgImage}>
                <Image fill sizes='100%' src="/background1.jpg" alt='bg image' />
            </div>
            <header className={styles.header}>
                <div className={styles.left}>
                    <div className={styles.title}>
                        <h1>Magic Veteriner Kliniği</h1>
                        <div className={styles.hr} />
                    </div>
                    <h2>Çalışma Alanlarımız</h2>
                </div>
                <div className={styles.center}>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ut voluptatibus explicabo voluptates quaerat quae accusantium consequuntur. Sunt soluta, modi maxime iste delectus quidem voluptates harum deserunt ut aliquid libero pariatur excepturi tempore sed non!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit sunt consequuntur necessitatibus quam provident reprehenderit vero sapiente cumque laborum fugit, repudiandae porro dicta ex! Nihil nobis sapiente commodi ducimus?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut provident facere quae inventore ea nam? Voluptatibus corrupti suscipit assumenda nemo harum nam vero id rerum in consectetur eveniet minus facere, aspernatur at quos ipsa vitae asperiores nisi nobis nesciunt perspiciatis?
                    </p>
                </div>
                <Link href="/hizmetler" className={styles.right}>
                    Çalışma Alanları
                </Link>
            </header>
            <WorkList />
        </div>
    )
}
