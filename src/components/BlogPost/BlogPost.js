import { Link } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

import './BlogPost.scss';

const BlogPost = ({ next, post, previous }) => {
  return (
    <div className="blog-post">
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          marginBottom: '60px',
        }}
      >
        <div style={{ flex: '1' }}>
          <h1>{post.frontmatter.title}</h1>
          <small className="date">{post.frontmatter.date}</small>
        </div>

        <Image sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />

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
    </div>
  );
};

export default BlogPost;
