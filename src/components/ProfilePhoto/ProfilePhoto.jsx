import './ProfilePhoto.scss';

import React from 'react';
import photo from '../../assets/profile-photo.jpg';

const ProfilePhoto = () => {
  return (
    <div className="profile-photo">
      <img src={photo} alt="profile" />
    </div>
  );
};

export default ProfilePhoto;
