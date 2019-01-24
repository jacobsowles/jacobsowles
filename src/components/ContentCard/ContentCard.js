import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './ContentCard.scss';

const ContentCard = ({ className, children, title }) => (
  <div className={classNames('content-card', className)}>
    {title && <h1>{title}</h1>}
    {children}
  </div>
);

ContentCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

ContentCard.defaultProps = {
  className: undefined,
  title: undefined,
};

export default ContentCard;
