class Popup {
  constructor({ popupSelector }) {
    this._popupSelector = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupSelector.querySelector(".popup__close");
  }

  _handleEscapeClose() {
    if (evt.key === "escape") {
      close();
    }
  }

  open() {
    this._popupSelector.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popupSelector.classList.remove("popup_visible");
  }

  setEventListeners() {
    this._popupSelector.addEventListener("mousedown", (evt) => {
      if (
        evt.target === this._popupSelector ||
        evt.target.classList.contains("popup__close")
      ) {
        this.close();
      }
    });
  }
}

export default Popup;
