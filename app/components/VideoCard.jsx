import styles from '../../styles/VideoCard.module.css'

const VideoCard = () => {
    return (
        <div className={styles.videoCard}>
            <div className={styles.video}></div>
            <div className={styles.userDetails}>
                <h2 className={styles.userName}>ABC <div className={styles.activeCircle}></div></h2>
                <p>abc</p>
                <a href="#" className={styles.socialLink}>LinkedIn</a>
                <p className={styles.extraDetails}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem facilis cum asperiores maiores nobis illum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, soluta aut.</p>
            </div>
        </div>
    )
}

export default VideoCard