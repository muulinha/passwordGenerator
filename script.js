// Assignment Code

var generateBtn = document.querySelector("#generate");

var specChars = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numbs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function getRandomArrayElement(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex]
  return randomElement
}

// function to collection user inputs
function generatePassword() {
  var passwordLength = parseInt(prompt("How many characters are required? (between 8 and 128 characters.)"), 10);
  if (Number.isNaN(passwordLength)) {
    alert("must enter a number")
    return null;
  }
  if (passwordLength < 8 && passwordLength > 128) {
    alert("The password length must be between 8 and 128 characters.")
    return null;
  }

  var hasSpecChars = confirm("Select ok to add spec chars to your password")
  var hasNums = confirm("Select ok to add numbers s to your password")
  var hasLowerCase = confirm("Select ok to add lower case to your password")
  var hasUpperCase = confirm("Select ok to add upper chars to your password")
  
  var potentialPasswordValues = []
  
  if (hasSpecChars) {
    potentialPasswordValues = potentialPasswordValues.concat(specChars);
  }
  if (hasNums) {
    potentialPasswordValues = potentialPasswordValues.concat(numbs);
  }
  if (hasLowerCase) {
    potentialPasswordValues = potentialPasswordValues.concat(lowercase);
  }
  if (hasUpperCase) {
    potentialPasswordValues = potentialPasswordValues.concat(uppercase);
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password = password + getRandomArrayElement(potentialPasswordValues);
  }
  return password;
  }
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
