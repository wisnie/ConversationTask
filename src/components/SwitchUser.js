import React from 'react';
import { NAMES_OBJECT } from './Constants';

export default function SwitchUser({ onUserChange }) {
    return (
        <div className="chat-window__switch">
            <button
                onClick={() => onUserChange(NAMES_OBJECT.FIRST_USER)}
                className="chat-window__button"
            >
                <span className="chat-window__button-text">{NAMES_OBJECT.FIRST_USER}</span>
            </button>
            <button
                onClick={() => onUserChange(NAMES_OBJECT.SECOND_USER)}
                className="chat-window__button"
            >
                <span className="chat-window__button-text">{NAMES_OBJECT.SECOND_USER}</span>
            </button>
        </div>
    );
}
