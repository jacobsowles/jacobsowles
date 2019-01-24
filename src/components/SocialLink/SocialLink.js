import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const SocialLink = ({ className, icon, title, url }) => {
  return (
    <Root href={url} className={className}>
      <FontAwesomeIcon icon={icon} title={title} />
    </Root>
  );
};

SocialLink.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

SocialLink.defaultProps = {
  className: 'social-link-component',
};

const Root = styled.a`
  color: #ffffff;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

export default SocialLink;
