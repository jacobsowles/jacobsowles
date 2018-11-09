import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Profile name="name" tagline="tagline" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
