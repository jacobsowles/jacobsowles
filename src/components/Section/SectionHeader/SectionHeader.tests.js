import React from 'react';
import ReactDOM from 'react-dom';
import SectionHeader from './SectionHeader';

it('renders without crashing', () => {
	const div = React.createElement('div');
	ReactDOM.render(<SectionHeader />, div);
	ReactDOM.unmountComponentAtNode(div);
})