const initialCards = [
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

const profileAddButton = document.querySelector("#profile-add-button");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const cardAddModal = document.querySelector("#card-add-modal");
const profileEditCloseButton =
  profileEditModal.querySelector("#modal-edit-close");
const profileAddCloseButton = cardAddModal.querySelector("#modal-add-close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const modalUserInput = document.querySelector("#modal-user-input");

const modalJobInput = document.querySelector("#modal-job-input");

const modalAddPlaceTitleInput =
  cardAddModal.querySelector("#modal-place-input");
const modalAddImageLinkInput = cardAddModal.querySelector("#modal-link-input");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileAddForm = cardAddModal.querySelector("#modal-add-form");
const profileSubmitButton = document.querySelector(".modal__submit");
const profileCreateButton = cardAddModal.querySelector("#modal-create-button");
const previewImageModal = document.querySelector("#preview-image-modal");
const pictureModalCloseButton = previewImageModal.querySelector(
  "#picture-modal-close-button"
);
const cardImagePreview = previewImageModal.querySelector("#card-image-preview");
const modalImageText = previewImageModal.querySelector("#modal-image-text");

//Functions

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closingModalOnEscape);
}
function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closingModalOnEscape);
}
function closingModalOnEscape(e) {
  if (e.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}

const closeModalOut = document.querySelectorAll(".modal");

closeModalOut.forEach((mousedownClosing) => {
  mousedownClosing.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal(mousedownClosing);
    }
  });
});

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardList.appendChild(cardElement);
}
function fillProfileForm() {
  modalUserInput.value = profileTitle.textContent;
  modalJobInput.value = profileDescription.textContent;
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  const titleValue = event.target.title.value;
  const descriptionValue = event.target.description.value;
  profileTitle.textContent = titleValue;
  profileDescription.textContent = descriptionValue;
  closeModal(profileEditModal);
  event.target.reset();
}
profileEditForm.addEventListener("submit", handleProfileFormSubmit);

function handleProfileFormCreate(evt) {
  evt.preventDefault();
  const name = modalAddPlaceTitleInput.value;
  const link = modalAddImageLinkInput.value;
  const cardElement = getCardElement({
    name,
    link,
  });
  cardList.prepend(cardElement);
  closeModal(cardAddModal);
  evt.target.reset();
}

profileAddForm.addEventListener("submit", handleProfileFormCreate);

const cardTemplate = document
  .querySelector("#cards-template")
  .content.querySelector(".card");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_active");
  });

  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.addEventListener("click", () => {
    openModal(previewImageModal);
    modalImageText.textContent = data.name;
    cardImagePreview.src = data.link;
    cardImagePreview.alt = data.name;
  });

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;
  return cardElement;
}
function closePictureModal() {
  closeModal(previewImageModal);
}

pictureModalCloseButton.addEventListener("click", closePictureModal);

//Profile and Card Buttons
profileEditCloseButton.addEventListener("click", () => {
  closeModal(profileEditModal);
});
profileAddCloseButton.addEventListener("click", () => {
  closeModal(cardAddModal);
});
profileEditButton.addEventListener("click", () => {
  openModal(profileEditModal);
  fillProfileForm();
});
profileAddButton.addEventListener("click", () => {
  openModal(cardAddModal);
});

const cardList = document.querySelector(".cards__list");

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardList.appendChild(cardElement);
});
