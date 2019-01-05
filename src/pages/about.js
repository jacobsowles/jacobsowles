import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

class AboutPage extends React.Component {
  render() {
    const { data } = this.props;
    const { title } = data.site.siteMetadata;

    return (
      <Layout location={this.props.location} title={title}>
        <SEO
          title="About"
          keywords={[
            `about`,
            `blog`,
            `gatsby`,
            `Jacob Sowles`,
            `javascript`,
            `react`,
            `software development`,
          ]}
        />

        <div className="content-box">
          <h1>About me</h1>

          <hr />

          <p>TODO</p>
        </div>
      </Layout>
    );
  }
}

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
