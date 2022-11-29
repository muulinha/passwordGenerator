// Assignment Code

var generateBtn = document.querySelector("#generate");

var specChars = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numbs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Function for Random Index Array
function getRandomArrayElement(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex]
  return randomElement
}

// All logic in one single function
function generatePassword() {
  // Defining password length
  var passwordLength = parseInt(prompt("How many characters are required? (between 8 and 128 characters.)"), 10);
  // Error message if not a number
  if (Number.isNaN(passwordLength)) {
    alert("You must enter a number.");
      return null;
  }

    // Error message if wrong length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("The password length must be between 8 and 128 characters.")
    return null;
  }

  // Window pop up with characters selectors
  var hasSpecChars = confirm("SPECIAL CHARACTERS required? Yes - Confirm / No - Cancel")
  var hasNums = confirm("NUMBERS required? Yes - Confirm / No - Cancel")
  var hasLowerCase = confirm("LOWER CASE CHARACTERS required? Yes - Confirm / No - Cancel")
  var hasUpperCase = confirm("UPPER CASE CHARACTERS required? Yes - Confirm / No - Cancel")
  
  // Defining the characters based on user selection. (Not sure why the "push" command didn't work instead concat)
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

  // Collecting the characters based on the password length and index array
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
