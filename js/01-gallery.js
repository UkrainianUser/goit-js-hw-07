import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const createGalleryItems = items => {
    const itemEl = galleryItems
    .map(item => `<div class = gallery__item>
    <a class = gallery__link href = ${item.original}>
    <img class = gallery__image src = ${item.preview} data-source = ${item.original} alt = ${item.description}>
    </a></div>`)
    .join('');
    return itemEl;
};

galleryEl.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));

galleryEl.addEventListener('click', onGalleryItemsClick);

function onGalleryItemsClick (evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
    return; 
    }

    const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}">`)
        .show()

}