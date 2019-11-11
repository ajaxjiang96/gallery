import React from 'react';
import PropTypes from 'prop-types';

const PageIndicator = ({ curr, total }) => (
  <span className="pagination">
    {`${curr + 1} / ${total}`}
  </span>
);

PageIndicator.propTypes = {
  curr: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default PageIndicator;
