
export class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    }).then(this._checkResponse);
  }
  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    }).then(this._checkResponse);
  }

  renderCards() {
    return Promise.all(this.getUserInfo(), this.getInitialCards());
  }

  async editProfile(name, about) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._checkResponse);
  }
  addNewCard(name, link) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._checkResponse);
  }
  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._checkResponse);
  }

  addLike(data) {
    return fetch(`${this.baseUrl}/cards/likes/${data}`, {
      method: "PUT",
      headers: this.headers,
    }).then(this._checkResponse);
  }
  removeLike(data) {
    return fetch(`${this.baseUrl}/cards/likes/${data}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._checkResponse);
  }
  updateProfilePicture(avatar) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then(this._checkResponse);
  }
}

// other methods for working with the API
