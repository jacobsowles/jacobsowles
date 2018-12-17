import React from 'react';
import PropTypes from 'prop-types';
import ProfileInfoHeader from '../ProfileInfoHeader/ProfileInfoHeader';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';

import QuoteContainer from '../QuoteContainer';
import './Profile.scss';

const Profile = ({ children, name, tagline }) => {
  return (
    <div className="profile container-fluid">
      <div className="row">
        <div className="profile-wrapper col-12">
          <ProfilePhoto />

          <div className="profile-info-wrapper">
            <ProfileInfoHeader title={name} subtitle={tagline} />

            <div className="profile-info-body-wrapper">{children}</div>
          </div>
        </div>

        <QuoteContainer />
      </div>
    </div>
  );
};

Profile.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string
};

Profile.defaultProps = {
  tagline: ''
};

export default Profile;
