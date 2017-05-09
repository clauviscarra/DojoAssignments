//Get numbers of any given string, print integers
var str = "12a45bccc7"

function getDigits(str){
  var newString = "" //declare a new string variable
  for (var i = 0; i < str.length; i++){ // for loop over elements in the string
    if(parseInt(str[i]) || parseInt(str[i]) === 0){ // check for numbers and zeroes
      newString += str[i] //newString = newString + str[i]// building new string of just numbers (still string numbers)
    }
  }
  console.log(Number(newString)) //convert newString to number and return
}

getDigits(str);
