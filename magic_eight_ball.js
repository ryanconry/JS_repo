const userName = 'Ryan';
userName ? console.log('Hello '+ userName+'!') : console.log('Hello!')		//welcome user by name if provided, otherwise say hello

const userQuestion = 'Will it rain today?';		//question for 8 ball

const randomNumber=Math.floor(Math.random()* 7);		//random number between 0 and 7

let eightBall='';		//declare eight ball variable

switch(randomNumber){						
  case 0:
 		eightBall='It is certain';
  	break;
  case 1:
 		eightBall='It is decidedly so';
  	break;
  case 2:
 		eightBall='Reply Hazy, try again';
  	break;
  case 3:
 		eightBall='Cannot predict now';
  	break;
  case 4:
 		eightBall="Don't count on it";
  	break;
  case 5:
 		eightBall='My sources say no';
  	break;
  case 6:
 		eightBall='Outlook not so good';
  	break;
  case 7:
 		eightBall='Signs point to yes';
  	break;
}

console.log(userName + 'asks "' + userQuestion +'".');
console.log('The Magic 8 Ball responsds: ' + eightBall);