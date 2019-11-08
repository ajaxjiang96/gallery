import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconButton = ({ icon, onClick }) => (
  <button type="button" onClick={onClick}>
    <FontAwesomeIcon icon={icon} />
  </button>
);

IconButton.propTypes = {
  icon: FontAwesomeIcon.propTypes.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
