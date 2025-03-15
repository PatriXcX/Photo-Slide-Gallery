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

const handleClickPrevButton = (ev) => {
  ev.preventDefault();

  //Obtener las imágenes
  const allPhotoItems = getPhotoItems();

  //Qué imagen se está mostrando

  const spotlightedPhotoIndex = getspotlightedPhotoIndex(allPhotoItems);

  //Quitar la clase spotlight
  if (spotlightedPhotoIndex > 0) {
    allPhotoItems[spotlightedPhotoIndex].classList.remove("spotlight");

    //A la anterior poner la clase spotlight
    allPhotoItems[spotlightedPhotoIndex - 1].classList.add("spotlight");
  }
};

const activateButtons = (spotlightedPhotoIndex, length) => {
  prevBtn.disable = spotlightedPhotoIndex === 0;
  nextBtn.disable = spotlightedPhotoIndex === length - 1;
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

  const spotlightedPhotoIndex = getspotlightedPhotoIndex(allPhotoItems);

  if (spotlightedPhotoIndex < allPhotoItems.length - 1) {
    allPhotoItems[spotlightedPhotoIndex].classList.remove("spotlight");

    allPhotoItems[spotlightedPhotoIndex + 1].classList.add("spotlight");
  }
};

prevBtn.addEventListener("click", handleClickPrevButton);
nextBtn.addEventListener("click", handleClickNextvButton);
