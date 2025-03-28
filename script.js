const galleryItems = [
    {
      preview: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/cat-2546__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/cat-2546_1280.jpg',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg',
      },
      {
        preview: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/cat-2546__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/cat-2546_1280.jpg',
      },
      {
        preview: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg',
      },
      {
        preview: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/cat-2546__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/cat-2546_1280.jpg',
      },
      
  ];
  
  const galleryContainer = document.querySelector('.js-gallery');
  const modal = document.querySelector('.js-lightbox');
  const modalImage = document.querySelector('.lightbox__image');
  const closeButton = document.querySelector('[data-action="close-lightbox"]');
  const overlay = document.querySelector('.lightbox__overlay');
  
  const createGalleryMarkup = items => {
    return items
      .map(
        ({ preview, original, description }) => `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
      `
      )
      .join('');
  };
  
  galleryContainer.innerHTML = createGalleryMarkup(galleryItems);
  
  galleryContainer.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;
  
    modal.classList.add('is-open');
    modalImage.src = event.target.dataset.source;
    modalImage.alt = event.target.alt;
  });
  
  const closeModal = () => {
    modal.classList.remove('is-open');
    modalImage.src = '';
    modalImage.alt = '';
  };
  
  closeButton.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal();
  });
  