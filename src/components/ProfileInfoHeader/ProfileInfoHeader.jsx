import './ProfileInfoHeader.scss';

import React from 'react';
import PropTypes from 'prop-types';

const ProfileInfoHeader = ({ subtitle, title }) => {
  return (
    <header className="profile-info-header">
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>

      <hr />
    </header>
  );
};

ProfileInfoHeader.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired
};

ProfileInfoHeader.defaultProps = {
  subtitle: ''
};

export default ProfileInfoHeader;
