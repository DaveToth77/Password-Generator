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
    
    // character assignment with randomization feature

    let password = '';

    let availableCharacters = '';

    let charactersUpper = 'QWERTYUIOPASDFGHJKLZXCVBNM';

    let charactersLower = 'qwertyuiopasdfghjklzxcvbnm';

    let charactersNumber = '1234567890';

    let charactersSpecial = '"!@#$%^&*(){}[]=<>/,.';
    charactersSpecial.charAt(Math.floor(Math.random() * (charactersSpecial.length)));
    if (upper) {
        availableCharacters = availableCharacters + charactersUpper;
        password = password + charactersUpper.charAt(Math.floor(Math.random() * (charactersUpper.length)));
    }
    if (lower) {
        availableCharacters = availableCharacters + charactersLower;
        password = password + charactersLower.charAt(Math.floor(Math.random() * (charactersLower.length)));
    }
    if (number) {
        availableCharacters = availableCharacters + charactersNumber;
        password = password + charactersNumber.charAt(Math.floor(Math.random() * (charactersNumber.length)));
    }
    if (special) {
        availableCharacters = availableCharacters + charactersSpecial;
        password = password + charactersSpecial.charAt(Math.floor(Math.random() * (charactersSpecial.length)));
    }

    for (let i = password.length; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * availableCharacters.length)
        let randomCharacter = availableCharacters.charAt(randomIndex);

        password = password + randomCharacter;
    }

    return password;
}

//Write password to text box

function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Start program on Generate Password button click

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);