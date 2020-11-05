const modalLink = document.querySelector(".button-contacts");
const modalPopup = document.querySelector(".modal-contacts");
const modalClose = modalPopup.querySelector(".modal-close");

modalLink.addEventListener("click", function (evt) {
  evt.preventDefault();
   modalPopup.classList.add("modal-on");
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-on");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-on")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-on");
    }
  }