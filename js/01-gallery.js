import { galleryItems } from "./gallery-items.js";
// Change code below this line
// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();

// console.log(galleryItems);

// Створення бібіліотеки зображень і

const galleryLibraryEL = document.querySelector(".gallery");
const imagesListTemplate = ({ preview, original, description }) => {
  return `  <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
            </a>`;
};

const addImg = galleryItems.map(imagesListTemplate).join("");
galleryLibraryEL.insertAdjacentHTML("afterbegin", addImg);

// Додаємо дію при кліку

galleryLibraryEL.addEventListener("click", oneGalleryImgClick);

function oneGalleryImgClick(evt) {
  const imageSelected = evt.target.getAttribute("data-source");

  // Відміна поведінки за замовчуванням
  evt.preventDefault();

  // Перевірка що клік на зображенні
  if (!imageSelected) {
    return;
  }

  //Підключенння basicLightbox
  const openModulWindow = basicLightbox.create(
    `<img src="${imageSelected}" width="800" height="600">`,
    {
      // показати
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },
      // закрити
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );

  // Запуск модального вікна
  openModulWindow.show();

  // перевірка натиску клавіші Escape
  function closeModal(evt) {
    if (evt.key === "Escape") {
      openModulWindow.close();
    }
  }
}
