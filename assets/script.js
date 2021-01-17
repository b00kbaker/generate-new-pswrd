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

num = "0123456789".split("");
upper = "ABCDEFGHIJKLMNOPQRSTYVWXYZ".split("");
lower = "abcdefghijklmnopqrstuvwxyz".split("");
character = "!?#@$%&*".split("");

window.addEventListener("Click", function () {
  generateNewPassword();
});

function generatePassword() {
  passwordLength = parseInt(
    prompt(
      "How long would you like the password? Please pick a number between 8 - 128."
    )
  );
}
if (passwordLength < 8 || passwordLength > 128) {
  alert(
    "The number you selected is outside the paramaters of 8-128, please adjust."
  );
  // return generatePassword();
} else {
  numbers = confirm("Include numbers?");
  upperCase = confirm("Include uppercase letters?");
  lowerCase = confirm("Include lowercase letters?");
  specialCharacters = confirm("Include special characters?");
}

if (!numbers && !lowerCase && !upperCase && !specialCharacters) {
  options = alert("At least one option needs to be selected!");
  //  return generatePassword();
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordArray = [];
  // passwordText.value = password;

  if (password.numbers) {
    for (i = 0; i < num.passwordLength; ++i) {
      passwordArray.push(num[i]);
    }
  }
  if (password.upperCase) {
    for (i = 0; i < upper.passwordLength; ++i) {
      passwordArray.push(upper[i]);
    }
  }
  if (password.lowerCase) {
    for (i = 0; i < lower.passwordLength; ++i) {
      passwordArray.push(lower[i]);
    }
  }
  if (password.character) {
    for (i = 0; i < character.passwordLength; ++i) {
      passwordArray.push(character[i]);
    }
  }
  var finishedPassword= [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword();
