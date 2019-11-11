import React, { useState } from 'react';

import ImageService from './services/image';
import Gallery from './components/Gallery';
import imagesData from './data/images.json';
import SearchableH1 from './components/SearchableH1';

function App() {
  const [q, setQ] = useState('Minimal');
  const [images, setImages] = useState([
    ...imagesData.photos.results,
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleChange = (e) => {
    setQ(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.q.blur();
    setLoading(true);
    setError('');
    setImages([]);
    ImageService.fetch(q)
      .then(setImages)
      .then(() => {
        setLoading(false);
        document.title = `${q} | My Unsplash Gallery`;
      }).catch((err) => setError(err.message));
  };

  return (
    <>
      <header>
        <SearchableH1 onSubmit={handleSubmit} onChange={handleChange} content={q} />
      </header>
      {
        error
          ? <p>{error}</p>
          : <Gallery images={images} loading={loading} />
      }
      <footer>
        Designed by Ajax | Powered by
        {' '}
        <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>
      </footer>
    </>
  );
}

export default App;
