import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import logoImage from '../../../content/assets/logo.png';

const Logo = ({ className }) => (
  <Root className={className}>
    <Image src={logoImage} alt="logo" />
  </Root>
);

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: 'logo-component',
};

const Root = styled.div``;

const Image = styled.img`
  height: 50px;
  margin-right: 20px;
  vertical-align: middle;
  width: 50px;
`;

export default Logo;
