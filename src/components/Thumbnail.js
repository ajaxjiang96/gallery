import React from 'react';
import PropTypes from 'prop-types';
import { imageProps } from '../models/propTypes';
import Tooltip from './Tooltip';

const Thumbnail = ({ image, onSelect, selected }) => (
  <li>
    <button onClick={onSelect} type="button" className={`${selected && 'selected'}`}>
      <img className="thumbnail" src={image.urls.thumb} alt={image.alt_description} />
    </button>
    <div className={`indicator ${selected && 'selected'}`} />
    <Tooltip text={image.description} />
  </li>
);

Thumbnail.propTypes = {
  image: imageProps.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Thumbnail;
