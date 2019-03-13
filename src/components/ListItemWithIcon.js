import Image from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

const ListItemWithIcon = ({ children, image, imageAlt, ...rest }) => (
  <Root {...rest}>
    <Image
      fluid={image}
      alt={imageAlt}
      style={{ width: '30px', height: '30px', marginRight: '10px' }}
    />
    {children}
  </Root>
);

const Root = styled.li`
  align-items: center;
  display: flex;
`;

export default ListItemWithIcon;
