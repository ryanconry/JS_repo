const myAge=26;				//setting my age
let earlyYears=2;			//first 2 human years 
earlyYears *= 10.5;		//converting first human years to dog years
const laterYears = 4*(myAge-earlyYears);  //find remaining human years in dog years

const myAgeInDogYears= earlyYears+laterYears;  //add early and later dog years

let myName = 'Ryan';						//set name
myName=myName.toLowerCase();		//remove uppercase letters
console.log('My name is '+ myName + '.  I am ' + myAgeInDogYears+ ' years old in dog years.')  //print name and dog years to console