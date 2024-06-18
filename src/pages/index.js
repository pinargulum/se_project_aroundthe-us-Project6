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
  profileSaveButton,
  config,
  formData,
} from "../Utility/Constant.js";
import { Api } from "../components/Api.js";

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "2c0d2519-d264-4b5a-8123-b28a9f9ffd80",
    "Content-Type": "application/json",
  },
  
});

/*"user": {
        "name": "Placeholder name",
        "about": "Placeholder description",
        "avatar": "https://practicum-content.s3.amazonaws.com/resources/avatar_placeholder_1704989734.svg",
        "_id": "c50094d1cd8690dc3927c127"
    },
    "token": "2c0d2519-d264-4b5a-8123-b28a9f9ffd80"
*/
/*function handleProfileFormSubmit(formData) {
  userInfo.setUserInfo(formData);
  profileEditPopup.close();
}
  */
function handleProfileFormSubmit(inputValues) {
  profileSaveButton.textContent = "Saving...";
  api
    .editProfile(inputValues.name, inputValues.description)
    .then((formData) => {
      console.log(formData);
      userInfo.setUserInfo(formData.name, formData.about);
      profileEditPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      profileSaveButton.textContent = "Save";
    });
}

function handleProfileFormCreate(inputValues) {
  const cardElement = createCard(inputValues);
  section.addItem(cardElement);
  profileCardPopup.close();
}

function handleImageClick(data) {
  previewImagePopup.open(data);
}

function handleAvatarFormSubmit() {
  avatarEditPopup.close();
}

function createCard(data) {
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
const avatarEditPopup = new PopupWithForm(
  "#avatar-edit-modal",
  handleAvatarFormSubmit
);
const cardDeletePopup = new PopupWithForm("#card-delete-modal");
const profileCardPopup = new PopupWithForm(
  "#card-add-modal",
  handleProfileFormCreate
);
//previewModal
const previewImagePopup = new PopupWithImage("#preview-modal");
//userinfo
const userInfo = new UserInfo(".profile__title", ".profile__description");
const { description, title } = userInfo.getUserInfo();
formData.description.value = description;
formData.title.value = title;

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

cardDeletePopup.setEventListeners();
profileEditPopup.setEventListeners();
avatarEditPopup.setEventListeners();
profileCardPopup.setEventListeners();
previewImagePopup.setEventListeners();
