import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PopUpWithForm from "../components/PopUpWithForm.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopUpWithImage.js";
import { data } from "autoprefixer";
import {
  initialCards,
  profileAddButton,
  profileEditButton,
  config,
  profileAddForm,
  profileEditForm,
} from "../Utility/Constant.js";

function handleProfileFormSubmit() {
  userInfo.setUserInfo();
  profileEditPopUp.close();
}

function handleProfileFormCreate(inputValues) {
  const cardElement = createCard(inputValues);
  section.addItem(cardElement);
  formValidators[profileAddForm].resetValidation();
  profileCardPopUp.close();
}

function handleImageClick(data) {
  previewImagePopUp.open(data);
}

export function createCard(data) {
  const newCard = new Card(data, "#cards-template", handleImageClick);
  return newCard.generateCard();
}

const section = new Section(
  { items: initialCards, renderer: createCard },
  ".cards__list"
);

section.renderItems();
const profileEditPopUp = new PopUpWithForm(
  "#profile-edit-modal",
  handleProfileFormSubmit
);

const profileCardPopUp = new PopUpWithForm(
  "#card-add-modal",
  handleProfileFormCreate
);
const previewImagePopUp = new PopupWithImage("#preview-modal");
const userInfo = new UserInfo("#modal-user-input", "#modal-job-input");

profileEditButton.addEventListener("click", () => {
  profileEditPopUp.open();
  userInfo.getUserInfo();
});

profileAddButton.addEventListener("click", () => {
  profileCardPopUp.open();
});

profileEditPopUp.setEventListeners();
profileCardPopUp.setEventListeners();
previewImagePopUp.setEventListeners();

const formValidators = {};
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(".modal__form"));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    formValidators[profileEditForm] = validator;
    formValidators[profileAddForm] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);
