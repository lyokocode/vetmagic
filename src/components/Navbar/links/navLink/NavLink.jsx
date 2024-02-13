"use client"
import Link from "next/link"
import styles from "./navLink.module.scss"
import { usePathname } from "next/navigation"
export const NavLink = ({ item }) => {

    const pathName = usePathname()
    return (
        <Link href={item.path} className={`${styles.navLink} ${pathName === item.path && styles.active}`}>
            {item.title}
        </Link>
    )
}
