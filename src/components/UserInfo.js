import { popupSelector } from "../Utility/Constant";
import PopUp from "./PopUp";
export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  
    getUserInfo() {
      this._nameElement.value = this._nameElement.textContent;
      this._jobElement.value = this._jobElement.textContent;
      
    }
  

  setUserInfo({ title, description }) {
    this._nameElement.title = this._nameElement.value;
    this._jobElement.description = this._jobElement.value;
    this._nameElement.textContent = title;
    this._jobElement.textContent = description;
  }
}
