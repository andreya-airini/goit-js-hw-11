import { getImagesByQuery } from './js/pixabay-api';
import { renderGallery, showLoader, hideLoader,  clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

const query = form.elements['search-text'].value.trim();
    
  clearGallery();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }
    
    showLoader();

     getImagesByQuery(query)
    .then(images => {
      if (images.length === 0) {
        iziToast.info({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            color: 'red',
          position: 'topRight',
        });
        return;
      }

    renderGallery(images);
    })
    .catch(error => {
      iziToast.error({
          message: 'Something went wrong. Please try again later.',
          color: 'red',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
