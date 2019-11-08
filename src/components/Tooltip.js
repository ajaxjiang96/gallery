import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ text }) => (
  <div className="tooltip">
    <div className="shape" />
    <div className="content">{text || 'Untitled'}</div>
  </div>
);

Tooltip.propTypes = {
  text: PropTypes.string,
};

Tooltip.defaultProps = {
  text: 'Untitled',
};

export default Tooltip;
