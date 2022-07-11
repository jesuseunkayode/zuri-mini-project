let userDetailsDatabase = {};

const getUserDetails = () => {
  let userName = prompt("Enter your username: ");
  if (userName == null) {
    return;
  }
  const validateUserName = (userName) => {
    if (userName.length < 10 && userName.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  while (validateUserName(userName) == false) {
    userName = prompt("Username must be atleast 10 character long");
  }

  userDetailsDatabase["UserName"] = userName;

  //email validation code
  let email = prompt("Enter your email address");
  if (email == null) {
    return;
  }
  const validateEmail = (email) => {
    const emailCheck =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let emailCheckResult = emailCheck.test(email);
    if (emailCheckResult == true) {
      return true;
    } else {
      return false;
    }
  };
  while (validateEmail(email) == false) {
    email = prompt("An email address must be entered in the box");
  }

  userDetailsDatabase["Email"] = email;
  //phone number validation code
  let phoneNumber = prompt("Enter your phone number");
  if (phoneNumber == null) {
    return;
  }
  const validatePhoneNumber = (phoneNumber) => {
    if (phoneNumber.length == 11) {
      return true;
    } else {
      return false;
    }
  };
  while (validatePhoneNumber(phoneNumber) == false) {
    phoneNumber = prompt("Your phone number must be atleast 11 character long");
  }

  userDetailsDatabase["PhoneNumber"] = phoneNumber;

  // password validation code
  let password = prompt("Enter your password");
  if (password == null) {
    return;
  }
  const validatePassword = (password) => {
    if (password.length < 6) {
      return false;
    } else {
      return true;
    }
  };
  while (validatePassword(password) == false) {
    password = prompt("Password must be atleast 6 character long");
  }
  userDetailsDatabase["Password"] = password;
  //confirm password validation code
  let confirmPassword = prompt("Enter your confirm passoword");
  if (confirmPassword == null) {
    return;
  }
  const validateConfirmPassword = (confirmPassword) => {
    if (confirmPassword == password) {
      return true;
    } else {
      return false;
    }
  };
  while (validateConfirmPassword(confirmPassword) == false) {
    confirmPassword = prompt(
      "Confirm password must be the same with your password"
    );
  }
  userDetailsDatabase["ConfirmPassword"] = confirmPassword;

  console.log(userDetailsDatabase);
};

const displayUserDetails = () => {
  alert(`Your details\n\nUserName: ${userDetailsDatabase.UserName}\n
   Phone Number: ${userDetailsDatabase.PhoneNumber}\n
   Email: ${userDetailsDatabase.Email}\n
   Password: ${userDetailsDatabase.Password}`);
};
