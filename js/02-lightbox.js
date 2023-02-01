import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListRefs = document.querySelector('.gallery');
const markapList = galleryItems
  .map(img => {
    return `<a class="gallery__item" href="${img.original}">
  <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
</a>`;
  })
  .join('');
galleryListRefs.innerHTML = markapList;

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});