import classNames from 'classnames';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import './ImageSupportedText.scss';

const ImageSupportedText = ({ className, children, image, imageAlt }) => (
  <div className={classNames('image-supported-text', className)}>
    <Image fluid={image} alt={imageAlt} />
    <div className="text-content">{children}</div>
  </div>
);

ImageSupportedText.propTypes = {
  className: PropTypes.string,
  image: PropTypes.object.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

ImageSupportedText.defaultProps = {
  className: undefined,
};

export default ImageSupportedText;
