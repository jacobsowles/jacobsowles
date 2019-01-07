import { Link } from 'gatsby';
import React from 'react';

import './BlogPost.scss';

const BlogPost = ({ next, post, previous }) => {
  return (
    <div className="blog-post">
      <small>{post.frontmatter.date}</small>
      <h1>{post.frontmatter.title}</h1>

      <hr />

      <div dangerouslySetInnerHTML={{ __html: post.html }} />

      {(previous || next) && <hr />}

      {(previous || next) && (
        <ul className="post-navigation-links">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export default BlogPost;