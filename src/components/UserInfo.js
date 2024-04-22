import popUpWithForm from "./popUpWithForm";

import {
  profileTitle,
  profileDescription,
} from "../Utility/Constant.js";
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
    this._nameElement.textContent = title;
    this._jobElement.textContent = description;
  }
}

/*setUserInfo(title, description) {
    this._nameElement.textContent = title;
    this._jobElement.textContent = description;
    this.profileTitle.textContent = title;
    this.profileDescription.textContent = description;
  }
*/
