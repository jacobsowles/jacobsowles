import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import React, { Fragment } from 'react';

class Layout extends React.Component {
  render() {
    return (
      <Fragment>
        <Normalize />
        <GlobalStyles />

        {this.props.children}
      </Fragment>
    );
  }
}

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
  }

  html {
    box-sizing: border-box;
  }
`;

export default Layout;
