import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ContentCard = ({ className, children, title }) => (
  <Root className={className}>
    {title && <Title>{title}</Title>}
    {children}
  </Root>
);

ContentCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

ContentCard.defaultProps = {
  className: 'content-card-component',
  title: undefined,
};

const Root = styled.div`
  background: #ffffff;
  margin-bottom: 20px;
  padding: 30px;

  p:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  margin-top: 0;
`;

export default ContentCard;
