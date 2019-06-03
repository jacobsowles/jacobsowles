import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import BioInfoItem from './BioInfoItem';
import SocialLink from '../SocialLink';
import profileImage from '../../../content/assets/profile-photo.jpg';
import './Bio.scss';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;

        return (
          <div className="bio">
            <img src={profileImage} alt={author} />

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
                    text="Zapier"
                    url="https://zapier.com"
                  />
                </li>
                <li>
                  <BioInfoItem
                    icon={['fas', 'users']}
                    text="Thinkful"
                    url="https://thinkful.com"
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
                    icon={['fab', 'github']}
                    url={`https://github.com/${social.github}/`}
                    title="GitHub"
                  />
                </li>
                <li>
                  <SocialLink
                    icon={['fab', 'medium']}
                    url={`https://medium.com/${social.medium}/`}
                    title="Medium"
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
                    icon={['fab', 'linkedin']}
                    url={`https://www.linkedin.com/in/${social.linkedin}/`}
                    title="LinkedIn"
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
    site {
      siteMetadata {
        author
        social {
          email
          github
          linkedin
          medium
          twitter
        }
      }
    }
  }
`;

export default Bio;
