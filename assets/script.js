// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page




// Assignment Code

var passwordLength;
var numbers;
var upperCase;
var lowerCase;
var specialCharacters;
var options;
var generateBtn = document.querySelector("#generate");

// num= ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].split("");
// upper= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].split("");
// lower= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].split("");
// character= [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '"', "'"].split("");

num="0123456789".split("");
upper="ABCDEFGHIJKLMNOPQRSTYVWXYZ".split("");
lower="abcdefghijklmnopqrstuvwxyz".split("");
character="!?#@$%&*".split("");




window.addEventListener("Click", function() {
    generateNewPassword();
  });



function generatePassword() {
  passwordLength = parseInt(prompt("How long would you like the password? Please pick a number between 8 - 128."));
  console.log(generatePassword);

} if (passwordLength < 8 || passwordLength > 128) {
    alert("The number you selected is outside the paramaters of 8-128, please adjust.");
  return generatePassword();

  
} else {
   numbers= confirm("Include numbers?");
   upperCase= confirm("Include uppercase letters?");
   lowerCase= confirm("Include lowercase letters?");
   specialCharacters= confirm("Include special characters?");
};

if(!numbers && !lowerCase && !upperCase && !specialCharacters) {
 options= alert("At least one option needs to be selected!");
 return generatePassword();
}


   function writePassword(){
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
        var passwordArray= [];
        // passwordText.value = password;

    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


generatePassword();



