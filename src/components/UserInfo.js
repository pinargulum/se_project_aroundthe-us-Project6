
export default class UserInfo {
  constructor(titleSelector, descriptionSelector) {
    this._nameElement = document.querySelector(titleSelector);
    this._jobElement = document.querySelector(descriptionSelector);
  }

  getUserInfo() {
    this.profileTitle = document.querySelector(".profile__title");
    this.profileDescription = document.querySelector(".profile__description");
    this._nameElement.value = this.profileTitle.textContent;
    this._jobElement.value = this.profileDescription.textContent;
  }

  setUserInfo({ title, description }) {
    title = this._nameElement.value;
    description = this._jobElement.value;
    profileTitle.textContent = title;
    profileDescription.textContent = description;
  }
}
