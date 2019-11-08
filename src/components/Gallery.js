import React, { useState, useEffect, useCallback } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import { galleryProps } from '../models/propTypes';
import ImageViewer from './ImageViewer';
import ImagePlaceholder from './ImagePlaceholder';
import ControlButton from './ControlButton';
import Thumbnails from './Thumbnails';


const Gallery = ({ images, loading }) => {
  const [selectedI, setSelectedI] = useState(0);
  const selected = images[selectedI];

  const navLeft = useCallback(() => setSelectedI(Math.max(selectedI - 1, 0)), [selectedI]);
  const navRight = useCallback(() => setSelectedI(Math.min(selectedI + 1, images.length - 1)),
    [selectedI, images.length]);

  const handleKeyDown = useCallback((e) => {
    switch (e.code) {
      case 'ArrowLeft':
        navLeft(); break;
      case 'ArrowRight':
        navRight(); break;
      default:
    }
  }, [navLeft, navRight]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);


  return (
    <main className="gallery">
      <ControlButton icon={faChevronLeft} onClick={navLeft} disabled={selectedI === 0} />
      <div className="galleryContainer">
        {loading
          ? <ImagePlaceholder />
          : (
            <ImageViewer
              image={selected}
              index={selectedI}
              total={images.length}
              loading={loading}
            />
          )}

        <Thumbnails loading={loading} images={images} select={setSelectedI} selectedI={selectedI} />
      </div>
      <ControlButton
        icon={faChevronRight}
        onClick={navRight}
        disabled={selectedI === images.length - 1}
      />
    </main>
  );
};

Gallery.propTypes = {
  ...galleryProps,
  loading: PropTypes.bool.isRequired,
};

export default Gallery;
