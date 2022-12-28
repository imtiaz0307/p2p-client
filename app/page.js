import styles from '../styles/Home.module.css'
import Link from 'next/link'
import ChatBox from './components/ChatBox'


const HomePage = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.boxes}>
                        <div className={styles.infoBox}>
                            <h1>HEAVY IS THE NAME OF SOME THING THAT KILLS </h1>
                            <div className={styles.infoBoxInputs}>
                                <select name="" className={styles.dropdown} style={{ marginBottom: '3rem', width: '100%' }}>
                                    <option value="anything">Anything</option>
                                </select>
                                <form action="" className={styles.form} >
                                    <div className={styles.field}>
                                        <label htmlFor="abc1">abc: </label>
                                        <input type="text" name="" id="abc1" />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="abc2">abc: </label>
                                        <textarea name="" id="abc2" rows={4} />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Link href='/'><button className={styles.btn}>Sign In With Linkedin</button></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className={styles.infoBox}>
                            <h1>HEAVY IS THE NAME OF SOME THING THAT KILLS </h1>
                            <div className={styles.infoBoxInputs}>
                                <select name="" className={styles.dropdown}>
                                    <option value="anything">Anything</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button className={styles.btn}>GO</button>
                </div>
                <ChatBox />
            </div>
        </>
    )
}

export default HomePage