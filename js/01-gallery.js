import { galleryItems } from './gallery-items.js';


// Change code below this line
const gallery = document.querySelector(".gallery");

const images = galleryItems.map((galleryItem) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}"
        data-source="${galleryItem.original}"
        alt="${galleryItem.description}"
      />
    </a>
  </li>`
});

gallery.insertAdjacentHTML("beforeend", images.join(""));


gallery.addEventListener("click", (event) => {
  event.preventDefault();
  
   if(event.target.nodeName === 'IMG'){
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`,
    );
  instance.show()
  };
});


const modal = document.querySelector('.basiclightbox');
modal.addEventListener('keydown', closeModalOnEscape);


function closeModalOnEscape(event) {
  if (event.key === 'Escape') {
    modal.classList.remove = 'basicLightbox--visible';
  }
}