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
        <section className="section section__header section__white">
          <header className="section-content" role="banner">
            <Header title={title} />
          </header>
        </section>

        <section className="section section__main section__light">
          <main className="section-content">{children}</main>
        </section>

        <section className="section section__dark section__footer">
          <div className="section-content">
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}

export default Layout;
