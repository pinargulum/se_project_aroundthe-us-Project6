import Popup from "./PopUp.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupElement = document.querySelector(popupSelector);
  }
  open(data) {
    super.open();
    const modalImage = document.querySelector(".card__image-preview");
    const imageText = document.querySelector(".modal__text");
    imageText.textContent = data._name;
    modalImage.src = data._link;
    modalImage.alt = data._name;
  }
}
