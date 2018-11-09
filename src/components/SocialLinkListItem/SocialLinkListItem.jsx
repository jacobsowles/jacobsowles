import './SocialLinkListItem.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLinkList = ({ icon, title, url }) => {
  return (
    <a href={url} className="social-link-list-ite" title={title}>
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

SocialLinkList.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default SocialLinkList;
