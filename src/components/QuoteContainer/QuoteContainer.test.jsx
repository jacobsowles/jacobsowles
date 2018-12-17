import React from 'react';
import ReactDOM from 'react-dom';
import QuoteContainer from './QuoteContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuoteContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
