import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

class ContactPage extends React.PureComponent {
  render() {
    const { data, location } = this.props;
    const { title, social } = data.site.siteMetadata;

    return (
      <Layout
        backgroundImage={data.featuredImage.childImageSharp.fluid}
        location={location}
        title={title}
      >
        <SEO
          description="Contact Jacob Sowles"
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
          title="Contact"
        />

        <h1>Get in touch</h1>

        <p>
          The fastest way to get a hold of me is by{' '}
          <a href={`mailto:${social.email}`}>email</a>. Alternatively, feel free
          to reach out on{' '}
          <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>. While I
          do have a{' '}
          <a href={`https://www.linkedin.com/in/${social.linkedin}`}>
            LinkedIn
          </a>{' '}
          account, I rarely check it and wouldn't advise using that as a primary
          method of contact.
        </p>
      </Layout>
    );
  }
}

export default ContactPage;

export const pageQuery = graphql`
  query {
    featuredImage: file(
      relativePath: { regex: "/jacob-sowles-transparent-full.png/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
