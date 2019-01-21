import React from 'react';

import './ContentCard.scss';

const ContentCard = ({ children, ...rest }) => (
  <div className="content-card" {...rest}>
    {children}
  </div>
);

export default ContentCard;
