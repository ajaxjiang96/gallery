import React from 'react';
import PropTypes from 'prop-types';

const ImgCaption = ({ title, author, authorLink }) => (
  <figcaption>
    <section>
      <h1>{title || 'Untitled'}</h1>
      <h2>
        Photo By
        {' '}
        <a href={authorLink} target="_blank" rel="noopener noreferrer">{author}</a>
      </h2>
    </section>
  </figcaption>
);

ImgCaption.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string.isRequired,
  authorLink: PropTypes.string.isRequired,
};

ImgCaption.defaultProps = {
  title: 'Untitled',
};
export default ImgCaption;
