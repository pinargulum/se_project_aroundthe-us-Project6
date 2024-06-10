class Api {
    constructor(options) {
      // constructor body
    }
  
    
    getInitialCards() {
        return fetch("https://around-api.en.tripleten-services.com/v1", {
          headers: {
            authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6"
          }
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            // if the server returns an error, reject the promise
            return Promise.reject(`Error: ${res.status}`);
          });
      }
  
      api.getInitialCards()
      .then((result) => {
        // process the result
      })
      .catch((err) => {
        console.error(err); // log the error to the console
      });
    
  
  
  const api = new Api({
    baseUrl: "https://around-api.en.tripleten-services.com/v1",
    headers: {
      authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
      "Content-Type": "application/json"
    }
  })




/*{
    "user": {
        "name": "Placeholder name",
        "about": "Placeholder description",
        "avatar": "https://practicum-content.s3.amazonaws.com/resources/avatar_placeholder_1704989734.svg",
        "_id": "1b6fc9245640fdf015abf277"
    },
    "token": "bbccb74d-3563-4793-a920-687f757d0d23"
}
*/
