"use client"

import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'
import SignInModal from './SignInModal'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        // you can name the auth-token whatever you want
        const LoggedIn = sessionStorage.getItem('auth-token')
        LoggedIn && setIsLoggedIn(true)
    }, [])
    return (
        <header>
            <nav className={styles.nav}>
                <Link href={'/'} className={styles.logo}>Hablar</Link>
                {
                    !isLoggedIn
                        ?
                        <>
                            <div className={styles.buttons}>
                                <button className={styles.btn} onClick={() => setOpenModal(!openModal)}>Login</button>
                            </div>
                            {
                                openModal && <SignInModal openModal={openModal} setOpenModal={setOpenModal} />
                            }
                        </>
                        :
                        <button className={styles.btn}>Logout</button>
                }
            </nav>
        </header >
    )
}

export default Navbar