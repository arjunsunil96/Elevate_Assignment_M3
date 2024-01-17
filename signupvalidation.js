// getting elements from form
const signUpForm = document.querySelector("#sign-up-form");
const fullNameEl = document.querySelector("#full-name");
const nameError = document.querySelector("#name-error");
const emailEl = document.querySelector("#email-signup");
const emailError = document.querySelector("#email-error");
const passwordEl = document.querySelector("#password-signup");
const passwordError = document.querySelector("#pass-error");
const confirmPassEl = document.querySelector("#confirm-pass");
const confirmPassError = document.querySelector("#confirm-pass-error");
const termsEl = document.querySelector("#terms-check");
const termsError = document.querySelector("#terms-error");
const nameSuccess = document.querySelector("#full-name-success");
const emailSuccess = document.querySelector("#email-success");
const passSuccess = document.querySelector("#pass-success");
const confirmPassSuccess = document.querySelector("#confirm-success");
const passIndicator = document.querySelector("#pass-div");

// creating logical functions to check

const checkFullName = () => {
  let fullName = fullNameEl.value.trim();
  const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  nameSuccess.style.display = "none";
  if (fullName === "") {
    nameError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Name must not be empty`;
    nameError.style.display = "block";
    fullNameEl.style.border = "2px solid red";
    return false;
  } else if (fullName < 3) {
    nameError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Name should have atleast 3 characters`;
    nameError.style.display = "block";
    fullNameEl.style.border = "2px solid red";
    return false;
  } else if (!regName.test(fullNameEl.value)) {
    nameError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please enter your full name (first & last name)`;
    nameError.style.display = "block";
    fullNameEl.style.border = "2px solid red";
    return false;
  } else {
    nameError.style.display = "none";
    nameSuccess.style.display = "inline-block";
    fullNameEl.style.border = "2px solid green";
    return true;
  }
};
const checkEmail = () => {
  const email = emailEl.value;
  emailSuccess.style.display = "none";
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regEmail.test(email) || email === "") {
    emailError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please enter a valid email`;
    emailError.style.display = "block";
    emailEl.style.border = "2px solid red";
    return false;
  } else {
    emailError.style.display = "none";
    emailSuccess.style.display = "inline-block";
    emailEl.style.border = "2px solid green";
    return true;
  }
};
const checkPassword = () => {
  passSuccess.style.display = "none";
  passwordError.style.display = "none";
  passIndicator.style.display = "none";
  const regPass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{12,}$/;
  let strength = 0;
  checkStrength(strength);

  if (passwordEl.value === "") {
    passwordError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Password cannot be blank [Create a password with minimum 12 characters]`;
    passwordError.style.display = "inline-block";
    passwordEl.style.border = "2px solid red";
    passIndicator.style.display = "none";
    passIndicator.className = "";
    return false;
  } else {
    strength += 0;
    checkStrength(strength);
    console.log(strength);
  }

  if (!/[a-z]/.test(passwordEl.value) || !/[A-Z]/.test(passwordEl.value)) {
    passwordError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please use both lowercase and uppercase letters`;
    passwordError.style.display = "block";
    passwordEl.style.border = "2px solid red";
    return false;
  } else {
    strength += 1;
    checkStrength(strength);
    console.log(strength);
  }

  if (!passwordEl.value.match(/\d/)) {
    passwordError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please use atleast one digit`;
    passwordError.style.display = "block";
    passwordEl.style.border = "2px solid red";
    return false;
  } else {
    strength += 1;
    checkStrength(strength);
    console.log(strength);
  }

  if (passwordEl.value.length < 6) {
    passwordError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please make the password longer (minimum 12 characters)`;
    passwordError.style.display = "block";
    passwordEl.style.border = "2px solid red";
    //  strengthIndicator();
    return false;
  }
  if (!passwordEl.value.match(/[^a-zA-Z\d]/)) {
    passwordError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please use atleast one special character`;
    passwordError.style.display = "block";
    passwordEl.style.border = "2px solid red";
    return false;
  } else {
    strength += 1;
    checkStrength(strength);
    passwordError.style.display = "none";
  }
  if (!passwordEl.value.match(regPass)) {
    passwordError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Password does not meet requirements`;
    passwordError.style.display = "block";
    passwordEl.style.border = "2px solid red";
    return false;
  } else {
    strength += 1;
    passwordError.style.display = "none";
    checkStrength(strength);
    console.log(strength);
  }
};

const checkConfirmPassword = () => {
  const password = passwordEl.value;
  const confirmPassword = confirmPassEl.value;
  confirmPassSuccess.style.display = "none";

  if (confirmPassword !== password || confirmPassEl.value === "") {
    confirmPassError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Password does not match`;
    confirmPassError.style.display = "block";
    confirmPassEl.style.border = "2px solid red";
    return false;
  } else {
    confirmPassError.style.display = "none";
    confirmPassEl.style.border = "2px solid green";
    confirmPassSuccess.style.display = "inline-block";
    return true;
  }
};
const checkTerms = () => {
  if (!termsEl.checked) {
    termsError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please read our terms and check the box before submitting`;
    termsError.style.display = "block";
    return false;
  } else {
    termsError.style.display = "none";
    return true;
  }
};

// form submit validation

signUpForm.addEventListener("submit", (e) => {
  checkFullName();
  checkEmail();
  checkPassword();
  checkConfirmPassword();
  checkTerms();
  if (
    !checkFullName() ||
    !checkEmail() ||
    !checkPassword() ||
    !checkConfirmPassword() ||
    !checkTerms()
  ) {
    e.preventDefault();
  }
});

// validation on key up

fullNameEl.addEventListener("keyup", checkFullName);
emailEl.addEventListener("keyup", checkEmail);
passwordEl.addEventListener("keyup", checkPassword);
// passwordEl.addEventListener("input", strengthIndicator);
confirmPassEl.addEventListener("keyup", checkConfirmPassword);

// space disabling from password input

passwordEl.addEventListener("keydown", (e) => {
  if (e.keyCode === 32) {
    e.preventDefault();
  }
});
confirmPassEl.addEventListener("keydown", (e) => {
  if (e.keyCode === 32) {
    e.preventDefault();
  }
});

// password strength function

const checkStrength = (strength) => {
  passIndicator.style.display = "none";
  if (passwordEl.value === "") {
    passIndicator.style.display = "block";
    passIndicator.classList.add("very-weak");
    return false;
  } else if (strength < 2) {
    passIndicator.style.display = "block";
    passIndicator.classList.add("very-weak");
    passIndicator.classList.remove("weak");
    passIndicator.classList.remove("average");
    passIndicator.classList.remove("good");
    passIndicator.classList.remove("excellent");
    console.log(strength);
    return false;
  } else if (strength === 2 || passwordEl.value.length < 5) {
    passIndicator.style.display = "block";
    passIndicator.classList.add("weak");
    passIndicator.classList.remove("very-weak");
    passIndicator.classList.remove("average");
    passIndicator.classList.remove("good");
    passIndicator.classList.remove("excellent");
    console.log(strength);
    return false;
  } else if (strength === 3 && passwordEl.value.length < 8) {
    passIndicator.style.display = "block";
    passIndicator.classList.add("average");
    passIndicator.classList.remove("very-weak");
    passIndicator.classList.remove("weak");
    passIndicator.classList.remove("good");
    passIndicator.classList.remove("excellent");
    console.log(strength);
    return false;
  } else if (strength === 3 || passwordEl.value.length < 9) {
    passIndicator.style.display = "block";
    passIndicator.classList.add("good");
    passIndicator.classList.remove("very-weak");
    passIndicator.classList.remove("weak");
    passIndicator.classList.remove("average");
    passIndicator.classList.remove("excellent");
    // passSuccess.style.display = "inline-block";
    passwordEl.style.border = "2px solid red";
    passwordError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please make the password longer (8-21 characters)`;
    passwordError.style.display = "block";
    passwordEl.style.border = "2px solid red";
  } else {
    passIndicator.style.display = "block";
    passIndicator.classList.add("excellent");
    passIndicator.classList.remove("very-weak");
    passIndicator.classList.remove("weak");
    passIndicator.classList.remove("average");
    passIndicator.classList.remove("good");
    passwordError.style.display = "none";
    passwordEl.style.border = "2px solid green";
    passSuccess.style.display = "inline-block";
    console.log(strength);
    return true;
  }
};
