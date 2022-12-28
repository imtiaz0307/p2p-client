import { useRef } from 'react'
import styles from '../../styles/VideoCard.module.css'

const VideoCard = ({ data }) => {
    const videoElement = useRef()

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                videoElement.current.srcObject = stream;
            })
            .catch(function (err0r) {
                console.log("Something went wrong!");
            });
    }
    return (
        <div className={styles.videoCard}>
            <video autoPlay={true} ref={videoElement} className={styles.video}></video>
            <div className={styles.userDetails}>
                <h2 className={styles.userName}>{data.video}
                    {
                        data.isVerified && <div className={styles.activeCircle}></div>
                    }
                </h2>
                <p>{data.region}</p>
                <a href="#" className={styles.socialLink}>Social Link</a>
                <p className={styles.extraDetails}>{data.description}</p>
            </div>
        </div>
    )
}

export default VideoCard