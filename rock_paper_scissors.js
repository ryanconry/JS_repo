/*Rock, paper, scissors game.  User picks either rock, paper, scissors.  The computer generates
a random choice.  The winner is determined*/

const getUserChoice = (userInput) =>{			//function to check user's choice
  userInput=userInput.toLowerCase();
  if(userInput!=='rock' && userInput!=='paper' && userInput!=='scissors'){
    console.log('Invalid Entry'); } 			//if user input is not rock/paper/sciessors it is invalid
    else{
      return userInput;							//user input is valid, return
    } 
}

const getComputerChoice=()=>{					//function for computers choice
  num=Math.floor(Math.random()*2);				//generate random number between 0 and 2
  switch(num){									//user generated number to get computers choice
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    }
}

const determineWinner=(userChoice,computerChoice)=>{		//function for determining the winner
  if(userChoice===computerChoice){				//check for tie
    return 'The game was a tie';
  }
  else{																
    if(userChoice==='rock'){					//check winner if user has rock
      if(computerChoice==='paper'){
        return 'Computer wins';
      }
      else{
        return 'User wins';
      }
    }

    if(userChoice==='paper'){					//check winner if user has paper
      if(computerChoice==='scissors'){
        return 'Computer wins';
      }
      else{
        return 'User Wins';
      }
    }

    if(userChoice==='scissors'){				//check winner if user has paper
      if(computerChoice==='rock'){
        return 'Computer wins';
      }
      else{
        return 'User Wins';
      }
    }
  }
}

const playGame=()=>{							//function to play the game
  const userChoice=getUserChoice('rock');		//declaring verified user's choice
  const computerChoice=getComputerChoice();		//declaring computers choice
  console.log('The user chose ' + userChoice + '. The computer chose ' + computerChoice + '.');
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();										//play rock,paper,scissors
