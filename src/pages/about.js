import { graphql, Link } from 'gatsby';
import React from 'react';

import ContentCard from '../components/ContentCard';
import ImageSupportedText from '../components/ImageSupportedText';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

class AboutPage extends React.PureComponent {
  render() {
    const { data } = this.props;
    const { social, title } = data.site.siteMetadata;

    return (
      <Layout location={this.props.location} title={title}>
        <SEO
          description="About Jacob Sowles, full-stack software developer"
          keywords={[
            `about`,
            `blog`,
            `gatsby`,
            `Jacob Sowles`,
            `javascript`,
            `react`,
            `software development`,
          ]}
          title="About"
        />

        <ContentCard title="About me">
          <p>
            I'm Jacob. The best way to learn about me is to{' '}
            <Link to="/contact/">get in touch</Link>. But here are some words
            and phrases that illustrate pieces of who I am and how I work.
          </p>

          <ImageSupportedText
            image={data.valueImage.childImageSharp.fluid}
            imageAlt="happy users"
          >
            <h2>Value-driven</h2>

            <p>
              I continually ask myself, "Is what I'm doing adding value?". It's
              easy to get bogged down optimizing code into oblivion, but
              ultimately, we're building the software for a reason: to provide
              value to the users. Great code that ships is better than perfect
              code that doesn't. And code that ships should have concrete
              benefits for the users.
            </p>
          </ImageSupportedText>

          <ImageSupportedText
            image={data.egoImage.childImageSharp.fluid}
            imageAlt="ego"
          >
            <h2>Ego-free</h2>

            <p>
              I lead when my skill set aligns with the task at hand, and I seek
              out (and learn from) others when I recognize that I’m deficient in
              a particular area. Pretending to understand something, or
              exaggerating the extent to which one understands something, is
              damaging and expensive.
            </p>
          </ImageSupportedText>

          <ImageSupportedText
            image={data.communityImage.childImageSharp.fluid}
            imageAlt="open source"
          >
            <h2>Community-focused</h2>

            <p>
              The world is bigger than the company I work for. I strive to
              regularly contribute to the software development community as a
              whole, not just to the people who write my checks. I{' '}
              <a href={`https://github.com/${social.github}`}>
                make open source contributions
              </a>
              ,{' '}
              <a href="https://www.thinkful.com">
                mentor current and prospective software professionals
              </a>
              , <Link to="/">write</Link>{' '}
              <a href={`https://medium.com/${social.medium}`}>blog posts</a>,
              and attend meetups to share what I know and learn from others.
            </p>
          </ImageSupportedText>

          <ImageSupportedText
            image={data.introspectiveImage.childImageSharp.fluid}
            imageAlt="introspective"
          >
            <h2>Introspective</h2>
            <p>
              I regularly evaluate what I know, what I don't know, what I'm
              doing that's working, and what I'm doing that's not. This critical
              analysis of myself and my systems prevents me from getting stuck
              in one pattern of thinking and acting in a way that may no longer
              be ideal. I often look to others (peers, authors, friends) to
              expose myself to new ideas.
            </p>
          </ImageSupportedText>
        </ContentCard>
      </Layout>
    );
  }
}

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        social {
          github
          medium
        }
        title
      }
    }
    communityImage: file(relativePath: { regex: "/community.png/" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    egoImage: file(relativePath: { regex: "/ego.png/" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    introspectiveImage: file(relativePath: { regex: "/introspective.png/" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    valueImage: file(relativePath: { regex: "/value.png/" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
