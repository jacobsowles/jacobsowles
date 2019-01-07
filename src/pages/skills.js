import { graphql, Link } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import WordCloud from '../components/WordCloud';

class SkillsPage extends React.Component {
  render() {
    const { data } = this.props;
    const metadata = data.site.siteMetadata;
    const siteTitle = metadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          description="The top software development skills of Jacob Sowles"
          keywords={[
            `blog`,
            `gatsby`,
            `Jacob Sowles`,
            `javascript`,
            `react`,
            `skills`,
            `software development`,
            `strengths`,
          ]}
          title="Top Skills"
        />
        <div className="content-box">
          <h1>Top skills at a glance</h1>

          <hr />

          <p>
            I make it a priority to constantly grow and diversify my skillset,
            so the best way to learn specifics is to{' '}
            <Link to="/contact">get in touch</Link> or{' '}
            <a href={`https://github.com/${metadata.social.github}`}>
              check out my work on GitHub
            </a>{' '}
            (though understand that much of my professional work is not publicly
            available). That said, the following word cloud is a decent
            high-level representation of my strongest technical skills.
          </p>

          <WordCloud />
        </div>
      </Layout>
    );
  }
}

export default SkillsPage;

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
