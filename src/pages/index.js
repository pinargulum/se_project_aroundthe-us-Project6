import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { data } from "autoprefixer";
import {
  initialCards,
  profileAddButton,
  profileEditButton,
  config,
  formData,
} from "../Utility/Constant.js";

function handleProfileFormSubmit(formData) {
  userInfo.setUserInfo(formData);
  profileEditPopup.close();
}

function handleProfileFormCreate(inputValues) {
  const cardElement = createCard(inputValues);
  section.addItem(cardElement);
  profileCardPopup.close();
}

function handleImageClick(data) {
  previewImagePopup.open(data);
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
const profileEditPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileFormSubmit
);

const profileCardPopup = new PopupWithForm(
  "#card-add-modal",
  handleProfileFormCreate
);
const previewImagePopup = new PopupWithImage("#preview-modal");
const userInfo = new UserInfo(".profile__title", ".profile__description");
const { description, title } = userInfo.getUserInfo();
  formData.description.value = description;
  formData.title.value = title;

profileEditButton.addEventListener("click", () => {
  formValidators["profile-edit-form"].resetValidation();
  profileEditPopup.open();
  const { description, title } = userInfo.getUserInfo();
  formData.description.value = description;
  formData.title.value = title;
});

profileAddButton.addEventListener("click", () => {
  profileCardPopup.open();
});

profileEditPopup.setEventListeners();
profileCardPopup.setEventListeners();
previewImagePopup.setEventListeners();

const formValidators = {};
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(".modal__form"));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const profileForm = formElement.getAttribute("name");
    formValidators[profileForm] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);

