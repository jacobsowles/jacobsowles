import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ImageSupportedText = ({ className, children, image, imageAlt }) => (
  <Root className={className}>
    <Image fluid={image} alt={imageAlt} />
    <TextContent>{children}</TextContent>
  </Root>
);

ImageSupportedText.propTypes = {
  className: PropTypes.string,
  image: PropTypes.object.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

ImageSupportedText.defaultProps = {
  className: 'image-supported-text-component',
};

const Root = styled.div`
  display: flex;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  .gatsby-image-wrapper {
    height: 280px;
    width: 280px;
  }

  @media only screen and (max-width: 778px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    .gatsby-image-wrapper {
      width: 100%;
    }
  }
`;

const TextContent = styled.div`
  flex: 1;
  height: 100%;
  padding: 0 20px 20px 20px;

  @media only screen and (max-width: 778px) {
    .text-content {
      width: 100%;
    }
  }
`;

export default ImageSupportedText;
