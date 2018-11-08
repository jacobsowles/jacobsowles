import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePhoto from './ProfilePhoto';

it('renders without crashing', () => {
	const div = React.createElement('div');
	ReactDOM.render(<ProfilePhoto />, div);
	ReactDOM.unmountComponentAtNode(div);
})