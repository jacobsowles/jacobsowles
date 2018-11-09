import React from 'react';
import ReactDOM from 'react-dom';
import SocialLinkList from './SocialLinkList';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<SocialLinkList />, div);
	ReactDOM.unmountComponentAtNode(div);
})