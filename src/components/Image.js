import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ fitContain, src, alt }) => (
  <div className="imgContainer">
    <div className={`imgWrapper ${fitContain && 'fit-contain'}`}>
      <img className="galleryMainImg" src={src} alt={alt} />
    </div>
  </div>
);

Image.propTypes = {
  fitContain: PropTypes.bool,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Image.defaultProps = {
  fitContain: false,
  alt: 'Description not available',
};

export default Image;
