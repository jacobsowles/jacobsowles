import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'

import './SocialLink.scss'

const SocialLink = ({ icon, title, url }) => {
  return (
    <a href={url} className="social-link">
      <FontAwesomeIcon icon={icon} title={title} />
    </a>
  )
}

SocialLink.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default SocialLink
