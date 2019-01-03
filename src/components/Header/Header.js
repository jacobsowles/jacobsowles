import { graphql, Link, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import './Header.scss';

function Header({ isRootPath, title }) {
  const titleHtml = isRootPath ? <h1>{title}</h1> : <h3>{title}</h3>;

  return (
    <StaticQuery
      query={headerQuery}
      render={data => {
        const { author } = data.site.siteMetadata;

        return (
          <div className="header">
            <Link className="home-link" to={`/`}>
              <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />

              <div className="header-text-wrapper">
                {titleHtml}
                <p className="tagline">
                  Full-stack developer. Aspiring everything-elser.
                </p>
              </div>
            </Link>
          </div>
        );
      }}
    />
  );
}

Header.propTypes = {
  isRootPath: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

const headerQuery = graphql`
  query HeaderQuery {
    avatar: file(absolutePath: { regex: "/profile-photo.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default Header;
