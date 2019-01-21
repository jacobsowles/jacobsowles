import { graphql } from 'gatsby';
import React from 'react';

import BlogPostExcerpt from '../components/BlogPostExcerpt';
import ContentCard from '../components/ContentCard';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { init } from '../utils/icons';

init();

class BlogIndex extends React.PureComponent {
  render() {
    const { data } = this.props;
    const { description, title } = data.site.siteMetadata;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout
        backgroundColor="light"
        location={this.props.location}
        title={title}
      >
        <SEO
          description="A blog about software, productivity, and more"
          keywords={[
            `blog`,
            `gatsby`,
            `Jacob Sowles`,
            `javascript`,
            `react`,
            `software development`,
          ]}
          title={`${description}`}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;

          return (
            <ContentCard key={node.fields.slug}>
              <BlogPostExcerpt node={node} title={title} />
            </ContentCard>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 400) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
