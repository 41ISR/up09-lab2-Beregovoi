import './styles.css'

import ChatList from "./ChatList"
import ContactsList from "./ContactsList"

export default function Sidebar() {

    return (
        <div className="sidebar">
            <span className='logotype'>SuperDuperChat</span>
            <ChatList />
            {/* <ContactsList /> */}
        </div>
    )

}