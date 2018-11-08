import React from 'react';
import ReactDOM from 'react-dom';
import SectionBody from './SectionBody';

it('renders without crashing', () => {
	const div = React.createElement('div');
	ReactDOM.render(<SectionBody />, div);
	ReactDOM.unmountComponentAtNode(div);
})