import React from 'react';
export default class DialogForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value) {
            const messages = JSON.parse(localStorage.getItem('messages')) || [];
            messages.push({ value: this.state.value, author: this.props.activeAccount });
            localStorage.setItem('messages', JSON.stringify(messages));
            this.props.onSendingMessage();
            this.setState({ value: '' });
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="chat-window__dialog-form">
                <textarea
                    className="chat-window__textarea"
                    placeholder="write message..."
                    value={this.state.value}
                    onChange={this.handleChange}
                ></textarea>
                <button type="submit" className="chat-window__submit">
                    send
                </button>
            </form>
        );
    }
}
