import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePhoto from './ProfilePhoto';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<ProfilePhoto />, div);
	ReactDOM.unmountComponentAtNode(div);
})