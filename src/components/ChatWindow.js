import React from 'react';
import ChatLoggedIn from './ChatLoggedIn';
import ChatSwitchUser from './ChatSwitchUser';

export default class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeAccount: '',
            messages: JSON.parse(localStorage.getItem('messages')) || []
        };
    }

    handleActiveAccountChange = (activeAccount) => {
        this.setState({
            activeAccount: activeAccount
        });
    };

    handleMessagesChange = () => {
        this.setState({
            messages: JSON.parse(localStorage.getItem('messages')) || []
        });
    };

    render() {
        const isLogged = !!this.state.activeAccount;
        return (
            <div className="chat-container">
                {isLogged ? (
                    <ChatLoggedIn
                        onSendingMessage={this.handleMessagesChange}
                        onUserChange={this.handleActiveAccountChange}
                        messages={this.state.messages}
                        activeAccount={this.state.activeAccount}
                    />
                ) : (
                    <ChatSwitchUser onUserChange={this.handleActiveAccountChange} />
                )}
            </div>
        );
    }
}
