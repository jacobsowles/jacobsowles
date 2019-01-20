import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO description="Page not found" title="404: Not Found" />

        <div className="content-box">
          <h1>Not found</h1>

          <hr />

          <p>The page you requested has moved or doesn't exist.</p>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;
