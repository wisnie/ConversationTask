import React from 'react';
export default function ChatControls(props) {
    return (
        <div className="chat-window__controls">
            <p className="chat-window__user-name">{props.activeAccount}</p>
            <button className="chat-window__logout" onClick={() => props.onUserChange('')}>
                logout
            </button>
        </div>
    );
}
