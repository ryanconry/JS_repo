//using classes to create a library media organization system

class Media{					//parent class media
  constructor(title){			//initialize class using constructor
    this._title= title;			//set title to parameter passed in
    this._isCheckedOut= false;	//by default the media is in the library
    this._ratings= [];			//collection of ratings given to the material		
  }
  
  get title(){					//getter for title
    return this._title;
  }
  get isCheckedOut(){			//getter for checked out status
    return this._isCheckedOut;
  }
  get ratings(){				//getter for array of ratings
    return this._ratings;
  }
  
  toggleCheckOutStatus(){		//check the book in/out depending on current state
    this._isCheckedOut=!this._isCheckedOut;
  }
  
  getAverageRating(){			//get average rating from array of ratings
    let sum=this._ratings.reduce(function(accumulated,current){		//find the sum using reduce
      return accumulated+current;
    })
    return sum / this._ratings.length;		//return computed average
  }
  
  addRating(rating){			//add another user rating to the array
    this._ratings.push(rating)
  }  
}

class Book extends Media{		//child class of Media called Book
  constructor(title,author,pages){		//constructor initializing
    super(title);				//passing the title parameter to the assignment in the parent class
    this._author=author;		//initializing author
    this._pages=pages;			//initializing page count
  }
  
  get author(){					//getter for author
    return this._author;
  }
  get pages(){					//getter for page count
    return this._pages;
  }
}

class Movie extends Media{		//child class of Media called Movie
  constructor(title,director,runTime){		//similar constructor to Book child class
    super(title);
    this._director=director;
    this._runTime=runTime;
  }
  
  get director(){
    return this._director;
  }
  
  get runTime(){
    return this._runTime;
  }
}

const historyOfEverything=new Book('A Short History of Everything','Bill Bryson', 544);  //create instance of book class

historyOfEverything.toggleCheckOutStatus();		//check the book out
console.log(historyOfEverything.isCheckedOut);	//log that the book is checked out
historyOfEverything.addRating(5);				//provided values for the ratings array
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());	//log the average rating for this class instance

const speed = new Movie('Speed','Jan de Bont',116);		//creating an instance for Movie class, similar to book instance

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());













