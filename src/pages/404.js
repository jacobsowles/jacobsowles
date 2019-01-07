import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO description="Page not found" title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist.</p>
      </Layout>
    );
  }
}

export default NotFoundPage;
