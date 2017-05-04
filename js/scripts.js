// // Back End Logic //

var arrayOnes = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
var arrayTens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
var arrayHundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
var arrayThousands = ["", "M", "MM", "MMM"]
var newArray = [];

function romanNumerals(userInput) {
  var newUserInput = [];
  var userInputAsNumber = parseInt(userInput);
  var userInputAsString = userInput.join("");
  if (userInput < 10) {
    console.log('hello from < 10');
    newUserInput.push(userInputAsString.replace(userInputAsString.charAt(0), arrayOnes[userInput]));
  } else if (parseInt(userInputAsString) < 100) {
    console.log(parseInt(userInputAsString), userInputAsString, typeof userInputAsString);
    newUserInput.push(userInput[0].replace(userInput[0], arrayTens[parseInt(userInput)]));
    newUserInput.push(userInput[1].replace(userInput[1], arrayOnes[parseInt(userInput[1])]));
    newUserInput = newUserInput.join("");
  } else if (parseInt(userInputAsString) < 1000) {
    console.log('hello from < 1000');
    newUserInput.push(userInput[0].replace(userInput[0], arrayHundreds[parseInt(userInput)]));
    newUserInput.push(userInput[1].replace(userInput[1], arrayTens[parseInt(userInput[1])]));
    newUserInput.push(userInput[2].replace(userInput[2], arrayOnes[parseInt(userInput[2])]));
    newUserInput = newUserInput.join("");
  } else if (parseInt(userInputAsString) < 4000) {
    console.log('hello from < 10000');
    newUserInput.push(userInput[0].replace(userInput[0], arrayThousands[parseInt(userInput)]));
    newUserInput.push(userInput[1].replace(userInput[1], arrayHundreds[parseInt(userInput[1])]));
    newUserInput.push(userInput[2].replace(userInput[2], arrayTens[parseInt(userInput[2])]));
    newUserInput.push(userInput[3].replace(userInput[3], arrayOnes[parseInt(userInput[3])]));
    newUserInput = newUserInput.join("");
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
      return;
    }
    userInput = userInput.toString().split("");
    var result = romanNumerals(userInput);
    alert(result);

  })
});

// var output = userInput.replace(userInput[0], "2");
// alert(output);
