"use client"
import { useRef, useState } from 'react'
import styles from '../../styles/ChatBox.module.css'

const ChatBox = () => {
    const chatMessage = useRef()
    const [messages, setMessages] = useState([
        {
            username: 'krishna123',
            message: 'Hey Imtiaz!'
        },
        {
            username: 'imtiaz0307',
            message: 'Hey Karan!'
        }
    ])


    // the name will be replaced by the username of the user
    const sendMessage = (e, name, message) => {
        e.preventDefault()
        if (!message) return;
        setMessages([...messages, { username: name, message }])
        message = ''
    }
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
            <form onSubmit={(e) => sendMessage(e, 'Username', chatMessage.current.value)}>
                <input type="text" placeholder="chat box" ref={chatMessage} />
                <input type="submit" hidden />
            </form>
        </div>
    )
}

export default ChatBox