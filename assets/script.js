//Character sets
lower = "abcdefghijklmnopqrstuvwxyz";
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
numbers = "1234567890";
special = "#$%&()*+-";


// Write password to the #password input
function writePassword() {
  var passwordLength = $("#passwordLength").val();
  if (isNaN (passwordLength)){
    alert('Enter a number between 8 and 128');
  } else if (passwordLength > 128 || passwordLength < 8) {
    alert('Enter a number between 8 and 128');
  } else {
    var password = generatePassword(passwordLength);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

//Generate password
function generatePassword(passwordLength) {
  result = "";
  var isUpperChecked = $("#upperCheck").is(':checked');
  var isLowerChecked = $("#lowerCheck").is(':checked');
  var isSpecialChecked = $("#specialCheck").is(':checked');
  var isNumbersChecked = $("#numbersCheck").is(':checked');
  
  var charset_array = [];
  var checked_boxes =  $(':checkbox:checked').length;
  
  //Make sure there is atleast one of each type
  if(isUpperChecked) {
    result += upper[Math.floor(Math.random() * upper.length)];
    charset_array.push('upper');
  }
  if(isLowerChecked) {
    result += lower[Math.floor(Math.random() * lower.length)];
    charset_array.push('lower');
  }
  if(isSpecialChecked) {
    result += special[Math.floor(Math.random() * special.length)];
    charset_array.push('special');
  }
  if(isNumbersChecked) {
    result += numbers[Math.floor(Math.random() * numbers.length)];
    charset_array.push('numbers');
  }
  
  remaining_characters = passwordLength - result.length;
  
  
  //Fill the remaining slots
  for(i = 0; i < remaining_characters; i++){
    random_charset = Math.floor(Math.random() * checked_boxes);
    switch(charset_array[random_charset]) {
      case 'upper':
        result += upper[Math.floor(Math.random() * upper.length)];
        break;
      case 'lower':
        result += lower[Math.floor(Math.random() * lower.length)];
        break;
      case 'special':
        result += special[Math.floor(Math.random() * special.length)];
        break;
      case 'numbers':
        result += numbers[Math.floor(Math.random() * numbers.length)];
        break;
      default:
        break;
    }
  }

  

  //Shuffle
  result_array = result.split("");
  shuffled_result = shuffle(result_array);
  return shuffled_result.join("");
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
