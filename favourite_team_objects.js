//keep track of your favourite teams roster and progress through the season using objects

const team={
  _players: [{firstName: "Chad", lastName: 'Chadingston', age:26},			//array of individual player objects
             {firstName: 'Brad', lastName: 'Bradingston', age: 27},
             {firstName: 'Vlad', lastName: 'Vladingston', age: 28}],
  _games: [{opponent: 'Tigers', teamPoints: 51, opponenetPoints: 41},		//array of game results
          {opponent: 'Broncos', teamPoints: 35, opponentPoints: 42},
          {opponent: 'Eagles', teamPoints: 14, opponentPoints: 10}],
  
  get players(){															//getter method for player stats
    return this._players;
  },
  
  get games(){																//getter method for game results
    return this._games;
  },
  
  set playersBirthday(BirthdayPlayer){										//use setter to wish player a happy birthday
    this._players.forEach(function(players){								//check the birthday players against the rosters entries using forEach
     	if(BirthdayPlayer==players.lastName){								//if the BirthdayPlayer matches the lastName
        players.age++;		//increment their age
        console.log(`Today is ${players.firstName} ${players.lastName}'s Birthday! They turned ${players.age}`)		//wish them a happy birthday
      }   
    })
  },
  
  addPlayer(firstName,lastName,age){										//add player to roster
    let newPlayer={															//new plalyer object
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(newPlayer);											//push new player object to player array
  },
   addGame(opponent,teamPoints,opponentPoints){								//add latest game results
    let newgame={															//latest game results object
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(newGame);												//push new game results to game array
  }
  
};

team.addPlayer('Steph','Curry',28);											//add new players by invoking method
team.addPlayer('Lisa','Leslie',35);
team.addPlayer('Bugs','Bunny',72);

console.log(team.players);													//log roster


team.playersBirthday='Bradingston';											//use setter to wish player a happy birthday