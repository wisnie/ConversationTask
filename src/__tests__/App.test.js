import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

it('renders standart app structure', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});
