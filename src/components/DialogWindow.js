import React from 'react';
import { GET_SECOND_USER } from './Constants';
import DialogForm from './DialogForm';

function DialogBody({ messages, activeAccount }) {
    return (
        <ul className="chat-window__dialog-window">
            {messages.map((message, index) => {
                return (
                    <li
                        key={`item-${index}`}
                        className={
                            message.author === activeAccount
                                ? 'chat-window__message chat-window__message--active'
                                : 'chat-window__message'
                        }
                    >
                        {message.value}
                    </li>
                );
            })}
        </ul>
    );
}

export default function DialogWindow(props) {
    return (
        <div className="chat-window__dialog">
            <p className="chat-window__chat-person">{GET_SECOND_USER[props.activeAccount]}</p>
            <DialogBody messages={props.messages} activeAccount={props.activeAccount} />
            <DialogForm
                onSendingMessage={props.onSendingMessage}
                activeAccount={props.activeAccount}
            />
        </div>
    );
}
