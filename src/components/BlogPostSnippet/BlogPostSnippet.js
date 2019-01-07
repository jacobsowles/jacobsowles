import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './BlogPostSnippet.scss';

const BlogPostSnippet = ({ node, title }) => {
  return (
    <div className="blog-post-snippet">
      <small>{node.frontmatter.date}</small>

      <h3>
        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          {title}
        </Link>
      </h3>

      <hr />

      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </div>
  );
};

BlogPostSnippet.propTypes = {
  node: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default BlogPostSnippet;
