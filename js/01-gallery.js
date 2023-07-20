import { galleryItems } from "./gallery-items.js";

// Створення бібліотеки зображень

const galleryLibraryEL = document.querySelector(".gallery");
const imagesListTemplate = ({ preview, original, description }) => {
  return `<a class="gallery__link" href="${original}">
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

galleryLibraryEL.addEventListener("click", handleImgClick);

function handleImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  // Отримати посилання на зображення з атрибуту "data-source"
  const imageSelected = event.target.dataset.source;

  // Перевірити, чи вдалося отримати посилання
  if (!imageSelected) {
    return;
  }

  // Підключення basicLightbox
  const openModalWindow = basicLightbox.create(
    `<img src="${imageSelected}" width="800" height="600">`,
    {
      // Показати
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },
      // Закрити
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );

  // Запуск модального вікна
  openModalWindow.show();

  // Перевірка натиску клавіші Escape
  function closeModal(evt) {
    if (evt.key === "Escape") {
      openModalWindow.close();
    }
  }
}
