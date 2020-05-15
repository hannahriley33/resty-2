import React from 'react';

import PropTypes from 'prop-types';

const HistoryCard = ({ url, method }) => (
  <section>
    <p>{url}</p>
    <h3>{method}</h3>
  </section>
);



HistoryCard.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};




export default HistoryCard;
