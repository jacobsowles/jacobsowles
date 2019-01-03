import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

import BioInfoItem from '../BioInfoItem';
import SocialLink from '../SocialLink';
import './Bio.scss';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;

        return (
          <div className="bio">
            <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />

            <p>
              Full-stack developer with a B.S. in Computer Science and a history
              of delivering responsive, cross-browser, accessible web
              applications at the enterprise level.
            </p>

            <div className="list-wrapper">
              <ul className="bio-info-list">
                <li>
                  <BioInfoItem
                    icon={['fas', 'map-marker-alt']}
                    text="Portland, Oregon"
                  />
                </li>
                <li>
                  <BioInfoItem
                    icon={['fas', 'users']}
                    text="Vespa Group"
                    url="https://vespa-group.com"
                  />
                </li>
              </ul>

              <ul className="social-link-list">
                <li>
                  <SocialLink
                    icon={['fas', 'envelope']}
                    url={`mailto:${social.email}`}
                    title="Email"
                  />
                </li>
                <li>
                  <SocialLink
                    icon={['fab', 'linkedin']}
                    url={`https://www.linkedin.com/in/${social.linkedin}/`}
                    title="LinkedIn"
                  />
                </li>
                <li>
                  <SocialLink
                    icon={['fab', 'twitter']}
                    url={`https://twitter.com/${social.twitter}/`}
                    title="Twitter"
                  />
                </li>
                <li>
                  <SocialLink
                    icon={['fab', 'github']}
                    url={`https://github.com/${social.github}/`}
                    title="GitHub"
                  />
                </li>
              </ul>
            </div>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-photo.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          email
          github
          linkedin
          twitter
        }
      }
    }
  }
`;

export default Bio;
