import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const BioInfoItem = ({ className, icon, text, url }) => {
  const itemText = url ? <a href={url}>{text}</a> : text;

  return (
    <Root className={className}>
      <FontAwesomeIcon icon={icon} />
      {itemText}
    </Root>
  );
};

BioInfoItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
};

BioInfoItem.defaultProps = {
  className: 'bio-info-item-component',
  url: undefined,
};

const Root = styled.span`
  svg {
    margin-right: 10px;
  }
`;

export default BioInfoItem;
