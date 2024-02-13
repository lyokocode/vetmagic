import styles from "./navbar.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import { Links } from "./links/Links"


export const Navbar = () => {


    return (
        <nav className={styles.navbar}>
            {/* LOGO */}
            <Link href="/" className={styles.logo}>
                <Image fill sizes="100%" src="/logo.png" alt='vetmagic logo' />
            </Link>

            <Links />
        </nav>
    )
}
