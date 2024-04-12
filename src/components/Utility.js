export default class Utility {
  constructor(items, renderer, containerSelector) {
    this._initialAray = items;
    this.renderer = renderer;
    this.containerSelector = document.querySelector(containerSelector);
  };
  renderItems() {
    this._initialAray.forEach((item) => {
        
        this.addItem(this.renderer(item));
      });
      
  };
  addItem(element) {
    this.containerSelector.prepend(element);
  };
}
