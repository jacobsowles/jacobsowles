import React from 'react';
import ReactDOM from 'react-dom';
import ProfileInfoHeader from './ProfileInfoHeader';

it('renders without crashing', () => {
	const div = React.createElement('div');
	ReactDOM.render(<ProfileInfoHeader />, div);
	ReactDOM.unmountComponentAtNode(div);
})