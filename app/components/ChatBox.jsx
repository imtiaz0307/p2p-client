import styles from '../../styles/ChatBox.module.css'

const ChatBox = () => {
    return (
        <div className={styles.chatBox}>
            <div className={styles.messages}>
                <p>Stranger: Hello World!</p>
                <p>You: Hello Stranger!</p>
            </div>
            <input type="text" placeholder="chat box" />
        </div>
    )
}

export default ChatBox