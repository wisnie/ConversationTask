import React from 'react';
import ChatName from './ChatName';
import SwitchUser from './SwitchUser';

export default function ChatSwitchUser({ onUserChange }) {
    return (
        <div className="chat-window">
            <ChatName />
            <SwitchUser onUserChange={onUserChange} />
            <p className="chat-window__description">Choose your account and start a conversation</p>
        </div>
    );
}
