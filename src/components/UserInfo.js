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

  setUserInfo() {
    this._nameElement.name.title = this._nameElement.value;
    this._jobElement.name.description = this._jobElement.value;
   
  }
}


