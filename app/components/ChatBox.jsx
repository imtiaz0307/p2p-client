import styles from '../../styles/ChatBox.module.css'

const messages = [
    {
        username: 'krishna123',
        message: 'Hey Imtiaz!'
    },
    {
        username: 'imtiaz0307',
        message: 'Hey Karan!'
    }
]

const ChatBox = () => {
    return (
        <div className={styles.chatBox}>
            <div className={styles.messages}>
                {
                    messages.length > 0
                        ?
                        messages.map((message, index) => {
                            return <p key={index}>{message.username}: {message.message}</p>
                        })
                        :
                        'Messages Will Be Shown Here'
                }
            </div>
            <input type="text" placeholder="chat box" />
        </div>
    )
}

export default ChatBox