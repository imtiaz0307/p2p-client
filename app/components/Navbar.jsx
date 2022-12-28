import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header>
            <nav className={styles.nav}>
                <Link href={'/'} className={styles.logo}>Hablar</Link>
                <div className={styles.buttons}>
                    <button className={styles.btn}>Sign Up</button>
                    <button className={styles.btn}>Login</button>
                </div>
            </nav>
        </header >
    )
}

export default Navbar