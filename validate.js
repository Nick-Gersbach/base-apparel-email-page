const smalltext = document.getElementById("small-text");
const emailForm = document.getElementById("form");
const emailSubmit = document.getElementById("email-btn");
const emailInput = document.getElementById("email-input");
const errorImg = document.getElementById("error-img");

emailSubmit.addEventListener("click", submitEmail);

function submitEmail(e) {
  if (emailInput.value === "") {
    smalltext.style.visibility = "visible";
    errorImg.style.visibility = "visible";
  } else if (isValidEmail(!emailInput.value)) {
    smalltext.style.visibility = "visible";
    errorImg.style.visibility = "visible";
  }
  e.preventDefault();
  console.log("form submitted");
}

function isValidEmail() {
  const filter =
    /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(e).search(filter) != -1;
}
