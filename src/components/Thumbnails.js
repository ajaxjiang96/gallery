import React from 'react';
import PropTypes from 'prop-types';
import { imageProps } from '../models/propTypes';
import Thumbnail from './Thumbnail';

const Thumbnails = ({
  loading, images, select, selectedI,
}) => (
    // eslint-disable-next-line react/jsx-indent
    <ul className={`${loading && 'loading'}`}>
      {images.map((image, i) => (
        <Thumbnail
          key={image.id}
          image={image}
          onSelect={() => select(i)}
          selected={selectedI === i}
        />
      ))}
    </ul>
    // eslint-disable-next-line indent
  );

Thumbnails.propTypes = {
  loading: PropTypes.bool.isRequired,
  select: PropTypes.func.isRequired,
  selectedI: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    imageProps,
  ).isRequired,
};

export default Thumbnails;
