import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';

import Bio from '../Bio';
import './Footer.scss';

function Footer() {
  return (
    <StaticQuery
      query={footerQuery}
      render={data => {
        const { author } = data.site.siteMetadata;

        return (
          <footer>
            <div className="footer-column-wrapper">
              <div className="footer-column">
                <Bio />
              </div>
              <nav className="footer-column footer-nav">
                <ul>
                  <li>
                    <Link to={'/'}>Blog</Link>
                    <p>
                      Written content about technology, productivity, and more
                    </p>
                  </li>
                  <li>
                    <Link to={'/about/'}>About</Link>
                    <p>A bit about who I am and how I work</p>
                  </li>
                  <li>
                    <Link to={'/skills/'}>Skills</Link>
                    <p>A summary of my strengths</p>
                  </li>
                  <li>
                    <Link to={'/contact/'}>Contact</Link>
                    <p>Get in touch</p>
                  </li>
                </ul>
              </nav>
            </div>
            <small>
              All content © {new Date().getFullYear()}{' '}
              <Link to={'/'}>{author}</Link>
            </small>
          </footer>
        );
      }}
    />
  );
}

const footerQuery = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default Footer;
