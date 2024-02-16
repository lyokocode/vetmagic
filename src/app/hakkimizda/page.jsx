import { Detail, Hero } from '@/components'
import styles from "./hakkimizda.module.scss"
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';
import Image from 'next/image';

const Hakkimizda = () => {
    return (
        <>
            <Hero
                src="/hero2.jpg"
                title="Vet Magic"
            />
            <Detail
                title="Hakkımızda"
                description="Magic Veteriner Kliniği"

            />
            <div className={styles.abautPage}>

                <div className={styles.teams}>

                    <div className={styles.veterinarian}>
                        <div>

                            <Image
                                fill
                                src="/person1.jpg"
                                alt={`veteriner hekim ismail altıntop `}
                            />
                        </div>
                        <div className={styles.vetInfo}>
                            <Link href={`./hakkimizda`}>
                                <h1 className={styles.name}>İsmail Altıntop</h1>
                            </Link>
                            <h2 className={styles.position}>Veteriner Hekim</h2>
                            <p className={styles.vetAbout}> Harran Üniversitesi Veteriner Fakültesi mezunu</p>
                            <div className={styles.iconLinks}>

                                <div className={styles.iconLinks}>
                                    <span target="_blank" rel="noreferrer">
                                        <FaTwitter size={20} />
                                    </span>
                                    <span target="_blank" rel="noreferrer">
                                        <FaLinkedin size={20} />
                                    </span>
                                    <a href={`mailto:mustafausakli_@hotmail.com`} >
                                        <MdEmail size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className={styles.textContainer}>
                    <li className={styles.text}>Vet Magic, dostlarınızın sağlığını ve mutluluğunu ön planda tutan profesyonel bir Veteriner Kliniğidir. Amacımız, evcil hayvanlarınızın en iyi bakımını sağlamak ve onların hayat kalitesini artırmaktır.</li>
                    <li className={styles.text}>Kliniğimizde, deneyimli ve sevgi dolu bir Veteriner Hekimi ekibi bulunmaktadır. Her bir Hekimimiz, hayvan sağlığına olan tutkularını ve uzmanlıklarını sizin ve evcil dostlarınızın hizmetine sunmaktadır. Evcil hayvanlarınızın ihtiyaçlarına uygun çözümler sunarak, onların sağlıklı ve mutlu bir yaşam sürmelerine katkıda bulunuyoruz.</li>
                    <li className={styles.text}>Vet Magic, modern tıbbi ekipmanlarla donatılmış kapsamlı bir tesis sunmaktadır. Bu sayede, tanı ve tedavi süreçlerinde en son teknolojik gelişmeleri kullanarak evcil dostlarınıza en iyi bakımı sağlamaktayız.</li>
                    <li className={styles.text}>Hizmetlerimiz arasında genel sağlık kontrolü, aşılar, acil veteriner hizmetleri, cerrahi işlemler, diş bakımı, beslenme danışmanlığı ve davranış terapisi gibi birçok farklı alan bulunmaktadır.</li>
                    <li className={styles.text}>Biz, Vet Magic ekibi olarak, evcil hayvanlarınızı sevgi ve saygıyla karşılıyoruz. Onların sağlık ve mutluluğunu korumak için buradayız.</li>
                </ul>
            </div>

        </>
    )
}

export default Hakkimizda