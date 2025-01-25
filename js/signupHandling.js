import { validateEmail } from "./emailValidation.js";

const dialog = document.querySelector("dialog");
const emailAddress = document.querySelector(".email-address");
const inputField = document.querySelector("input");
const signupForm = document.querySelector(".signup-form-email");
const emailErrorMessageElement = document.querySelector(
    ".signup-form-email__messages"
);

function handleSignupFormSubmit(e) {
    e.preventDefault();

    const formDataEntries = new FormData(signupForm).entries();
    const { email } = Object.fromEntries(formDataEntries);

    const emailErrorMessage = validateEmail(email);
    console.log(emailErrorMessage);

    if (emailErrorMessage) {
        emailErrorMessageElement.innerText = emailErrorMessage;
        inputField.classList.add("errorMessage");
    } else {
        dialog.showModal();
        emailAddress.innerText = email;
    }
}

signupForm.addEventListener("submit", handleSignupFormSubmit);
