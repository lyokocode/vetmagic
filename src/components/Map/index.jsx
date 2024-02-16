import styles from "./map.module.scss"
import { FiMapPin } from "react-icons/fi";
import { BiSolidNavigation } from "react-icons/bi";
export const Map = () => {
    return (
        <article className={styles.mapContainer}>
            <div className={styles.info}>
                <FiMapPin color='red' size={45} />
                <h2 className={styles.location}>Etimesgut / Ankara</h2>
                <h3 className={styles.place}> Bağlıca mah. Mermeroğlu cad. No:61/2A </h3>
                <h3 className={styles.place}>7/24 Hizmet</h3>
                <a className={styles.link} href="https://www.google.com/maps/place/Bağlıca,+Mermeroğlu+Cd.+No:61%2F2,+06790+Etimesgut%2FAnkara/@39.886542,32.6272442,17z/data=!3m1!4b1!4m6!3m5!1s0x14d33956a2f0c5cb:0x2999835f1a98e35e!8m2!3d39.8865421!4d32.6321097!16s%2Fg%2F11jsm08c7x?entry=ttu" target="_blank" rel="noreferrer" >
                    Yol Tarifi Al
                    <BiSolidNavigation />
                </a>
            </div>
            <div className={styles.map}>
                <iframe
                    src="https://www.google.com/maps/embed/v1/place?q=Bağlıca,+Mermeroğlu+Caddesi+No:61/2,+Etimesgut/Ankara,+Türkiye&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen=""></iframe>
            </div>
        </article>
    )
}

