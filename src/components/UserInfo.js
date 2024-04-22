import popUpWithForm from "./popUpWithForm";

import {
  modalUserInput,
  modalJobInput,
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
  const userInfoList = {};
    userInfoList.title = this._nameElement.textContent;
    userInfoList.description = this._jobElement.textContent;
    return userInfoList;
  
}
}
 /*getUserInfo(inputValues) {
    const userInfoList = {};
    userInfoList.title = this._nameElement.textContent;
    userInfoList.description = this._jobElement.textContent;
    return userInfoList;
  }

  setUserInfo(title, description) {
    this._nameElement.textContent = title;
    this._jobElement.textContent = description;
    this.profileTitle.textContent = title;
    this.profileDescription.textContent = description;
  }
}
*/