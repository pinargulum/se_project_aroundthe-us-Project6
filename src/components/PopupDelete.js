import Popup from "../components/Popup.js";
import Card from "../components/Card.js";
export default class PopupDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
  }
  setConfirmSubmit(handleFormSubmit) {
    this._handleFormSubmit = handleFormSubmit;
  }
  open() {
    super.open();
  }
  close() {
    super.close();
    
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  }
}