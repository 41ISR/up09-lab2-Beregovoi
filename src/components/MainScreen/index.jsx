import './styles.css'

import Sidebar from './Sidebar/index.jsx'
import ChatWindow from './ChatWindow/index.jsx'

export default function MainScreen() {

    return (
        <div className='main-screen'>
            <Sidebar />
            <ChatWindow />
        </div>
    )

}