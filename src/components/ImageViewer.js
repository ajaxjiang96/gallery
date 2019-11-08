import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { imageProps } from '../models/propTypes';
import ToolBar from './ToolBar';
import ImgCaption from './ImgCaption';
import Image from './Image';

const ImageViewer = ({ image, index, total }) => {
  const [contain, setContain] = useState(false);
  return (
    <figure className="imgViewer">
      <ToolBar contain={contain} setContain={setContain} index={index} total={total} />
      <Image src={image.urls.regular} alt={image.alt_description} fitContain={contain} />
      <ImgCaption
        title={image.description}
        authorLink={image.user.links.html}
        author={image.user.name}
      />
    </figure>
  );
};

ImageViewer.propTypes = {
  image: imageProps.isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ImageViewer;
