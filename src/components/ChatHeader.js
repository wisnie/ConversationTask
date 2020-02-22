import React from 'react';
import ChatName from './ChatName';
import ChatControls from './ChatControls';

export default function ChatHeader({ onUserChange, activeAccount }) {
    return (
        <div className="chat-window__container">
            <ChatName />
            <ChatControls onUserChange={onUserChange} activeAccount={activeAccount} />
        </div>
    );
}
