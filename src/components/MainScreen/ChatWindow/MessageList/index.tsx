import './styles.css'

export default function MessageList() {

    return (
        <div className="message-list filled">
            {/* <span className="no-messages-heading">На данный момент <br /> сообщений нет</span> */}
            <div className="sender-message-block">
                <span className='sender-name'>Имя отправителя</span>
                <span className='sender-message'>Сообщение от отправителя</span>
            </div>
            <div className="user-message-block">
                <span className='user-name'>Имя пользователя</span>
                <span className='user-message'>Сообщение от отправителя</span>
            </div>
            <div className="sender-message-block">
                <span className='sender-name'>Имя отправителя</span>
                <span className='sender-message'>Сообщение от отправителя</span>
            </div>
            <div className="user-message-block">
                <span className='user-name'>Имя пользователя</span>
                <span className='user-message'>Сообщение от отправителя</span>
            </div>
            <div className="sender-message-block">
                <span className='sender-name'>Имя отправителя</span>
                <span className='sender-message'>Сообщение от отправителя</span>
            </div>
        </div>
    )

}