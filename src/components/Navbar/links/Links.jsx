"use client"
import { useState } from 'react'
import styles from "./links.module.scss"
import { NavLink } from './navLink/NavLink'
import { MdMenu, MdClose } from "react-icons/md";

const links = [
    { path: "/hakkimizda", title: "Hakkımızda" },
    { path: "/blog", title: "Blog" },
    { path: "/hizmetler", title: "Hizmetler" },
    { path: "/iletisim", title: "İletişim" },
]

export const Links = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className={styles.linkContainer}>
            <ul className={styles.lists}>
                {
                    links && links.map((link, i) => (
                        <li key={i}>
                            <NavLink item={link} />
                        </li>
                    ))
                }
            </ul>
            <button
                onClick={() => setOpen((prev) => !prev)}
                className={styles.menu}
            >
                {open ? <MdClose size={30} /> : <MdMenu size={30} />}
            </button>
            <ul
                className={`${styles.mobileLinks} ${open && styles.show}`}
                onClick={(e) => e.stopPropagation(setOpen(false))}
            >
                {
                    open && (
                        <li>
                            {links && links.map(link => (
                                <NavLink item={link} key={link.path} />
                            ))}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
