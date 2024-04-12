import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import popUpWithForm from "../components/popUpWithForm.js";
import Utility from "../components/Utility.js";
import PopupWithImage from "../components/popUpWithImage.js";

export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];
const popupSelector = document.querySelector(".modal");
const profileAddButton = document.querySelector("#profile-add-button");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const cardAddModal = document.querySelector("#card-add-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const modalUserInput = document.querySelector("#modal-user-input");
const modalJobInput = document.querySelector("#modal-job-input");
const cardInput = cardAddModal.querySelector("#modal-place-input");

const linkInput = cardAddModal.querySelector("#modal-link-input");
const profileEditForm = document.forms["modal-edit-form"];
const profileAddForm = document.forms["modal-add-form"];
const profileAddModal = document.querySelector("#profile-add-modal");

function handleProfileFormSubmit() {
  /*inputValues = [
    { 
      title: modalUserInput.value,
      description: modalJobInput.value,
    },
  ];
  */
  filledUserInfo.setUserInfo();
  profilePopUp.close();
}

function handleProfileFormCreate(inputValues) {
  
  inputValues = [
    { 
      name: cardInput.value,
      link: linkInput.value,
    },
    
  ];
  
  cardValidator.resetValidation();
  cardPopUp.close();
}
/*function addNewcard(data) {
  element = createCard(data);
  newCards.inputValues.addItem(element);
}
*/
function handleImageClick(data) {
  previewPopUp.open(data);
}

export function createCard(data) {
  const createNewCard = new Card(data, "#cards-template", handleImageClick);
  return createNewCard.generateCard(data);
}
//const cardList = document.querySelector(".cards__list");


const newCards = new Utility({ items:initialCards, renderer:createCard }, ".cards__list")

newCards.renderItems();
// NEWPOPUP FORMS
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
