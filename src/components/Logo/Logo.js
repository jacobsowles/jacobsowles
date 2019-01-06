import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

function Logo() {
  return (
    <StaticQuery
      query={logoQuery}
      render={data => {
        return <Image fixed={data.logo.childImageSharp.fixed} alt="logo" />;
      }}
    />
  );
}

const logoQuery = graphql`
  query logoQuery {
    logo: file(absolutePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Logo;
