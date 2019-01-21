import { graphql } from 'gatsby';
import React from 'react';

import BlogPostSnippet from '../components/BlogPostSnippet';
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
      <Layout location={this.props.location} title={title}>
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
            <BlogPostSnippet key={node.fields.slug} node={node} title={title} />
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
