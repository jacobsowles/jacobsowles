import React from 'react';

import wordcloudImage from '../../../content/assets/skills-wordcloud.png';
import './WordCloud.scss';

const WordCloud = () => (
  <img className="wordcloud" src={wordcloudImage} alt="word cloud" />
);

export default WordCloud;
