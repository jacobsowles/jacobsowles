import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'

import './BioInfoItem.scss'

const BioInfoItem = ({ icon, text, url }) => {
  const itemText = url ? <a href={url}>{text}</a> : text

  return (
    <span className="bio-info-item">
      <FontAwesomeIcon icon={icon} />
      {itemText}
    </span>
  )
}

BioInfoItem.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
}

BioInfoItem.defaultProps = {
  url: undefined,
}

export default BioInfoItem
