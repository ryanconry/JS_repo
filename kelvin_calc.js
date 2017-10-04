//Find degress Fahrenheit given Kelvin
const kelvin=prompt('What is the Kelvin temperature today');				//receive temp reading from user

const Celsius=kelvin-273;			//finding celsius given kelvin

let Fahrenheit= Celsius* (9/5) +32;		//find fahrenheit given celsius

Fahrenheit=Math.floor(Fahrenheit);		//rounding fahrenheit value

console.log('The temperature is '+Fahrenheit+' in degrees Fahrenheit')		//log fahrenheit to console