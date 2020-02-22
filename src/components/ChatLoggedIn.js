import React from 'react';
import ChatHeader from './ChatHeader';
import DialogWindow from './DialogWindow';

export default function ChatLoggedIn(props) {
    return (
        <div className="chat-window">
            <ChatHeader onUserChange={props.onUserChange} activeAccount={props.activeAccount} />
            <DialogWindow
                onSendingMessage={props.onSendingMessage}
                activeAccount={props.activeAccount}
                messages={props.messages}
            />
        </div>
    );
}
