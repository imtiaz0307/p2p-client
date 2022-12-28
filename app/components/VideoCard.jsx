import styles from '../../styles/VideoCard.module.css'

const VideoCard = ({ data }) => {
    return (
        <div className={styles.videoCard}>
            <div className={styles.video}></div>
            <div className={styles.userDetails}>
                <h2 className={styles.userName}>{data.name}
                    {
                        data.isVerified && <div className={styles.activeCircle}></div>
                    }
                </h2>
                <p>{data.country}</p>
                <a href="#" className={styles.socialLink}>{data.linkedin}</a>
                <p className={styles.extraDetails}>{data.description}</p>
            </div>
        </div>
    )
}

export default VideoCard