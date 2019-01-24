import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ContentCard = ({ className, children, title }) => (
  <Root className={classNames('content-card', className)}>
    {title && <h1>{title}</h1>}
    {children}
  </Root>
);

ContentCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

ContentCard.defaultProps = {
  className: undefined,
  title: undefined,
};

const Root = styled.div`
  background: #ffffff;
  margin-bottom: 20px;
  padding: 30px;

  &:last-child {
    margin-bottom: 0;
  }

  & > h1 {
    margin-top: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export default ContentCard;
