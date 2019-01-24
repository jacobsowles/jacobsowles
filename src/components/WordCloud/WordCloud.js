import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import wordcloudImage from '../../../content/assets/skills-wordcloud.png';

const WordCloud = ({ className }) => (
  <Root className={className} src={wordcloudImage} alt="word cloud" />
);

WordCloud.propTypes = {
  className: PropTypes.string,
};

WordCloud.defaultProps = {
  className: 'wordcloud-component',
};

const Root = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
`;

export default WordCloud;
