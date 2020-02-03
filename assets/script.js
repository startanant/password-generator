//Character sets
lower = "abcdefghijklmnopqrstuvwxyz";
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
special = "!@#";

// Write password to the #password input
function writePassword() {
  if (isNaN (passwordLength.value)){
    alert('Enter a number between 8 and 128');
  } else if (passwordLength.value > 128 || passwordLength.value < 8) {
    alert('Enter a number between 8 and 128');
  } else {
    var password = generatePassword();
    //alert(password);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

//Generate password

function generatePassword() {
  result = "";
  var isUpperChecked = $("#upperCheck").is(':checked');
  var isLowerChecked = $("#lowerCheck").is(':checked');
  var isSpecialChecked = $("#specialCheck").is(':checked');
  var checked_boxes =  $(':checkbox:checked').length;
  
  //Make sure there is atleast one of each type
  for (var i = 0; i < checked_boxes.value; i++) {
    if(isUpperChecked) {
      result += upper[Math.floor(Math.random() * upper.length)];
    }
    if(isLowerChecked) {
      result += lower[Math.floor(Math.random() * lower.length)];
    }
    if(isSpecialChecked) {
      result += special[Math.floor(Math.random() * special.length)];
    }
  }

  //Fill the remaining slots
  while(result.length <= passwordLength.value) {
    if(isUpperChecked) {
      result += upper[Math.floor(Math.random() * upper.length)];
    }
    if(isLowerChecked) {
      result += lower[Math.floor(Math.random() * lower.length)];
    }
    if(isSpecialChecked) {
      result += special[Math.floor(Math.random() * special.length)];
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
