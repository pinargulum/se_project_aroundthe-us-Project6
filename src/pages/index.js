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
  profileEditButton,
  profileEditForm,
  profileAddForm,
  settings,
} from "../Utility/Constant.js";

function handleProfileFormSubmit({ title, description }) {
  
  userInfo.setUserInfo({ title, description });
  profilePopUp.close();
}

function handleProfileFormCreate(inputValues) {
  const cardElement = createCard(inputValues);
  section.addItem(cardElement);

  cardPopUp.close();
}

function handleImageClick(data) {
  previewPopUp.open(data);
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
const profilePopUp = new popUpWithForm(
  "#profile-edit-modal",
  handleProfileFormSubmit
);

const cardPopUp = new popUpWithForm("#card-add-modal", handleProfileFormCreate);
const previewPopUp = new PopupWithImage("#preview-modal");
previewPopUp.setEventListeners();
const userInfo = new UserInfo("#modal-user-input", "#modal-job-input");

profileEditButton.addEventListener("click", () => {
  profilePopUp.open();
  userInfo.getUserInfo();
});

profileAddButton.addEventListener("click", () => {
  cardPopUp.open();
});

profilePopUp.setEventListeners();
cardPopUp.setEventListeners();

const profileFormValidator = new FormValidator(settings, profileEditForm);
const profileCardFormValidator = new FormValidator(settings, profileAddForm);
profileFormValidator.enableValidation();
profileCardFormValidator.enableValidation();
