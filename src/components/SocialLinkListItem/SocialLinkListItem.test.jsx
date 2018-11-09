import React from 'react';
import ReactDOM from 'react-dom';
import SocialLinkListItem from './SocialLinkListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SocialLinkListItem icon="linkedin" title="Title" url="http://google.com" />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
