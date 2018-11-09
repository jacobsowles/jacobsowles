import React from 'react';
import ReactDOM from 'react-dom';
import ProfileInfoListItem from './ProfileInfoListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ProfileInfoListItem icon="linkedin" title="Title" url="http://google.com" />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
