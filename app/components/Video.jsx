"use client"
import ChatBox from './ChatBox'
import styles from '../../styles/Video.module.css'
import VideoCard from './VideoCard'
import { useRef } from 'react'

const VideoPage = ({ videoData }) => {
    const enterButton = useRef()
    const escapeButton = useRef()

    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'enter') enterButton.current.click()
        else if (e.key.toLowerCase() === 'escape') escapeButton.current.click()
        else return;
    })
    return (
        <div className={styles.mainContainer}>
            <div className={styles.left}>
                <div className={styles.videoCards}>
                    <VideoCard data={videoData} />
                    <VideoCard data={videoData} />
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btn} ref={enterButton} onClick={() => console.log('Enter Clicked')}>esc/next</button>
                    <button className={styles.btn} ref={escapeButton} onClick={() => console.log('Escape Clicked')}>stop</button>
                </div>
            </div>
            <ChatBox />
        </div>
    )
}
export default VideoPage 