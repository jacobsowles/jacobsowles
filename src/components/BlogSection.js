import { Link } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import Text from './Text';

const BlogSection = ({ latestPost, nextPosts, ...rest }) => (
  <Root {...rest}>
    <div style={{ display: 'flex' }}>
      <FeaturedBlogPost>
        <FeaturedBlogPostImage
          fluid={latestPost.frontmatter.featuredImage.childImageSharp.fluid}
          alt=""
        />

        <FeaturedBlogPostText>
          <Text as="h3" size="1.5em">
            <Link style={{ boxShadow: `none` }} to={latestPost.fields.slug}>
              {latestPost.frontmatter.title}
            </Link>
          </Text>

          <Text
            dangerouslySetInnerHTML={{
              __html: latestPost.frontmatter.subtitle,
            }}
            margin="0 0 20px 0"
            size="0.9em"
          />

          <Date>{latestPost.frontmatter.date}</Date>
        </FeaturedBlogPostText>
      </FeaturedBlogPost>

      <BlogPostList>
        {nextPosts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;

          return (
            <BlogPost>
              <BlogPostImage
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                alt=""
              />

              <BlogPostText>
                <Text as="h3">
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </Text>

                <Date>{node.frontmatter.date}</Date>
              </BlogPostText>
            </BlogPost>
          );
        })}
      </BlogPostList>
    </div>

    <Text margin="20px 0 0 0 " right>
      <Link to="/blog/">Read more posts ›</Link>
    </Text>
  </Root>
);

const BlogPost = styled.article`
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  display: flex;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const BlogPostImage = styled(Image)`
  height: 100px;
  width: 100px;
`;

const BlogPostList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`;

const BlogPostText = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 20px;
`;

const Date = ({ children }) => (
  <Text as="small" light size="0.75em">
    {children}
  </Text>
);

const FeaturedBlogPost = styled.article`
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  display: inline-block;
  margin-right: 20px;
  width: 50%;
`;

const FeaturedBlogPostImage = styled(Image)`
  height: 200px;
`;

const FeaturedBlogPostText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 20px 20px 20px;
`;

const Root = styled(Section)`
  background-color: #eeeeee;
  border: 1px #dddddd;
  border-style: solid none;
  padding: 40px;
`;

export default BlogSection;
