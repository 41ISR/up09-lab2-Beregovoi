import './styles.css'

import Sidebar from './Sidebar/index.js'
import ChatWindow from '../../pages/ChatPage/index.js'

export default function MainScreen() {

    return (
        <div className='main-screen'>
            <Sidebar />
            <ChatWindow />
        </div>
    )

}