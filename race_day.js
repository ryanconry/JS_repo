/*Assigning numbers to runners based on when they registered.  Inform runners of race time based on age and registration*/

let raceNumber = Math.floor(Math.random()*1000);		//generate random number for runner
const earlyRegister=false;					//did runner register early
const age=26;								//age of runner

if(!earlyRegister){
  raceNumber+=1000;							//late registers get higher numbers
}

if(age>18 && earlyRegister){				//older than 18 and registered early
  console.log('Your race number is ' + raceNumber + ' and youre race time is 9:30 am');
}
else if(age > 18 || earlyRegister){			//older than 18 or registered early
  console.log('Your race number is ' + raceNumber + ' and youre race time is 11:00 am');
}
else if(age <=18 && !earlyRegister){		//18 and under and did not register early
  console.log('Your race number is ' + raceNumber + ' and youre race time is 12:30 pm');
}
else{
  console.log("Please see help desk");
}