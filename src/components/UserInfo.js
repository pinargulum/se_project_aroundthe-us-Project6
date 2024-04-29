import { popupSelector } from "../Utility/Constant";
import PopUp from "./PopUp";
export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  getUserInfo() {
  title.value = this._nameElement.textContent;
    description.value = this._jobElement.textContent;
     this._nameElement.title = this._nameElement.value;
    this._jobElement.description = this._jobElement.value;
    
  }

  setUserInfo({ title, description }) {
    //this._nameElement.title = this._nameElement.value;
    //this._jobElement.description = this._jobElement.value;
    this._nameElement.textContent = title;
    this._jobElement.textContent = description;
  }
}
