import './styles.css';

import { useState } from 'react';
import ChatList from "./ChatList";
import ContactsList from "./ContactsList";

type TabType = "chat" | "contacts" | "";

export default function Sidebar() {
    const [tabType, setTabType] = useState<TabType>("chat");

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const button: HTMLButtonElement = event.currentTarget;
        setTabType(button.id as TabType);
    };

    let activeTab;

    if (tabType === "chat") {
        activeTab = <ChatList key="chatList" />;
    } else if (tabType === "contacts") {
        activeTab = <ContactsList key="contactsList" />;
    }

    return (
        <div className="sidebar">
            <span className='logotype'>SDChat</span>
            <div className="tab-buttons-block">
                <button onClick={handleClick} id="chat" className={`tab-button ${tabType === 'chat' ? 'active' : ''}`}>Чаты</button>
                <button onClick={handleClick} id="contacts" className={`tab-button ${tabType === 'contacts' ? 'active' : ''}`}>Контакты</button>
            </div>
            {activeTab}
        </div>
    );
}
