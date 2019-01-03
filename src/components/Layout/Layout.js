import classNames from 'classnames';
import { Link } from 'gatsby';
import React, { Fragment } from 'react';

import Bio from '../Bio';
import { rhythm, scale } from '../../utils/typography';
import './Layout.scss';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const isRootPath = location.pathname === rootPath;
    let header;

    if (isRootPath) {
      header = (
        <Fragment>
          <h1>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <Bio />
        </Fragment>
      );
    } else {
      header = (
        <h3>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <div className="layout">
        <div className="row row__header row__light">
          <header
            className={classNames({ header__root: isRootPath }, 'row-content')}
            role="banner"
          >
            {header}
          </header>
        </div>

        <div className="row row__main row__white">
          <main className="row-content">{children}</main>
        </div>

        <div className="row row__dark">
          <footer className="row-content">
            <p>All content © {new Date().getFullYear()} Jacob Sowles</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Layout;
