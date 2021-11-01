// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword)

///////////////////////////////////////comented out default code as I would like to build from scratch and feel it is making it more complicated



//Fisher-yates randomize function
String.prototype.shuffle = function () {
  var a = this.split(""),
      n = a.length;

  for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
  }
  return a.join("");
}

////////// my code ///////////////////


var numberArray = ["1","2","3","4","5","6","7","8","9","10"]
var smallLetters  = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var symbols = ["!","£","$","%","^","&","*"] 
///// values for lists
var numberArrayValue = true
var smallLettersValue = true
var bigLettersValue = true
var symbolsValue = true

// empty array
var passwordArray = []



var v = 1
//switched off prompt to stop alert while editing css and  html    prompt("enter how many items you would like in this loop")
var userLimit = 25

var generatePassword = function() {

  for (let v = 0; v < userLimit ; v++) {
      if (numberArrayValue == true) {
          var c = numberArray[Math.floor(Math.random()*numberArray.length)]
          passwordArray.push(c);
          console.log(passwordArray)
              
          }

      if (smallLettersValue == true) {
          var x = smallLetters[Math.floor(Math.random()*smallLetters.length)]
          passwordArray.push(x);
          console.log(passwordArray)
              
          }
      if (bigLettersValue == true) {
          var z = bigLetters[Math.floor(Math.random()*bigLetters.length)]
          passwordArray.push(z);
          console.log(passwordArray)
              
          }
      if (symbolsValue == true) {
      var y = symbols[Math.floor(Math.random()*symbols.length)]
          passwordArray.push(y);
          console.log(passwordArray)
          
      }
      var joinedPassword = passwordArray.join("")
      console.log(joinedPassword)

      var slicedPassword = joinedPassword.slice(0,userLimit)
      console.log(slicedPassword)

      var shuffledPassword = slicedPassword.shuffle()
      console.log(shuffledPassword)
      }
}

console.log(passwordArray)

var joinedPassword = passwordArray.join("")
console.log(joinedPassword)

var slicedPassword = joinedPassword.slice(0,userLimit)
console.log(slicedPassword)

var shuffledPassword = slicedPassword.shuffle()
console.log(shuffledPassword)


//cut off 
//randomize
// done


//working as of sunday night need to figure out how to connect back and front end 





    












