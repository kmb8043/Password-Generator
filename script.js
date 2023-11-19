// Assignment Code
var generateBtn = document.querySelector("#generate");

// password options
var passwordOptions = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  specialCharacters: "!@$#%&*?"
}


function generatePassword() {

  var passOpt = ""; // varible to hold selected characters
  var passwordHolder = "";  // var to collect the random characters from passOpt


  // prompt length
  var length = window.prompt("How long do you want your password be?");

  //if user types a length invalid
  if (length < 8 || length > 128) {
    alert("Invalid - Password length must be between 8-128 characters long");
    return;
  }
  console.log(length);

  // prompt uppercase
  var yesUpper = window.confirm("Click OK to include UPPERCASE characters");

  // if user confirms uppercase
  if (yesUpper) {
    passOpt += passwordOptions.upperCase;  //adding uppers to the passOpt
    console.log(yesUpper);
  }


  // prompt lowercase
  var yesLower = window.confirm("Click OK to include lowercase characters");

  //if user confirms lowercase
  if (yesLower) {
    passOpt += passwordOptions.lowerCase;  // adding lower to the passOpt
    console.log(yesLower);

  }


  // promt numers
  var yesNums = window.confirm("Click OK to include numbers.");

  //if user confirms numbers
  if (yesNums) {
    passOpt += passwordOptions.numbers;  //adding numbers to the passOpt
    console.log(yesNums);
  }


  // prompt special characters
  var yesSymbols = window.confirm("Click OK to include special characters.");

  //if user confirms special characters
  if (yesSymbols) {
    passOpt += passwordOptions.specialCharacters;  //adding special to passOpt
    console.log(yesSymbols);
  }

  //verify at least 1 criteria is met
  if (yesUpper === false && yesLower === false && yesNums === false && yesSymbols === false) {
    window.alert("You must choose at least one type of character to include.");
    return generatePassword();
  }

function generateCharacter() //generates a random # to lenght of passOpt, returns that char in passOpt
  {
    charNum = Math.floor(Math.random() * passOpt.length);
    return passOpt.charAt(charNum);
  }
  

  for (let i = 0; i < length; i++) {
  passwordHolder += generateCharacter();
  }
  return passwordHolder;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//event listener to create button
generateBtn.addEventListener("click", writePassword)
