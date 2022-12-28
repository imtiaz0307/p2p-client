import ChatBox from '../components/ChatBox'
import styles from '../../styles/Video.module.css'
import VideoCard from '../components/VideoCard'


const VideoPage = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.left}>
                <div className={styles.videoCards}>
                    <VideoCard />
                    <VideoCard />
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btn}>esc/next</button>
                    <button className={styles.btn}>stop</button>
                </div>
            </div>
            <ChatBox />
        </div>
    )
}
export default VideoPage 