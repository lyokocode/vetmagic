"use client"
import React, { useState } from 'react'
import styles from "./navbar.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const links = [
    { url: "/hakkimizda", title: "Hakkımızda" },
    { url: "/blog", title: "Blog" },
    { url: "/hizmetler", title: "Hizmetler" },
    { url: "/iletisim", title: "İletişim" },
]

export const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <nav className={styles.navbar}>
            {/* LOGO */}
            <Link href="/" className={styles.logo}>
                <Image src="/logo.png" alt='vetmagic logo' fill />
            </Link>
            {/*  MENU */}
            <ul className={styles.lists}>
                {
                    links && links.map((link, i) => (
                        <li key={i}>
                            <Link href={link.url}>{link.title}</Link>
                        </li>
                    ))
                }
            </ul>
            {/* RESPONSIVE MENU */}
            <>
                <button onClick={() => setOpen(!open)} className={styles.menuBtn}>
                    {
                        open ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />
                    }
                </button>
                <ul className={`${styles.responsive} ${open ? styles.show : ""}`}>
                    {
                        links && links.map((link, i) => (
                            <li key={i}>
                                <Link href={link.url}>{link.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </>
        </nav>
    )
}
