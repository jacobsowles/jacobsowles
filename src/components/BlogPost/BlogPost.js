import { Link } from 'gatsby';
import React from 'react';

import './BlogPost.scss';

const BlogPost = ({ next, post, previous }) => {
  return (
    <article className="blog-post">
      <h1>{post.frontmatter.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />

      <small className="date">{post.frontmatter.date}</small>

      {(previous || next) && <hr />}

      {(previous || next) && (
        <ul className="post-navigation-links">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ‹ {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} ›
              </Link>
            )}
          </li>
        </ul>
      )}
    </article>
  );
};

export default BlogPost;
