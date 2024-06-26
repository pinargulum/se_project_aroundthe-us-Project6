import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }
 
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
      this._popupForm.reset();
    });
  }
  _getInputValues() {
    const inputValues = {};
    const inputValueList = this._popupForm.querySelectorAll(".modal__input");
    inputValueList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }
}
