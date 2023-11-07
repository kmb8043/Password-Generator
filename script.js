// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["0123456789"];
var specialCharacters = ["!@$#%&*?"];
var randomPassword = "";



function generatePassword(){
// prompt length
var length = window.prompt("How long do you want your password be?");

  if (length < 8 || length > 128 || isNaN(length)){
    alert("Invalid - Password length must be between 8-128 characters long");
    return;
  }

// prompt uppercase
var BIG = window.confirm ("Click OK to include UPPERCASE");
  function upperCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26 ) +65);
  }
console.log(upperCase());


// prompt lowercase
var small = window.confirm ("Click OK to include lowercase");
  function lowerCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97);
}
console.log(lowerCase());

  
// promt numers
var num = window.confirm ("Click OK to include numbers.");
function numbers(){
  return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48);
}

console.log(numbers());


// prompt special characters
var symbols = window.confirm ("Click OK to include special characters.");
  function specialCharacters(){
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  
  console.log(specialCharacters());


//verify at least 1 criteria is met
if(BIG === false && small === false && num === false && symbols === false){
  window.alert("You must choose at least 1 type of character to include.");
}

}

//display password


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//event listener to create button
generateBtn.addEventListener("click", writePassword)
