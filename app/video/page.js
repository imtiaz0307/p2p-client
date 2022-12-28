"use client"
import ChatBox from '../components/ChatBox'
import styles from '../../styles/Video.module.css'
import VideoCard from '../components/VideoCard'
import { useRef } from 'react'


const userOneData = {
    name: 'Imtiaz',
    country: 'xyz',
    linkedin: 'imtiaz0307',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere molestiae fugit atque veritatis asperiores delectus doloribus pariatur laborum repudiandae.',
    isVerified: false
}

const userTwoData = {
    name: 'Krishna',
    country: 'xyz',
    linkedin: 'krishna123',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere molestiae fugit atque veritatis asperiores delectus doloribus pariatur laborum repudiandae.',
    isVerified: true
}

const VideoPage = () => {
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
                    <VideoCard data={userOneData} />
                    <VideoCard data={userTwoData} />
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