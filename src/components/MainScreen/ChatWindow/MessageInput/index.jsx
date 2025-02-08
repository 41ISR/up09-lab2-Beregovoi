import './styles.css'

export default function MessageInput() {

    return (
        <div className="message-input-block">
            <form className='send-message-form'>
                <input type="text" placeholder="Введите сообщение..." />
                <button type="submit">Отправить</button>
            </form>
        </div>
    )

}