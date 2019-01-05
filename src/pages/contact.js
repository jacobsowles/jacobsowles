import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

class ContactPage extends React.Component {
  render() {
    const { data } = this.props;
    const { title, social } = data.site.siteMetadata;

    return (
      <Layout location={this.props.location} title={title}>
        <SEO
          title="Contact"
          keywords={[
            `blog`,
            `contact`,
            `email`,
            `gatsby`,
            `Jacob Sowles`,
            `javascript`,
            `react`,
            `social media`,
            `software development`,
          ]}
        />

        <div className="content-box">
          <h1>Get in touch</h1>

          <hr />

          <p>
            The fastest way to get a hold of me is by{' '}
            <a href={`mailto:${social.email}`}>email</a>. Alternatively, feel
            free to reach out on{' '}
            <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>. While
            I do have a{' '}
            <a href={`https://www.linkedin.com/in/${social.linkedin}`}>
              LinkedIn
            </a>{' '}
            account, I rarely check it and wouldn't advise using that as a
            primary method of contact.
          </p>
        </div>
      </Layout>
    );
  }
}

export default ContactPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        social {
          email
          github
          linkedin
          twitter
        }
        title
      }
    }
  }
`;
