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

                <button onClick={() => setOpen((prev) => !prev)} className={styles.menuBtn}>
                    {
                        open ? <AiOutlineClose size={30} color='#fff' /> : <AiOutlineMenu size={30} />
                    }
                </button>
                <ul className={`${styles.responsive} ${open ? styles.show : ""}`} onClick={(e) => e.stopPropagation(setOpen((prev) => !prev))}>
                    <Link href="/">

                        <Image width={200} height={80} src="/menuLogo.png" alt='logo' className={styles.navLogo} />
                    </Link>
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
