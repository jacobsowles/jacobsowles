import classNames from 'classnames';
import React from 'react';

import Header from '../Header';
import './Layout.scss';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const isRootPath = location.pathname === rootPath;

    return (
      <div className="layout">
        <div className="row row__header row__light">
          <header
            className={classNames({ header__root: isRootPath }, 'row-content')}
            role="banner"
          >
            <Header isRootPath={isRootPath} title={title} />
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
