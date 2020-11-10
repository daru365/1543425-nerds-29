const modalLink = document.querySelector(".button-contacts");
const modalPopup = document.querySelector(".modal-contacts");
const modalClose = modalPopup.querySelector(".modal-close");
const modalName = modalPopup.querySelector(".name-user");
const modalLogin = modalPopup.querySelector(".login-user");
const modalButton = modalPopup.querySelector(".modal-button");

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
});

modalPopup.addEventListener("submit", function (evt) {
	
	if (!modalName.value || !modalLogin.value) {
		evt.preventDefault();
		 if (!modalName.value) {
		 	modalName.classList.add("modal-input-error")
		 } else {
		 	modalName.classList.remove("modal-input-error")
		 }

		  if (!modalLogin.value) {
		 	modalLogin.classList.add("modal-input-error")
		 } else {
		 	modalLogin.classList.remove("modal-input-error")
		 }

		modalPopup.classList.remove("modal-error");
		modalPopup.offsetWidth = modalPopup.offsetWidth;
		modalPopup.classList.remove("modal-on");
		modalPopup.classList.add("modal-error");
	}
});