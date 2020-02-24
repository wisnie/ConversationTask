import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ChatWindow from '../components/ChatWindow';

describe('Testing log in/out from account', () => {
    it('chooses user after click', () => {
        const { queryByText, getByText } = render(<ChatWindow />);
        expect(queryByText('logout')).toBeNull();

        fireEvent.click(getByText('John Smith'));
        expect(queryByText('logout')).not.toBeNull();
    });

    it('logouts after click', () => {
        const { queryByText, getByText } = render(<ChatWindow />);
        expect(queryByText('logout')).toBeNull();

        fireEvent.click(getByText('John Smith'));
        expect(queryByText('logout')).not.toBeNull();

        fireEvent.click(queryByText('logout'));
        expect(queryByText('logout')).toBeNull();
    });
});

describe('Testing sending messages', () => {
    it('sends message properly', () => {
        const { getByPlaceholderText, getByText, queryByText } = render(<ChatWindow />);
        const testValue = 'Making your day better.';
        fireEvent.click(getByText('John Smith'));

        expect(queryByText(testValue)).toBeNull();
        fireEvent.input(getByPlaceholderText('write message...'), {
            target: { value: testValue }
        });
        fireEvent.click(getByText('send'));
        expect(getByText(testValue));
    });

    it('sends a bunch of messages', () => {
        const { getByPlaceholderText, getByText } = render(<ChatWindow />);
        const testArray = [
            'Hello',
            'What about going to the cinema tommorow?',
            'Make this test easy',
            'Keep it stupid simple'
        ];
        fireEvent.click(getByText('John Smith'));

        const textarea = getByPlaceholderText('write message...');
        const submit = getByText('send');

        testArray.forEach((testString) => {
            fireEvent.input(textarea, {
                target: { value: testString }
            });
            fireEvent.click(submit);
            expect(getByText(testString));
        });
    });
});
