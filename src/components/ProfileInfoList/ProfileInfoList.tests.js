import React from 'react';
import ReactDOM from 'react-dom';
import ProfileInfoList from './ProfileInfoList';

it('renders without crashing', () => {
	const div = React.createElement('div');
	ReactDOM.render(<ProfileInfoList />, div);
	ReactDOM.unmountComponentAtNode(div);
})