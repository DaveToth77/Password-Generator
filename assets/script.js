// Main program function 

function generatePassword() {

    //length of password ( 8-128 characters)
  
    let passwordLength = window.prompt('Choose the length of your password ( pick a value between 8-128 )');
  
    while (passwordLength < 8 || passwordLength > 128 || passwordLength == null) {
        passwordLength = prompt('Please pick a number between 8 and 128');
    }