var numbers;
var upperCase;
var lowerCase;
var specialCharacters;
var options;
var generateBtn = document.querySelector("#generate");

num= ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
upper= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
lower= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
character= [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '"', "'"]


window.addEventListener("Click", function () {
  generateNewPassword();
});

function generatePassword() {
 var passwordLength = parseInt(
    window.prompt(
      "How long would you like the password? Please pick a number between 8 - 128."
    )
  );
}
if (passwordLength < 8 || passwordLength > 128) {
  alert(
    "The number you selected is outside the paramaters of 8-128, please adjust."
  );
  return generatePassword();

} else {
  numbers = confirm("Include numbers?");
  upperCase = confirm("Include uppercase letters?");
  lowerCase = confirm("Include lowercase letters?");
  specialCharacters = confirm("Include special characters?");
}

if (!numbers && !lowerCase && !upperCase && !specialCharacters) {
  options = alert("At least one option needs to be selected!");

   return generatePassword();
}

function writePassword() {
  var password = generatePassword();
  var passwordArray = [];

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

  for (let i = 0; i < password.passwordLength; ++i) {
    var randomizer = Math.floor(Math.random() * Math.floor(passwordArray.length));
     finishedPassword.push(passwordArray[randomizer])
}
  return finishedPassword.join('');
}

var passwordText = document.querySelector("#password");
var password = writePassword();


passwordText.value= password;



generateBtn.addEventListener("click", generatePassword);

