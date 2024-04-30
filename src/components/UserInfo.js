import { newName, newJob } from "../Utility/Constant";

export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  getUserInfo() {
    const title = newName;
    const description = newJob;
    title.value = this._nameElement.textContent;
    description.value = this._jobElement.textContent;
    return {
      title: this._nameElement.textContent,
      description: this._jobElement.textContent,
    };
  }

  setUserInfo({ title, description }) {
    this._nameElement.title = this._nameElement.value;
    this._jobElement.description = this._jobElement.value;
    this._nameElement.textContent = title;
    this._jobElement.textContent = description;
  }
}
