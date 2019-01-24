import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const BlogPost = ({ className, next, post, previous }) => {
  return (
    <Root className={className}>
      <h1>{post.frontmatter.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />

      <Date>{post.frontmatter.date}</Date>

      {(previous || next) && <hr />}

      {(previous || next) && (
        <Links>
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
        </Links>
      )}
    </Root>
  );
};

BlogPost.propTypes = {
  className: PropTypes.string,
};

BlogPost.defaultProps = {
  className: 'blog-post-component',
};

const Date = styled.p`
  font-size: 0.8em;
  font-style: normal;
  margin-top: 20px;
  opacity: 0.8;
  text-align: left;
`;

const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 0;
  padding: 0;
`;

const Root = styled.article`
  h2 {
    font-size: 1.5em;
    line-height: 1.5em;
  }

  hr {
    margin: 20px 0;
  }

  img {
    max-width: 100%;
  }

  small {
    display: block;
    font-style: italic;
    text-align: center;
  }
`;

export default BlogPost;
