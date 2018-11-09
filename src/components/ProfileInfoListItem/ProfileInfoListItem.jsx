import './ProfileInfoListItem.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileInfoListItem = ({ icon, text, url }) => {
  const itemText = url ? <a href={url}>{text}</a> : text;

  return (
    <span className="profile-info-list-item">
      <FontAwesomeIcon icon={icon} />
      {itemText}
    </span>
  );
};

ProfileInfoListItem.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string
};

ProfileInfoListItem.defaultProps = {
  url: undefined
};

export default ProfileInfoListItem;
