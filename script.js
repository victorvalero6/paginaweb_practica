var email = document.getElementById("input");
var password = document.getElementById("password");
var button = document.getElementById("button");

function getOrCreateErrorEl(inputEl) {
  var id = inputEl.id + "-error";
  var el = document.getElementById(id);

  if (!el) {
    el = document.createElement("p");
    el.id = id;
    el.className = "field-error";

    var nextEl = inputEl.nextElementSibling; /
    if (nextEl) {
      inputEl.parentNode.insertBefore(el, nextEl);
    } else {
      inputEl.parentNode.appendChild(el);
    }
  }

  return el;
}

function setError(inputEl, message) {
  var el = getOrCreateErrorEl(inputEl);
  el.innerText = message;
  inputEl.classList.add("has-error");
}

function clearError(inputEl) {
  var el = getOrCreateErrorEl(inputEl);
  el.innerText = "";
  inputEl.classList.remove("has-error");
}

function isEmpty(value) {
  return value.replace(/^\s+|\s+$/g, "") === "";
}

button.addEventListener("click", function () {
  var okEmail = !isEmpty(email.value);
  var okPass = !isEmpty(password.value);

  if (!okEmail) setError(email, "Por favor llena tu email.");
  else clearError(email);

  if (!okPass) setError(password, "Por favor llena tu contraseña.");
  else clearError(password);

  if (okEmail && okPass) {
    window.location.href = "galeria.html";
  }
});

email.addEventListener("input", function () {
  clearError(email);
});

password.addEventListener("input", function () {
  clearError(password);
});
