import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Створення бібіліотеки зображень
const galleryLibraryEL = document.querySelector(".gallery");

const imagesListTemplate = ({ preview, original, description }) => {
  return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" title="${description}" alt="${description}" />
    </a>`;
};

const addImg = galleryItems.map(imagesListTemplate).join("");
galleryLibraryEL.insertAdjacentHTML("afterbegin", addImg);

// Додаємо дію при кліку

galleryLibraryEL.addEventListener("click", oneGalleryImgClick);

function oneGalleryImgClick(evt) {
  const imageSelected = evt.target.getAttribute("data-source");

  // Відміна поведінки за замовчуванням (відміна завантаження файлу)
  evt.preventDefault();

  // Перевірка що клік на зображенні
  if (!imageSelected) {
    return;
  }
}

// Підключення SimpleLightbox
new SimpleLightbox(".gallery a", { captionDelay: 250, showCounter: false });
