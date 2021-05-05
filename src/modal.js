import galleryItems from "./gallery-items.js"

const ulgalleryEl = document.querySelector('.js-gallery')
const lightBoxBigPhoto = document.querySelector('.lightbox__image')

const listImages = galleryItems.map(image => {
    const newEl = `<li class = 'gallery__item'><a class = 'gallery__link' href = "${image.original}"><img class = 'gallery__image' src = ${image.preview} data-source = ${image.original} alt=${image.description}></a></li>`
    return newEl
})
ulgalleryEl.insertAdjacentHTML("afterbegin", listImages.join(''));

const refs = {
    openModal: ulgalleryEl,
    closeModal: document.querySelector('[data-action="close-lightbox"]'),
    backdrop: document.querySelector('.lightbox'),
}

refs.openModal.addEventListener('click', onOpenModal);
refs.closeModal.addEventListener('click', onCloseModal);

function onOpenModal(e) {
    e.preventDefault();
    const target = e.target;
    const checkClickPlace = target.classList.contains('gallery__image')
  
    if(!checkClickPlace) {
        return
    }
   
    lightBoxBigPhoto.src = target.dataset.source
    lightBoxBigPhoto.alt = target.alt
    refs.backdrop.classList.add('is-open');
}

function onCloseModal(e) {
    refs.backdrop.classList.remove('is-open')
    lightBoxBigPhoto.src = '#'
    lightBoxBigPhoto.alt = '#'
}

