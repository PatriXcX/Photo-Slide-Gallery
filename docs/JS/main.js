"use strict";

const prevBtn = document.querySelector(".js__prevBtn");
const nextBtn = document.querySelector(".js__nextBtn");
const galleryList = document.querySelector(".js__galleryList");
const accessKey = "6R9Nl3CHIWMEVxo8roxUmqTypvPYqN-7h072E-3wXlY";

// Tamaño fijo de las imágenes originales
const imageWidth = 1200;
const imageHeight = 900;

// Función para obtener las imágenes desde Unsplash
const fetchUnsplashImages = async () => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=animals&per_page=20&client_id=${accessKey}`
    );
    const data = await response.json();
    const photos = data.results;

    galleryList.innerHTML = ""; // Limpia la galería antes de insertar nuevas

    photos.forEach((photo, index) => {
      const li = document.createElement("li");
      li.classList.add("js__photo", "gallery_photoitem");
      if (index === 0) {
        li.classList.add("spotlight");
      }

      const img = document.createElement("img");
      img.classList.add("gallery__image");
      img.src = photo.urls.regular;
      img.alt = photo.alt_description || "Unsplash image";
      img.title = photo.description || "Unsplash image";

      // Establecer el tamaño de las imágenes de Unsplash al tamaño de la imagen original
      img.style.width = `${imageWidth}px`;
      img.style.height = `${imageHeight}px`;

      li.appendChild(img);
      galleryList.appendChild(li);
    });

    activateButtons(0, photos.length); // Activar/desactivar botones al inicio
  } catch (error) {
    console.error("Error al obtener imágenes de Unsplash:", error);
  }
};

const getPhotoItems = () => {
  return [...document.querySelectorAll(".js__photo")];
};

const getspotlightedPhotoIndex = (allPhotoItems) => {
  return allPhotoItems.findIndex((liElem) =>
    liElem.classList.contains("spotlight")
  );
};

const activateButtons = (spotlightedPhotoIndex, length) => {
  prevBtn.disabled = spotlightedPhotoIndex === 0;
  nextBtn.disabled = spotlightedPhotoIndex === length - 1;
};

const handleClickPrevButton = (ev) => {
  ev.preventDefault();
  const allPhotoItems = getPhotoItems();
  let spotlightedPhotoIndex = getspotlightedPhotoIndex(allPhotoItems);

  if (spotlightedPhotoIndex > 0) {
    allPhotoItems[spotlightedPhotoIndex].classList.remove("spotlight");
    spotlightedPhotoIndex--;
    allPhotoItems[spotlightedPhotoIndex].classList.add("spotlight");
    activateButtons(spotlightedPhotoIndex, allPhotoItems.length);
  }
};

const handleClickNextvButton = (ev) => {
  ev.preventDefault();
  const allPhotoItems = getPhotoItems();
  let spotlightedPhotoIndex = getspotlightedPhotoIndex(allPhotoItems);

  if (spotlightedPhotoIndex < allPhotoItems.length - 1) {
    allPhotoItems[spotlightedPhotoIndex].classList.remove("spotlight");
    spotlightedPhotoIndex++;
    allPhotoItems[spotlightedPhotoIndex].classList.add("spotlight");
    activateButtons(spotlightedPhotoIndex, allPhotoItems.length);
  }
};

prevBtn.addEventListener("click", handleClickPrevButton);
nextBtn.addEventListener("click", handleClickNextvButton);

// 👇 Ejecuta la carga de imágenes al cargar la página
fetchUnsplashImages();
