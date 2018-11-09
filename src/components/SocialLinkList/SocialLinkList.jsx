import './SocialLinkList.scss';

import React from 'react';
import PropTypes from 'prop-types';

const SocialLinkList = ({ children }) => {
  return (
    <div className="social-link-list">
      <ul>
        {React.Children.map(children, child => (
          <li>{child}</li>
        ))}
      </ul>
    </div>
  );
};

SocialLinkList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default SocialLinkList;
