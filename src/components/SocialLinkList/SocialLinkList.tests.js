import React from 'react';
import ReactDOM from 'react-dom';
import SocialLinkList from './SocialLinkList';

it('renders without crashing', () => {
	const div = React.createElement('div');
	ReactDOM.render(<SocialLinkList />, div);
	ReactDOM.unmountComponentAtNode(div);
})