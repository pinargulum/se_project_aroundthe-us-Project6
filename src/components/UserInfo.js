export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }
  getUserInfo() {
    this.profileTitle = document.querySelector(".profile__title");
    this.profileDescription = document.querySelector(".profile__description");
    this._nameElement.value = this.profileTitle.textContent;
    this._jobElement.value = this.profileDescription.textContent;
  }

  setUserInfo() {
    this.titleValue = this._nameElement.value;
    this.descriptionValue = this._jobElement.value;
    this.profileTitle.textContent = this.titleValue;
    this.profileDescription.textContent = this.descriptionValue;

  }
}
