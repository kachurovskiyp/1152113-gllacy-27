var feedbackButton = document.querySelector(".feedback-button");
var feedbackPopup = document.querySelector(".feedback-wrapper");
var modalClose = feedbackPopup.querySelector(".modal-close");
var inputName = document.querySelector("[name=user-name]");
var inputEmail = document.querySelector("[name=feedback-email]");
var inputText = document.querySelector("[name=user-message]");
var formWriteUs =  feedbackPopup.querySelector("form");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function(evt){
  evt.preventDefault();
  feedbackPopup.classList.add("opened");

  if (inputName.classList.contains("invalid")){
    inputName.classList.remove("invalid");
  }

  if (inputEmail.classList.contains("invalid")){
    inputEmail.classList.remove("invalid");
  }

  if (inputText.classList.contains("invalid")){
    inputText.classList.remove("invalid");
  }

  if (storageName && storageEmail) {
    inputName.value = storageName;
    inputEmail.value = storageEmail;
    inputText.focus();
  } else {
    inputName.focus();
  }
});

modalClose.addEventListener("click", function(evt){
  evt.preventDefault();
  feedbackPopup.classList.remove("opened");
  formWriteUs.classList.remove("modal-error");
});

formWriteUs.addEventListener("submit", function(evt){
  if (!inputName.value || !inputEmail.value || !inputText.value) {

    evt.preventDefault();

    formWriteUs.classList.remove("modal-error");
    formWriteUs.offsetWidth = formWriteUs.offsetWidth;
    formWriteUs.classList.add("modal-error");

    if(!inputName.value){
      inputName.classList.add("invalid");
    }

    if(!inputEmail.value){
      inputEmail.classList.add("invalid");
    }

    if(!inputText.value){
      inputText.classList.add("invalid");
    }

  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", inputName.value);
      localStorage.setItem("userEmail", inputEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackPopup.classList.contains("opened")) {
      feedbackPopup.classList.remove("opened");
      formWriteUs.classList.remove("modal-error");
    }
  }
});
