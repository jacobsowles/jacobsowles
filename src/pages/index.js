import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import BlogSection from '../components/BlogSection';
import Layout from '../components/Layout';
import ListItemWithIcon from '../components/ListItemWithIcon';
import Section from '../components/Section';
import SEO from '../components/SEO';
import Text from '../components/Text';
import { init } from '../utils/icons';

init();

class HomePage extends React.PureComponent {
  render() {
    const { data } = this.props;
    const { description } = data.site.siteMetadata;
    const blogPosts = data.allMarkdownRemark.edges;
    const latestBlogPost = blogPosts[0].node;
    const nextBlogPosts = blogPosts.slice(1, 4);

    return (
      <Layout>
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

        <Section>
          <Header>
            <Name>Jacob Sowles</Name>

            <MenuLink to={'/'}>Home</MenuLink>
            <MenuLink to={'/blog/'}>Blog</MenuLink>
          </Header>
        </Section>

        <BioSection>
          <div style={{ display: 'inline-block', flex: '1' }}>
            <Text
              as="h2"
              center
              lightWeight
              lineHeight="135%"
              margin="0 0 40px 0"
              serif
              size="2.2em"
            >
              Full-stack software developer.
              <br />
              Aspiring everything-elser.
            </Text>

            <Text center light lightWeight>
              React and Node are my jam, but I'll use whatever tools best get
              the job done.
              <br />
              Being a great teammate is just as important as writing great code.
              <br />
              Good code that ships is better than perfect code that doesn’t.
              <br />
              Prefer simplicity and maintainability over cleverness.
            </Text>
          </div>
        </BioSection>

        <BlogSection latestPost={latestBlogPost} nextPosts={nextBlogPosts} />

        <Section style={{ backgroundColor: '#ffffff', padding: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Card>
              <Text as="h3" size="1.4em">
                Currently working with
              </Text>

              <ListItems>
                <ListItemWithIcon
                  image={data.zapierLogo.childImageSharp.fluid}
                  imageAlt="Zapier logo"
                >
                  <Text>
                    <a href="https://zapier.com">Zapier</a>
                    <Text
                      light
                      margin="0 0 0 31px"
                      size="0.8em"
                      style={{ display: 'inline' }}
                    >
                      front-end developer
                    </Text>
                  </Text>
                </ListItemWithIcon>

                <ListItemWithIcon
                  image={data.thinkfulLogo.childImageSharp.fluid}
                  imageAlt="Thinkful logo"
                >
                  <Text>
                    <a href="https://thinkful.com">Thinkful</a>
                    <Text
                      light
                      margin="0 0 0 20px"
                      size="0.8em"
                      style={{ display: 'inline' }}
                    >
                      developer mentor
                    </Text>
                  </Text>
                </ListItemWithIcon>
              </ListItems>
            </Card>

            <Card>
              <Text as="h3" margin="0 0 10px 0" size="1.4em">
                Open source contributor to
              </Text>

              <ListItems>
                <ListItemWithIcon
                  image={data.doistLogo.childImageSharp.fluid}
                  imageAlt="Doist logo"
                >
                  <Text>
                    <a href="https://github.com/Doist/reactist">reactist</a>
                  </Text>
                </ListItemWithIcon>

                <ListItemWithIcon
                  image={data.gatsbyLogo.childImageSharp.fluid}
                  imageAlt="Gatsby logo"
                >
                  <Text>
                    <a href="https://github.com/gatsbyjs/gatsby">gatsby</a>
                  </Text>
                </ListItemWithIcon>

                <ListItemWithIcon
                  image={data.fontAwesomeLogo.childImageSharp.fluid}
                  imageAlt="FontAwesome logo"
                >
                  <Text>
                    <a href="https://github.com/FortAwesome/react-fontawesome">
                      react-fontawesome
                    </a>
                  </Text>
                </ListItemWithIcon>
              </ListItems>

              <Text as="small" right size="0.8em">
                <a
                  href="https://github.com/jacobsowles"
                  style={{
                    padding: '8px 16px',
                    border: '2px solid #cccccc',
                    textDecoration: 'none',
                  }}
                >
                  ...and more
                </a>
              </Text>
            </Card>

            <Card>
              <Text as="h3" margin="0 0 10px 0" size="1.4em">
                Get in touch via
              </Text>

              <ListItems>
                <ListItemWithIcon
                  image={data.gatsbyLogo.childImageSharp.fluid}
                  imageAlt="mail icon"
                >
                  <Text>
                    <a href="mailto:jacob@jacobsowles.com">email</a>
                  </Text>
                </ListItemWithIcon>

                <ListItemWithIcon
                  image={data.gatsbyLogo.childImageSharp.fluid}
                  imageAlt="twitter logo"
                >
                  <Text>
                    <a href="https://twitter.com/jacobsowles">Twitter</a>
                  </Text>
                </ListItemWithIcon>

                <ListItemWithIcon
                  image={data.gatsbyLogo.childImageSharp.fluid}
                  imageAlt="github logo"
                >
                  <Text>
                    <a href="https://github.com/jacobsowles">GitHub</a>
                  </Text>
                </ListItemWithIcon>
              </ListItems>
            </Card>
          </div>
        </Section>
      </Layout>
    );
  }
}

const headerHeight = '50px';

const BioSection = styled(Section)`
  & > div {
    align-items: center;
    display: flex;
    margin-top: ${headerHeight};
    padding: 40px 40px 60px 40px;
  }
`;

const Card = styled.div`
  background-color: #ffffff;
  margin-right: 20px;
  padding: 0 20px;
  width: 33%;

  &:last-child {
    margin-right: 0;
  }
`;

const ListItems = styled.ul`
  padding: 0;

  li {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const MenuLink = styled(Link)`
  color: #cccccc;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8em;
  padding: 0 10px;
  text-decoration: none;
`;

const Header = styled.header`
  align-items: center;
  display: flex;
  font-weight: normal;
  height: ${headerHeight};
  position: fixed;
`;

const Name = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8em;
  letter-spacing: 2px;
  margin: 0 20px 0 0;
  text-transform: uppercase;
`;

export default HomePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
        title
      }
    }
    doistLogo: file(relativePath: { regex: "/doist-logo.png/" }) {
      childImageSharp {
        fluid(maxWidth: 50, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fontAwesomeLogo: file(relativePath: { regex: "/font-awesome-logo.png/" }) {
      childImageSharp {
        fluid(maxWidth: 50, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gatsbyLogo: file(relativePath: { regex: "/gatsby-logo.png/" }) {
      childImageSharp {
        fluid(maxWidth: 50, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thinkfulLogo: file(relativePath: { regex: "/thinkful-logo.png/" }) {
      childImageSharp {
        fluid(maxWidth: 50, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    zapierLogo: file(relativePath: { regex: "/zapier-logo.png/" }) {
      childImageSharp {
        fluid(maxWidth: 50, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    profilePhoto: file(relativePath: { regex: "/profile-photo.jpg/" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    openSource: file(relativePath: { regex: "/open-source.jpg/" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            subtitle
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
