// Main program function 

function generatePassword() {

    //length of password ( 8-128 characters)
  
    let passwordLength = window.prompt('Choose the length of your password ( pick a value between 8-128 )');
  
    while (passwordLength < 8 || passwordLength > 128 || passwordLength == null) {
        passwordLength = prompt('Please pick a number between 8 and 128');
    }
      // password components prompts
  let upper = confirm("Do you want to add uppercase characters? ");
  let lower = confirm("Do you want to add lowercase characters? ");
  let number = confirm("Do you want to add number characters? ");
  let special = confirm("Do you want to add special characters? ");

  if (upper != true && lower != true && number != true && special != true) {
      alert("You must select at least one character type!")
  }

