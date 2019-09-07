import React from 'react';
import styled from 'styled-components';

const Section = ({ children, width, ...rest }) => (
  <Root {...rest}>
    <WidthLimiter width={width}>{children}</WidthLimiter>
  </Root>
);

const Root = styled.section`
  display: flex;
  justify-content: center;
`;

const WidthLimiter = styled.div`
  width: ${props => (props.width ? props.width : '1000px')};
`;

export default Section;
