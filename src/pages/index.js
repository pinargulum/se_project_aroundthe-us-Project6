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
  avatarEditButton,
  profilePicture,
  avatar,
  avatarData,
  profileSaveButton,
  cardElement,
  cardDeleteButton,
  config,
  newAvatar,
  formData,
} from "../Utility/Constant.js";
//import { Api } from "../components/Api.js";

/*const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "e4da9a60-14a9-470b-82ad-04b9f0f450f7",
    "Content-Type": "application/json",
  },
});
*/
function handleProfileFormSubmit(formData) {
  userInfo.setUserInfo(formData);
  profileEditPopup.close();
}

function handleProfileFormCreate(inputValues) {
  const cardElement = createCard(inputValues);
  section.addItem(cardElement);
  profileCardPopup.close();
}

function handleCardDelete(data) {
  //const cardElement = createCard(data);
  
  cardDeletePopup.close();
}

function handleImageClick(data) {
  previewImagePopup.open(data);
}
function handlecardDeleteClick(data) {
  formValidators["card-delete-form"].enableValidation();
  cardDeletePopup.open(data);
}
function handleAvatarFormSubmit() {
  profilePicture.src = newAvatar.value;
  avatarEditPopup.close();
}

function createCard(data) {
  const newCard = new Card(data, "#cards-template", handleImageClick, handlecardDeleteClick);
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
const avatarEditPopup = new PopupWithForm(
  "#avatar-edit-modal",
  handleAvatarFormSubmit
);
const cardDeletePopup = new PopupWithForm(
  "#card-delete-modal",
  handleCardDelete
);

const profileCardPopup = new PopupWithForm(
  "#card-add-modal",
  handleProfileFormCreate
);
//PREVIEW MODAL
const previewImagePopup = new PopupWithImage("#preview-modal");
//USER INFO
const userInfo = new UserInfo(".profile__title", ".profile__description");
const { description, title } = userInfo.getUserInfo();
formData.description.value = description;
formData.title.value = title;

// SET EVENT LISTENERS
cardDeletePopup.setEventListeners();
profileEditPopup.setEventListeners();
profileCardPopup.setEventListeners();
previewImagePopup.setEventListeners();
avatarEditPopup.setEventListeners();

//EVENT LISTENERS
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
avatarEditButton.addEventListener("click", () => {
  formValidators["avatar-edit-form"].enableValidation();
  avatarEditPopup.open();
});



//FORM VALIDATORS
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
