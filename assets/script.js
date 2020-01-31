lower = "abcdefghijklmnopqrstuvwxyz";
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
special = "!@#";
charset = "";

// Write password to the #password input
function writePassword() {
  if (isNaN (passwordLength.value)){
    alert('Enter a number between 8 and 128');
  } else if (passwordLength.value > 128 || passwordLength.value < 8) {
    alert('Enter a number between 8 and 128');
  } else {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    charset = "";
  }
}

//Generate password

function generatePassword() {
  var isUpperChecked = $("#upperCheck").is(':checked');
  var isLowerChecked = $("#lowerCheck").is(':checked');
  var isSpecialChecked = $("#specialCheck").is(':checked');
  if(isUpperChecked) {
    charset = charset.concat(upper)
  }
  if(isLowerChecked) {
    charset = charset.concat(lower)
  }
  if(isSpecialChecked) {
    charset = charset.concat(special)
  }
  alert(charset);
  var result = "";
	result = buildResult(result, charset);
	return result;
}

function buildResult(result, charset) {
  for (var i = 0; i < passwordLength.value; i++)
    result += charset[Math.floor(Math.random() * charset.length)];
  return result;
}
