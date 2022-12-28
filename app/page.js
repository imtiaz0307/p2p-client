"use client"
import styles from '../styles/Home.module.css'
import ChatBox from './components/ChatBox'
import Video from './components/Video'
import { useRef, useState } from 'react'


const HomePage = () => {
    const [videoData, setVideoData] = useState('')
    const [videoMode, setVideoMode] = useState(false)
    const dropDown = useRef()
    const region = useRef()
    const description = useRef()


    const submitForm = () => {
        if (!dropDown.current.value || !region.current.value || !description.current.value) return alert('You must fill all the fields.')
        setVideoData({
            video: dropDown.current.value,
            region: region.current.value,
            description: description.current.value,
            isVerified: true
        })
        setVideoMode(true)
    }
    return (
        <>
            {
                videoMode
                    ?
                    <Video videoData={videoData} />
                    :
                    <div className={styles.main}>
                        <div className={styles.left}>
                            <div className={styles.boxes}>

                                <div className={styles.infoBox}>
                                    <h1>HEAVY IS THE NAME OF SOME THING THAT KILLS </h1>
                                    <div className={styles.infoBoxInputs}>
                                        <form className={styles.form} >
                                            <select ref={dropDown} className={styles.dropdown} style={{ marginBottom: '3rem', width: '100%' }} required>
                                                <option value="a">a</option>
                                                <option value="b">b</option>
                                                <option value="c">c</option>
                                                <option value="d">d</option>
                                                <option value="e">e</option>
                                                <option value="f">f</option>
                                                <option value="g">g</option>
                                                <option value="h">h</option>
                                                <option value="i">i</option>
                                                <option value="j">j</option>
                                                <option value="k">k</option>
                                            </select>
                                            <div className={styles.field}>
                                                <label htmlFor="abc1">abc: </label>
                                                <input ref={region} type="text" id="abc1" required />
                                            </div>
                                            <div className={styles.field}>
                                                <label htmlFor="abc2">abc: </label>
                                                <textarea ref={description} id="abc2" rows={4} required />
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <button type='button' className={styles.btn}>Social Link</button>
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
                            <button className={styles.btn} onClick={submitForm}>GO</button>
                        </div>
                        <ChatBox />
                    </div>
            }
        </>
    )
}

export default HomePage