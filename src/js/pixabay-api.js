import axios from 'axios';

const API_KEY = '51048737-dc03a0e07e33d800e7c2950e1';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    };

    return axios
    .get(BASE_URL, { params })
    .then(response => response.data.hits)
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}
