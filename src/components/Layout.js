import { Link } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import React, { Fragment } from 'react';

import Section from './Section';
import Text from './Text';

class Layout extends React.Component {
  render() {
    return (
      <Fragment>
        <Normalize />
        <GlobalStyles />

        {this.props.children}

        <Section style={{ marginBottom: '10px' }}>
          <Text as="small" center light size="0.8em">
            All content © {new Date().getFullYear()}{' '}
            <Link to="/">Jacob Sowles</Link>
          </Text>
        </Section>
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
