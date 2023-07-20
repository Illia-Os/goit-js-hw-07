import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const markup = galleryItems.reduce(
  (acc, { original, preview, description } = item) =>
    acc +
    `<a class="gallery__item" href="${original}">
        <img class="gallery__image"src="${preview}"data-source="${original}"alt="${description}"
        />
    </a>`,
  ""
);

const imagesContainer = document.querySelector(".gallery");
imagesContainer.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionDelay: 250,
});
