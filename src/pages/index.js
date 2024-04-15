import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import popUpWithForm from "../components/popUpWithForm.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/popUpWithImage.js";
import { data } from "autoprefixer";
import {
  initialCards,
  profileAddButton,
  profileEditForm,
  profileAddForm,
} from "../../Utility.JS/Constant.js";

function handleProfileFormSubmit() {
  filledUserInfo.setUserInfo();
  profilePopUp.close();
}

function handleProfileFormCreate(inputValues) {
  const cardElement = createCard(inputValues);
  newCards.addItem(cardElement);

  cardValidator.resetValidation();
  cardPopUp.close();
}

function handleImageClick(data) {
  previewPopUp.open(data);
}

export function createCard(data) {
  const createNewCard = new Card(data, "#cards-template", handleImageClick);
  return createNewCard.generateCard(data);
}

const newCards = new Section(
  { items: initialCards, renderer: createCard },
  ".cards__list"
);

newCards.renderItems();
const profilePopUp = new popUpWithForm(
  "#profile-edit-modal",
  handleProfileFormSubmit
);

const cardPopUp = new popUpWithForm("#card-add-modal", handleProfileFormCreate);
const previewPopUp = new PopupWithImage("#preview-modal");
previewPopUp.setEventListeners();
const filledUserInfo = new UserInfo("#modal-user-input", "#modal-job-input");

profileEditButton.addEventListener("click", () => {
  profilePopUp.open();
  filledUserInfo.getUserInfo();
});

profileAddButton.addEventListener("click", () => {
  cardPopUp.open();
});

profilePopUp.setEventListeners();
cardPopUp.setEventListeners();

//Form Validator with Form Validator Class
const settings = {
  formElement: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit",
  inactiveButtonClass: "modal__submit_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const formValidator = new FormValidator(settings, profileEditForm);
const cardValidator = new FormValidator(settings, profileAddForm);
formValidator.enableValidation();
cardValidator.enableValidation();
