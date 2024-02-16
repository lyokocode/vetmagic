import { Contact, Detail, Hero, Map } from '@/components'
import styles from "./iletisim.module.scss"

const Iletisim = () => {
    return (
        <>
            <Hero
                src="/hero5.jpg"
                title="Vet Magic"
            />
            <Detail
                title="İletişim"
                description="Bizimle İletişime Geçin"

            />
            <section className={styles.contactContainer}>
                <div className={styles.text}>
                    <p>
                        Hizmetlerimizin kapsamı ve çalışma şartları hakkında bilgi almayı istemeniz
                        <br />
                        halinde, sitemizdeki iletişim kanallarından herhangi birini kullanarak
                        <br />
                        bizlerle iletişime geçebilirsiniz.
                    </p>
                </div>
                <Map />
                <Contact />
            </section>

        </>
    )
}

export default Iletisim