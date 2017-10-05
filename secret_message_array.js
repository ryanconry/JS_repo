//Manipulate elements of an array of strings

let secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "- 2015,", "Chris", "Pine,", "Learn", "JavaScript"];		//secret message array
let replaceArray=['get','easily','the','first','time'];			//elements of array to be replaced


secretMessage.pop();  											//remove last value in array
secretMessage.push('to','program');								//add values to array
secretMessage[secretMessage.findIndex(function (element){		//finding index of easily
  return element=="easily";})]='right';							//replacing easily with right
secretMessage.shift();											//remove first element
secretMessage.unshift('Programming');							//add programming as first element

let spliceIndex=secretMessage.findIndex(function (element1){	//finding index of easily
  return element1==replaceArray[0];});							//get index of first element to be spliced

secretMessage.splice(spliceIndex,replaceArray.length,'know')	//splice the array and replace with 'know'

console.log(secretMessage.join(" "));