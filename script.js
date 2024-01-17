// assigning variables for sign in form

const emailInput = document.getElementById("email-input");
const passInput = document.getElementById("password-input");
const signInForm = document.getElementById("sign-in-form");
const emailError = document.getElementById("email-error");
const passError = document.getElementById("pass-error");

// creating seperate logical functions for each input

const checkEmail = ()=>{
 const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if (!regEmail.test(emailInput.value) || emailInput.value === ""){
  emailError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please enter a valid email`;
  emailError.style.display = "block";
  emailInput.style.border = "2px solid red";
  return false;
 }
 emailError.style.display = "none";
 emailInput.style.border = "2px solid green";
  return true;
}

const checkPass = ()=>{
 const regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
 if (!regPass.test(passInput.value) || passInput.value === "") {
  passError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Your Password is incorrect`;
  passError.style.display = "block";
  passInput.style.border = "2px solid red";
  return false;
 }
  passError.style.display = "none";
  passInput.style.border = "2px solid green";
  return true;
}

// submit function validation

signInForm.addEventListener("submit", (e)=>{
 checkEmail();
 checkPass();
 if (!checkEmail() || !checkPass()){
   e.defaultPrevented()
}
})

// validation on keyup

emailInput.addEventListener("keyup", checkEmail);
passInput.addEventListener("keyup", checkPass);
