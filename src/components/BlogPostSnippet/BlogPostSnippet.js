import { Link } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import './BlogPostSnippet.scss';

const BlogPostSnippet = ({ node, title }) => {
  return (
    <div className="blog-post-snippet content-box">
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <div style={{ flex: '1' }}>
          <h3>
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              {title}
            </Link>
          </h3>

          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />

          <small>{node.frontmatter.date}</small>
        </div>

        <Image sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
      </div>
    </div>
  );
};

BlogPostSnippet.propTypes = {
  node: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default BlogPostSnippet;
