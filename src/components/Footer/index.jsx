import Link from "next/link"
import styles from "./footer.module.scss"
import Image from "next/image"
import { categories } from "@/mockdata/data"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.office}>
                <Image width={120} height={70} src="/menuLogo.png" alt="legit hukuk logo" />
                <div className={styles.info}>
                    <h2>Addres:</h2>
                    <h4>
                        Bağlıca Mah. Mermeroğlu Cad. No:61/2A
                        Etimesgut / Ankara
                    </h4>
                </div>
                <div className={styles.info}>
                    <h2>Telefon:</h2>
                    <h4>
                        {"0 (538) 611 81 25 "}
                    </h4>
                </div>
                <div className={styles.info}>
                    <h2>whatsapp:</h2>
                    <h4>
                        {"0 (538) 611 81 25 "}
                    </h4>
                </div>
                <div className={styles.info}>
                    <h2>e-posta:</h2>
                    <h4>
                        info@vetmagic.com
                    </h4>
                </div>
            </div>
            <div className={styles.links}>
                <h1>Faydalı Linkler</h1>
                <ul className={styles.linkContainer}>


                    <a href="https://www.tarimorman.gov.tr">Tarım ve Orman Bakanlığı</a>
                </ul>
            </div>
            <div className={styles.workSpace}>
                <h1>Çalışma Alanları</h1>
                <ul className={styles.linkContainer}>
                    {categories && categories.map(work => (
                        <li key={work.id}>
                            <Link href={`/hizmetlerimiz/${work.slug}`}>
                                {work.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
