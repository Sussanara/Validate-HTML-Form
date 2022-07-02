/* eslint-disable */
import "./index.html";
import "./style.css";

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (form.cardnumber.value === "") {
    form.cardnumber.classList.add("alert-danger", "opacity-50");
  } else {
    form.cardnumber.classList.remove("alert-danger", "opacity-50");
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (form.cvc.value === "") {
    form.cvc.classList.add("alert-danger", "opacity-50");
  } else {
    form.cvc.classList.remove("alert-danger", "opacity-50");
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (form.amount.value === "") {
    form.amount.classList.add("alert-danger", "opacity-50");
  } else {
    form.amount.classList.remove("alert-danger", "opacity-50");
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (form.firstname.value === "") {
    form.firstname.classList.add("alert-danger", "opacity-50");
  } else {
    form.firstname.classList.remove("alert-danger", "opacity-50");
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (form.lastname.value === "") {
    form.lastname.classList.add("alert-danger", "opacity-50");
  } else {
    form.lastname.classList.remove("alert-danger", "opacity-50");
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (form.inputCity.value === "") {
    form.inputCity.classList.add("alert-danger", "opacity-50");
  } else {
    form.inputCity.classList.remove("alert-danger", "opacity-50");
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (form.inputState.value === "Pick a state") {
    form.inputState.classList.add("alert-danger", "opacity-50");
  } else {
    form.inputState.classList.remove("alert-danger", "opacity-50");
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (form.inputZip.value === "") {
    form.inputZip.classList.add("alert-danger", "opacity-50");
  } else {
    form.inputZip.classList.remove("alert-danger", "opacity-50");
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (form.inlineRadio1.value === "") {
    form.inlineRadio1.classList.add("alert-danger", "opacity-50");
  } else {
    form.inlineRadio1.classList.remove("alert-danger", "opacity-50");
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (form.message.value === "") {
    form.message.classList.add("alert-danger", "opacity-50");
  } else {
    form.message.classList.remove("alert-danger", "opacity-50");
  }
});
