"use strict";

const prevBtn = document.querySelector(".js__prevBtn");
const nextBtn = document.querySelector(".js__nextBtn");

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

  //Obtener las imágenes
  const allPhotoItems = getPhotoItems();

  //Qué imagen se está mostrando

  let spotlightedPhotoIndex = getspotlightedPhotoIndex(allPhotoItems);

  //Quitar la clase spotlight
  if (spotlightedPhotoIndex > 0) {
    allPhotoItems[spotlightedPhotoIndex].classList.remove("spotlight");

    //A la anterior poner la clase spotlight
    spotlightedPhotoIndex--;

    allPhotoItems[spotlightedPhotoIndex].classList.add("spotlight");

    activateButtons(spotlightedPhotoIndex, allPhotoItems.length);
  }
};

const handleClickNextvButton = (ev) => {
  ev.preventDefault();

  /*
  1. Traer todas las imágenes
  2. Qué imagen se está mostrando
  3. Quitar la clase spotlight
  4. Siguiente poner la clase spotlight
  */

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
