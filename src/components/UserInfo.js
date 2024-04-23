import popUpWithForm from "./PopUpWithForm.js";

import { profileTitle, profileDescription } from "../Utility/Constant.js";
export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  getUserInfo() {
    this._nameElement.value = profileTitle.textContent;
    this._jobElement.value = profileDescription.textContent;
  }

  setUserInfo(title, description) {
    title = this._nameElement.value;
    description = this._jobElement.value;
    profileTitle.textContent = title;
    profileDescription.textContent = description;
  }
}
