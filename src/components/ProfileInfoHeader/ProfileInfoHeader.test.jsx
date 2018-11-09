import React from 'react';
import ReactDOM from 'react-dom';
import ProfileInfoHeader from './ProfileInfoHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfileInfoHeader title="Title" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
