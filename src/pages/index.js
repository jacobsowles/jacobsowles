import { graphql } from "gatsby";
import Image from "gatsby-image";
import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import Section from "../components/Section";
import SEO from "../components/SEO";
import Text from "../components/Text";
import { init } from "../utils/icons";

init();

class HomePage extends React.PureComponent {
  render() {
    const { data } = this.props;
    const { description } = data.site.siteMetadata;

    return (
      <Layout>
        <SEO
          description="Full-stack software developer. Aspiring everything-elser."
          keywords={[
            `blog`,
            `gatsby`,
            `Jacob Sowles`,
            `javascript`,
            `react`,
            `software development`
          ]}
          title={`${description}`}
        />

        <Image
          fluid={data.profilePhoto.childImageSharp.fluid}
          alt={"Photo of Jacob Sowles"}
          style={{
            borderRadius: "50%",
            height: "300px",
            margin: "20px auto 0 auto",
            width: "300px"
          }}
        />

        <BioSection>
          <div style={{ display: "inline-block", flex: "1" }}>
            <Text
              as="h2"
              center
              lightWeight
              lineHeight="135%"
              margin="0 0 40px 0"
              serif
              size="2.0em"
            >
              Full-stack software developer.
              <br />
              Aspiring everything-elser.
            </Text>

            <Text center light lightWeight>
              React and Node are my jam, but I'll use whatever tools best get
              the job done. Being a great teammate is just as important as
              writing great code. Good code that ships is better than perfect
              code that doesn’t. Prefer simplicity and maintainability over
              cleverness.
            </Text>
          </div>
        </BioSection>
      </Layout>
    );
  }
}

const headerHeight = "50px";

const BioSection = styled(Section)`
  & > div {
    align-items: center;
    display: flex;
    margin-top: ${headerHeight};
    padding: 0 40px 60px 40px;
  }
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
    profilePhoto: file(relativePath: { regex: "/profile-photo.jpg/" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
