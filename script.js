// Assignment Code
var generateBtn = document.querySelector("#generate");

// password options
 var passwordOptions = {
  upperCase :"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase : "abcdefghijklmnopqrstuvwxyz",
  numbers : "0123456789",
  specialCharacters : "!@$#%&*?"
}


function generatePassword(){

  var passOpt = "";

  var passConfirm = "";

// prompt length
var length = window.prompt("How long do you want your password be?");

//if user types a length invalid
  if (length < 8 || length > 128){
    alert("Invalid - Password length must be between 8-128 characters long");
    return;
  }

// prompt uppercase
var yesUpper = window.confirm ("Click OK to include UPPERCASE characters");
  
// if user confirms uppercase
if(yesUpper){
  passOpt += passwordOptions.upperCase;
  console.log(yesUpper);
}


// prompt lowercase
var yesLower = window.confirm ("Click OK to include lowercase characters");

//if user confirms lowercase
if(yesLower){
  passOpt += passwordOptions.lowerCase;
  console.log(yesLower);

}

  
// promt numers
var yesNums = window.confirm ("Click OK to include numbers.");

//if user confirms numbers
if(yesNums){
  passOpt += passwordOptions.numbers;
  console.log(yesNums);
}


// prompt special characters
var yesSymbols = window.confirm ("Click OK to include special characters.");

//if user confirms special characters
if(yesSymbols){
  passOpt += passwordOptions.specialCharacters;
  console.log(yesSymbols);
}


//verify at least 1 criteria is met
if(yesUpper === false && yesLower === false && yesNums === false && yesSymbols === false){
  window.alert("You must choose at least 1 type of character to include.");
  return(generatePassword);
};

function passConfirm (fromString){
  return fromString[Math.floor(Math.random() * fromString.length)];
}
};

//display password


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//event listener to create button
generateBtn.addEventListener("click", writePassword)
