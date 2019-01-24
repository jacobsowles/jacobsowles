import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import '../../styles/index.scss';
import './Layout.scss';

class Layout extends React.Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="layout">
        <div className="row row__header row__white">
          <header className="row-content" role="banner">
            <Header title={title} />
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
