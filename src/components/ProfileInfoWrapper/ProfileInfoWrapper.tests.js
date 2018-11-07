import React from 'react';
import ReactDOM from 'react-dom';
import ProfileInfoWrapper from './ProfileInfoWrapper';

it('renders without crashing', () => {
	const div = React.createElement('div');
	ReactDOM.render(<ProfileInfoWrapper />, div);
	ReactDOM.unmountComponentAtNode(div);
})