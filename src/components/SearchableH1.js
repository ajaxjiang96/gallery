import React from 'react';
import PropTypes from 'prop-types';

const SearchableH1 = ({ content, onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <h1><input type="text" name="q" value={content} placeholder={content} onChange={onChange} onFocus={(e) => e.target.select()} /></h1>
  </form>
);

SearchableH1.propTypes = {
  content: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchableH1;
