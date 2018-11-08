import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

it('renders without crashing', () => {
	const div = React.createElement('div');
	ReactDOM.render(<Profile />, div);
	ReactDOM.unmountComponentAtNode(div);
})