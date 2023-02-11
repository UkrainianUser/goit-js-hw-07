import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const createGalleryItems = items => {
   const itemEl = galleryItems
   .map(item => `<li>
   <a class = gallery__item href = ${item.original}>
   <img class = gallery__image src = ${item.preview} alt = ${item.description}>
   </a></li>`)
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

	let gallery = new SimpleLightbox('.gallery__item');
		gallery.on('show.simplelightbox', function () {
		gallery.defaultOptions.captionDelay = 250;
	});

	console.dir(gallery);
}