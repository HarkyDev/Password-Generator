// Assignment Code
var generateBtn = document.querySelector("#generate");
var smallLetters  = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

////////// my code ///////////////////
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

var myArray = ["1","2","3","4","5","6","7","8","9","10"]
var smallLetters  = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var symbols = ["!","£","$","%","^","&","*"] 
///// values for charcters 
var b = true
var password = []
// myArray[Math.floor(Math.random()*myArray.length)]

var v = 1
var userLimit = prompt("enter how many items you would like in this loop")

for (let v = 0; v < userLimit ; v++) {
  if (b == true) {
    var c = myArray[Math.floor(Math.random()*myArray.length)]
        password.push(c);
        
    }

  if (b == true) {
    var x = smallLetters[Math.floor(Math.random()*smallLetters.length)]
        password.push(x);
        
    }
  if (b == true) {
    var z = bigLetters[Math.floor(Math.random()*bigLetters.length)]
        password.push(z);
        
    }
    if (b == true) {
      var y = symbols[Math.floor(Math.random()*symbols.length)]
          password.push(y);
          
      }

}

console.log(password)

var joinedPassword = password.join("")
console.log(joinedPassword)
var slicedPassword = joinedPassword.slice(0,userLimit)
console.log(slicedPassword)
var shuffledPassword = slicedPassword.shuffle()
console.log(shuffledPassword)


//cut off first
//randomize
// done











    












