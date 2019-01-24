import React from 'react';

import ContentCard from '../components/ContentCard';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

class NotFoundPage extends React.PureComponent {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO description="Page not found" title="404: Not Found" />

        <ContentCard title="Not found">
          <p>The page you requested has moved or doesn't exist.</p>
        </ContentCard>
      </Layout>
    );
  }
}

export default NotFoundPage;
