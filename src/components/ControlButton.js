import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ControlButton = ({ icon, onClick, disabled }) => (
  <button className="galleryController" type="button" onClick={onClick} disabled={disabled}>
    <FontAwesomeIcon icon={icon} />
  </button>
);

ControlButton.propTypes = {
  icon: FontAwesomeIcon.propTypes.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

ControlButton.defaultProps = {
  disabled: false,
};

export default ControlButton;
