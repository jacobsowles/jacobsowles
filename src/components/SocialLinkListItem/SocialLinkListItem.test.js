import React from 'react';
import ReactDOM from 'react-dom';
import SocialLinkListItem from './SocialLinkListItem';

it('renders without crashing', () => {
	const div = React.createElement('div');
	ReactDOM.render(<SocialLinkListItem />, div);
	ReactDOM.unmountComponentAtNode(div);
})