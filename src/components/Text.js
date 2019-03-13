import styled from 'styled-components';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Text = styled.p`
  color: ${props => getFontColor(props)};
  display: block;
  text-align: ${props =>
    props.right ? 'right' : props.center ? 'center' : 'left'};
  font-family: ${props => (props.serif ? fonts.serif : fonts.sansSerif)};
  font-size: ${props => props.size || '1.0em'};
  font-weight: ${props =>
    props.bold ? 'bold' : props.lightWeight ? '300' : 'normal'};
  line-height: ${props => props.lineHeight || '150%'};
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
`;

const getFontColor = props => {
  if (props.color) return props.color;
  if (props.light) return colors.lightFont;
  if (props.white) return colors.whiteFont;

  return colors.darkFont;
};

export default Text;
