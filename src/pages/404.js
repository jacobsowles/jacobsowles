import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

class NotFoundPage extends React.PureComponent {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO description="Page not found" title="404: Not Found" />

        <h1>Not found</h1>
        <p>The page you requested has moved or doesn't exist.</p>
      </Layout>
    );
  }
}

export default NotFoundPage;
