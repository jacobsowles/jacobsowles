import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

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
                Full-stack developer, aspiring everything-elser
              </p>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <ListItem>
            <Link to="/">Blog</Link>
          </ListItem>
          <ListItem>
            <Link to="/about">About</Link>
          </ListItem>
          <ListItem>
            <Link to="/skills">Skills</Link>
          </ListItem>
          <ListItem>
            <Link to="/contact">Contact</Link>
          </ListItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

Header.propTypes = {
  isRootPath: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

/*
 * This is required because Bootstrap's NavItem can't be used with Gatsby's Link component,
 * and using regular HTML <li> tags generates a console error saying that React is trying to
 * pass props to it that the <li> tag doesn't suport.
 */
const ListItem = ({ children }) => <li>{children}</li>;

export default Header;
