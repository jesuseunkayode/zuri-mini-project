let userName = prompt("Enter your username: ");
function validateUserName(userName) {
  if (userName.length < 10 && userName.length > 0) {
    return true;
  } else {
    return false;
  }
}

let email = prompt("Enter your email address");
function validateEmail(email) {
  const emailCheck =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let emailCheckResult = emailCheck.test(email);
  if (emailCheckResult == true) {
    return true;
  } else {
    return false;
  }
}

let phoneNumber = prompt("Enter your phone number");
const validatePhoneNumber = (phoneNumber) => {
  if (phoneNumber.length == 11) {
    return true;
  } else {
    return false;
  }
};

let password = prompt("Enter your password");
const validatePassoword = (password) => {
  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
};

let confirmPassword = prompt("Enter your confirm passoword");
const validateConfirmPassword = (confirmPassword) => {
  if (confirmPassword == password) {
    return true;
  } else {
    return false;
  }
};
