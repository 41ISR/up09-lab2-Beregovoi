import './styles.css'

import MessageList from "../../components/MainScreen/ChatWindow/MessageList"
import MessageInput from "../../components/MainScreen/ChatWindow/MessageInput"

export default function ChatWindow() {

    return (
        <div className="chat-window">
            <MessageList />
            <MessageInput />
        </div>
    )

}