

function validateInput(inputId, index, err_message, placeholder = "") {
  let inputBox = document.getElementById(inputId);
  let inputValue = document.getElementById(inputId).value;
  let errorIcon = document.getElementsByClassName("icon_error")[index];
  let inputboxes = document.getElementsByClassName("inputsection");
  let text_warning = document.getElementsByClassName('warnings');
  
  if (inputValue === "") {
     inputboxes[index].style.border = "1px solid hsl(0, 100%, 74%)";
     errorIcon.style.display = "block";
     inputBox.placeholder = placeholder;
     text_warning[index].innerHTML = err_message;
     document.getElementsByClassName("e_mail")[0].classList.add("in_err")
  } else {
     inputboxes[index].style.border = "1px solid hsl(0, 0%, 80%)";
     errorIcon.style.display = "none";
     text_warning[index].innerHTML = "";

  }

  }
  
  function Claim_btn() {
  validateInput("FirstName", 0, "First Name cannot be empty");
  validateInput("LastName", 1, "Last Name cannot be empty");
  validateInput("EmailAddress", 2, "Email cannot be empty", "example@gmail.com");
  validateInput("Pass", 3, "Password cannot be empty", "");
  }