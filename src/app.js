/* eslint-disable */
import "./index.html";
import "./style.css";

let cardnumber = /^[0-9]{10,15}$/;
let cvc = /^[0-9]{3}$/;
let amount = /^[0-9]{1,15}$/;
let firstname = /^[a-zA-Z\s]+$/;
let lastname = /^[a-zA-Z\s]+$/;
let inputCity = /^[a-zA-Z\s]+$/;
let inputState = /^[0-9]{10,15}$/;
let inputZip = /^[0-9]{7}$/;
let message = /^[a-zA-Z\s]+$/;

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

if (!cardnumber.test(form.cardnumber.value)) {
  form.cardnumber.classList.add("is-invalid");
  (form.cardnumber.style.background = "alert-danger"), "opacity-50";
} else {
  form.cardnumber.classList.remove("is-invalid");
}

if (!cvc.test(form.cvc.value)) {
  form.cvc.classList.add("is-invalid");
  (form.cvc.style.background = "alert-danger"), "opacity-50";
} else {
  form.cvc.classList.remove("is-invalid");
}

if (!amount.test(form.amount.value)) {
  form.amount.classList.add("is-invalid");
  (form.amount.style.background = "alert-danger"), "opacity-50";
} else {
  form.amount.classList.remove("is-invalid");
}

if (!firstname.test(form.firstname.value)) {
  form.firstname.classList.add("is-invalid");
  (form.firstname.style.background = "alert-danger"), "opacity-50";
} else {
  form.firstname.classList.remove("is-invalid");
}

if (!lastname.test(form.lastname.value)) {
  form.lastname.classList.add("is-invalid");
  (form.lastname.style.background = "alert-danger"), "opacity-50";
} else {
  form.lastname.classList.remove("is-invalid");
}

if (!inputCity.test(form.inputCity.value)) {
  form.inputCity.classList.add("is-invalid");
  (form.inputCity.style.background = "alert-danger"), "opacity-50";
} else {
  form.inputCity.classList.remove("is-invalid");
}

if (!inputZip.test(form.inputZip.value)) {
  form.inputZip.classList.add("is-invalid");
  (form.inputZip.style.background = "alert-danger"), "opacity-50";
} else {
  form.inputZip.classList.remove("is-invalid");
}

if (!message.test(form.message.value)) {
  form.message.classList.add("is-invalid");
  (form.message.style.background = "alert-danger"), "opacity-50";
} else {
  form.message.classList.remove("is-invalid");
}

let x = document.querySelector("#inputState");
if (x.value == "") {
  form.inputState.classList.add("is-invalid");
  (form.inputState.style.background = "alert-danger"), "opacity-50";
} else {
  form.inputState.classList.remove("is-invalid");
}
