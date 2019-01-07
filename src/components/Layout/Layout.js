import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import './Layout.scss';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const isRootPath = location.pathname === rootPath;

    return (
      <div className="layout">
        <div className="row row__header row__white">
          <header className="row-content" role="banner">
            <Header isRootPath={isRootPath} title={title} />
          </header>
        </div>

        <div className="row row__main row__light">
          <main className="row-content">{children}</main>
        </div>

        <div className="row row__dark row__footer">
          <div className="row-content">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
