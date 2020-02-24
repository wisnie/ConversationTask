import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DialogForm from '../components/DialogForm';

describe('Testing changing textarea value', () => {
    it('changes value to string', () => {
        const { getByPlaceholderText } = render(<DialogForm />);
        const textarea = getByPlaceholderText('write message...');
        const testValue = 'I am going to the cinema.';

        fireEvent.input(textarea, { target: { value: testValue } });
        expect(textarea).toHaveTextContent(testValue);
    });

    it('changes value to random number', () => {
        const { getByPlaceholderText } = render(<DialogForm />);
        const textarea = getByPlaceholderText('write message...');
        const testValue = 123123;

        fireEvent.input(textarea, { target: { value: testValue } });
        expect(textarea).toHaveTextContent(testValue);
    });
});
