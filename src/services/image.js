const defaultURL = 'https://api.unsplash.com/search/';

const ImageService = {
  fetch: (query) => {
    const url = new URL(process.env.REACT_APP_UNSPLASH_API_URL || defaultURL);
    url.searchParams.append('query', query);
    url.searchParams.append('client_id', process.env.REACT_APP_UNSPLASH_API_KEY);
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          if (res.status >= 400 && res.status < 500) {
            return reject(new Error('Cannot Find Related Images'));
          }
          if (res.status >= 500) {
            return reject(new Error('Cannot communicate with Unsplash API'));
          }
          return res.json();
        })
        .then((res) => {
          if (!res.status !== 200) {
            return reject(new Error('Cannot Find Related Images'));
          }
          return resolve(res.photos.results);
        })
        .catch(() => reject(new Error('Cannot communicate with Unsplash API')));
    });
  },
};

export default ImageService;
