import './ProfileInfoList.scss';

import React from 'react';
import PropTypes from 'prop-types';

const ProfileInfoList = ({ children }) => {
  return (
    <div className="profile-info-list">
      <ul>
        {React.Children.map(children, child => (
          <li>{child}</li>
        ))}
      </ul>
    </div>
  );
};

ProfileInfoList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default ProfileInfoList;
