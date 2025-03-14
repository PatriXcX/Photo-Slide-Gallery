"use strict";

const prevBtn = document.querySelector(".js__prevBtn");
const nextBtn = document.querySelector(".js__nextBtn");

const handleClickPrevButton = (ev) => {
  ev.preventDefault();

  /*1.Qué imagen se está mostrando"
  2. Quitar la clase spotlight
  3. A la anterior poner la clase spotlight
  */
};

const handleClickNextvButton = (ev) => {
  ev.preventDefault();
};

prevBtn.addEventListener("click", handleClickPrevButton);
nextBtn.addEventListener("click", handleClickNextvButton);
