import classNames from 'classnames';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import '../../styles/index.scss';
import './Layout.scss';

class Layout extends React.Component {
  render() {
    const {
      backgroundColor,
      backgroundImage,
      children,
      location,
      title,
    } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const isRootPath = location.pathname === rootPath;

    return (
      <div className="layout">
        <section className="section section__header section__white">
          <header className="section-container" role="banner">
            <Header isRootPath={isRootPath} title={title} />
          </header>
        </section>

        <section
          className={classNames(
            'section',
            'section__main',
            backgroundImage
              ? 'section__background-image'
              : `section__${backgroundColor}`
          )}
        >
          {backgroundImage && <Image fluid={backgroundImage} />}
          <main className="section-container" role="main">
            {children}
          </main>
        </section>

        <section className="section section__dark section__footer">
          <div className="section-container">
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}

Layout.propTypes = {
  backgroundColor: PropTypes.oneOf(['light', 'white']),
  backgroundImage: PropTypes.object,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Layout.defaultProps = {
  backgroundColor: 'white',
  backgroundImage: undefined,
};

export default Layout;
