import { graphql, Link } from 'gatsby';
import React from 'react';

import ContentCard from '../components/ContentCard';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import WordCloud from '../components/WordCloud';

class SkillsPage extends React.PureComponent {
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
        <ContentCard title="Top skills at a glance">
          <p>
            I make it a priority to constantly grow and diversify my skillset,
            so the best way to learn specifics is to{' '}
            <Link to="/contact/">get in touch</Link> or{' '}
            <a href={`https://github.com/${metadata.social.github}`}>
              check out my work on GitHub
            </a>{' '}
            (though understand that much of my professional work is not publicly
            available).
          </p>

          <p>
            Additionally, my greatest strengths aren't frameworks or languages;
            they're{' '}
            <strong>
              problem-solving, debugging, rapid learning, and{' '}
              <Link to="/about/">how I operate as a professional</Link>
            </strong>
            .
          </p>

          <p>
            That said, the following word cloud is a decent high-level
            representation of the technologies with which I'm the most
            productive.
          </p>

          <WordCloud />
        </ContentCard>
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
