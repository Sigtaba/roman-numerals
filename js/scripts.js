// // Back End Logic //
//
//     var I = 1
// var II = 2
// var III = 3
// var IV = 4
//     var V = 5
// var VI = 6
// var VII = 7
// var VIII = 8
// var IX = 9
//     var X = 10
// var XX = 20
// var XXX = 30
// var XL = 40
//     var L = 50
// var LX = 60
// var LXX = 70
// var LXXX = 80
// var XC = 90
//     var C = 100
// var CC = 200
// var CCC = 300
// var CD = 400
//     var D = 500
// var DC = 600
// var DCC = 700
// var DCCC = 800
// var CM = 900
//     var M = 1000
// var MM = 2000
// var MMM = 3000

// var arrayMain = [I, V, X, L, C, D, M]
// var arraySubtract = [IV, IX, XL, XC, CD, CM]
// var arrayAll = [I, II, III, IV, V, VI, VII, VIII, IX, X, XX, XXX, XL, L, LX, LXX, LXXX, XC, C, CC, CCC, CD, D, DC, DCC, DCCC, CM, M, MM, MMM]
var arrayOnes = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
// var arrayTens = [X, XX, XXX, XL, L, LX, LXX, LXXX, XC]
// var arrayHundres = [C, CC, CCC, CD, D, DC, DCC, DCCC, CM]
// var arrayThousands = [M, MM, MMM]
var newArray = [];

// for (var i = 0; i < arrayAll.length; i++) {
function romanNumerals(userInput) {
  var newUserInput = [];
  var userInputAsString = userInput.toString();
  if (userInput < 10) {
    newUserInput.push(userInputAsString.replace(userInputAsString.charAt(0), arrayOnes[(parseInt(userInput) - 1)]))
  }
  return newUserInput;
}
// Front End Logic //

$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#number").val());
    if (userInput <= 0 || userInput > 3999)
    {
      alert("Please enter a number between 1 and 3999");
    }
    var result = romanNumerals(userInput);
    alert(result);

  })
});

// var output = userInput.replace(userInput[0], "2");
// alert(output);
