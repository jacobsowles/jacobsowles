import PropTypes from 'prop-types';
import React from 'react';

import './Quote.scss';

const Quote = ({ attribution, quote }) => {
  return (
    <div className="quote">
      <hr />
      <p>
        "{quote}" - {attribution}
      </p>
    </div>
  );
};

Quote.propTypes = {
  attribution: PropTypes.string,
  quote: PropTypes.string.isRequired
};

Quote.defaultProps = {
  attribution: 'Anonymous'
};

export default Quote;
