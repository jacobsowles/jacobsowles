import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './ImageSupportedText.scss';

const ImageSupportedText = ({ className, children, title }) => (
  <div className={classNames('image-supported-text', className)}>
    {title && <h1>{title}</h1>}
    {children}
  </div>
);

ImageSupportedText.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

ImageSupportedText.defaultProps = {
  className: undefined,
  title: undefined,
};

export default ImageSupportedText;
