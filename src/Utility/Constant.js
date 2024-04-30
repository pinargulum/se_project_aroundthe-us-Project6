
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
export const popupSelector = document.querySelector(".modal");
export const profileAddButton = document.querySelector("#profile-add-button");
export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const cardAddModal = document.querySelector("#card-add-modal");
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const newName = document.querySelector("#modal-user-input");
export const newJob = document.querySelector("#modal-job-input");
export const modalAddPlaceTitleInput =
  cardAddModal.querySelector("#modal-place-input");
export const formData = { title: newName, description: newJob };
export const modalAddImageLinkInput =
  cardAddModal.querySelector("#modal-link-input");
export const profileEditForm = document.forms["modal-edit-form"];
export const profileAddForm = document.forms["modal-add-form"];
export const profileAddModal = document.querySelector("#profile-add-modal");
export const config = {
  formElement: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit",
  inactiveButtonClass: "modal__submit_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
