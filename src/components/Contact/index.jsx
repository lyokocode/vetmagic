import React from 'react'
import styles from "./contact.module.scss"
import { FaLocationArrow } from "react-icons/fa";
import { MdPhone, MdMailOutline } from "react-icons/md";

export const Contact = () => {
    return (
        <div className={styles.links}>
            <div className={styles.link}>
                <MdPhone size={40} color="crimson" />
                <span className={styles.contact}> +905532768090</span>
                <span className={styles.info}>7/24 hizmetinizdeyiz</span>
                <a href="tel:+5386118125"> <span>ara</span> <FaLocationArrow size={30} color="crimson" />  </a>
            </div>
            <div className={styles.link}>
                <MdMailOutline size={40} color="crimson" />
                <span className={styles.contact}> vetmagic@gmail.com</span>
                <span className={styles.info}>Mesai saatleri içerisinde size dönüş yapılacaktır</span>
                <a href="mailto:vetmagic@gmail.com"><span>mail gönder</span> <FaLocationArrow size={30} color="crimson" />  </a>
            </div>

        </div>
    )
}
