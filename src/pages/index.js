import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupDelete from "../components/PopupDelete.js";
import { data } from "autoprefixer";
import {
  profileAddButton,
  profileEditButton,
  avatarEditButton,
  profileSaveButton,
  cardCreateSaveButton,
  avatarSaveButton,
  config,
  newName,
  newJob,
  formData,
  cardElement,
} from "../Utility/Constant.js";

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "266f9e9c-f310-4db4-b30c-94bce5a357d4",
    "Content-Type": "application/json",
  },
});

let section;
let userInfo;

api.userInfoAndCards();
function createCard(cardData) {
  const card = new Card(
    cardData,
    "#cards-template",
    handleImageClick,
    handleCardDelete,
    handleCardLike
  );
  return card.generateCard();
}
api.getInitialCards().then((data) => {
  section = new Section({ items: data, renderer: createCard }, ".cards__list");
  section.renderItems();
});
api.getUser().then(() => {
  userInfo = new UserInfo(
    ".profile__title",
    ".profile__description",
    ".profile__image"
  );
  userInfo.getUserInfo();
});

function handleProfileFormSubmit(formData) {
  profileSaveButton.textContent = "Saving...";
  let profileData = { name: newName.value, about: newJob.value };
  api
    .editProfile(profileData)
    .then(() => {
      userInfo.setUserInfo(formData);
      profileEditPopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      profileSaveButton.textContent = "Save";
    });
}
function handleProfileFormCreate({ name, link }) {
  cardCreateSaveButton.textContent = "Saving...";
  api
    .addNewCard({ name, link })
    .then((cardData) => {
      const cardElement = createCard(cardData);
      section.addItem(cardElement);
      profileCardPopup.close();
      formValidators["card-delete-form"].resetValidation();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      cardCreateSaveButton.textContent = "Save";
    });
}
function handleAvatarFormSubmit({ link }) {
  avatarSaveButton.textContent = "Saving...";
  const avatarLoad = { avatar: link };
  api
    .updateAvatar(avatarLoad)
    .then(() => {
      userInfo.changeAvatarImage(link);
      avatarEditPopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      avatarSaveButton.textContent = "Save";
    });
}

function handleCardDelete(cardData) {
  cardDeletePopup.open();

  formValidators["card-delete-form"].enableValidation();
  cardDeletePopup.setConfirmSubmit(() => {
    const cardId = cardData._id;
    api
      .deleteCard({ cardId })
      .then(() => {
        cardDeletePopup.close();
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

function handleCardLike(cardData) {
  let cardId = cardData._id;
  let isLiked = cardData.isLiked;
  if (isLiked === !isLiked) {
    api
      .toggleCardLike(cardId, isLiked)
      .then(() => {
        cardData.isliked = !isLiked;
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
function handleImageClick(data) {
  previewImagePopup.open(data);
}

const profileEditPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileFormSubmit
);

const profileCardPopup = new PopupWithForm(
  "#card-add-modal",
  handleProfileFormCreate
);
const avatarEditPopup = new PopupWithForm(
  "#avatar-edit-modal",
  handleAvatarFormSubmit
);

const previewImagePopup = new PopupWithImage("#preview-modal");
const cardDeletePopup = new PopupDelete("#card-delete-modal", handleCardDelete);

profileEditButton.addEventListener("click", () => {
  formValidators["profile-edit-form"].resetValidation();
  profileEditPopup.open();
  const { title, description } = userInfo.getUserInfo();
  formData.description.value = description;
  formData.title.value = title;
});

profileAddButton.addEventListener("click", () => {
  profileCardPopup.open();
});
avatarEditButton.addEventListener("click", () => {
  formValidators["avatar-edit-form"].resetValidation();
  avatarEditPopup.open();
});

// SET EVENT LISTENERS
cardDeletePopup.setEventListeners();
profileEditPopup.setEventListeners();
profileCardPopup.setEventListeners();
previewImagePopup.setEventListeners();
avatarEditPopup.setEventListeners();

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
