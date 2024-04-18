class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }
  // Set Event Listeners
  _setEventListeners() {
    this._cardLikeButton =
      this._cardElement.querySelector(".card__like-button");

    this._cardDeleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );

    this._cardLikeButton.addEventListener("click", () => {
      this._cardLikeButton.classList.toggle("card__like-button_active");
    });

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this);
    });

    this._cardDeleteButton.addEventListener("click", () => {
      this._cardElement.remove();
    });
  }
  

  _getCardTemplate() {
    this._cardTemplate = document.querySelector(this._cardSelector);
    this._cardElement = this._cardTemplate .content
      .querySelector(".card")
      .cloneNode(true);
    return this._cardElement;
  }

  generateCard() {
    this._cardElement = this._getCardTemplate();
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._setEventListeners();
    return this._cardElement;
  }
}

export default Card;
