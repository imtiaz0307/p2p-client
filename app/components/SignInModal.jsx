import styles from '../../styles/Modal.module.css'

const SignInModal = ({ openModal, setOpenModal }) => {
    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modal}>
                <div className={styles.closeModal} onClick={() => setOpenModal(!openModal)}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
                <h1>Log In</h1>
                <button className={styles.loginButton}>Sign In With Linkedin</button>
            </div>
        </div>
    )
}

export default SignInModal