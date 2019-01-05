import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import Logo from '../Logo';
import './Header.scss';

function Header({ isRootPath, title }) {
  const titleHtml = isRootPath ? <h1>{title}</h1> : <h3>{title}</h3>;

  return (
    <Navbar className="header">
      <Navbar.Header>
        <Navbar.Brand>
          <Link className="home-link" to={`/`}>
            <Logo />

            <div className="header-text-wrapper">
              {titleHtml}
              <p className="tagline">
                Full-stack developer. Aspiring everything-elser.
              </p>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

Header.propTypes = {
  isRootPath: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
