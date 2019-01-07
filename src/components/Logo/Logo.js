import React from 'react';

import logoImage from '../../../content/assets/logo.png';
import './Logo.scss';

const Logo = () => (
  <div className="logo">
    <img src={logoImage} alt="logo" />
  </div>
);

export default Logo;
