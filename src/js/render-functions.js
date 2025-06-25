import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loaderBackdrop = document.querySelector('.loader-backdrop');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function renderGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <div class="info">
            <div class="info-block">
              <p class="label">Likes</p>
              <p class="value">${likes}</p>
            </div>
            <div class="info-block">
              <p class="label">Views</p>
              <p class="value">${views}</p>
            </div>
            <div class="info-block">
              <p class="label">Comments</p>
              <p class="value">${comments}</p>
            </div>
            <div class="info-block">
              <p class="label">Downloads</p>
              <p class="value">${downloads}</p>
            </div>
          </div>
        </li>
      `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

    lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}
export function showLoader() {
  loaderBackdrop.style.display = 'flex';
}

export function hideLoader() {
  console.log('hideLoader called');
  loaderBackdrop.style.display = 'none';
}