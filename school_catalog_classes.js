//create a school catalog with the aid of classes 

class School{									//create a School parent class
  constructor(name,level,numberOfStudents){		//constructor to initialize variables
    this._name=name;							
    this._level=level;
    this._numberOfStudents=numberOfStudents;
  }
  get name(){					//getters for school class
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  
  quickFacts(){					//method to declare attributes of the school
    console.log(`${this._name} educates ${this._numberOfStudents} students of ${this._level} age`);
  }
  
  pickSubstituteTeacher(sTeachers){		//method to pick a sub teacher at random from a pool of teachers
   return sTeachers[Math.floor(Math.random()*sTeachers.length-1)];
  }
  
  set numberOfStudents(numberOfStudents){		//setter method to modify number of students at school
    if(typeof numberofStudents == 'number'){
      this._numberOfStudents=numberOfStudents;
    }
    else{
      console.log('Number of students entered is not a valid number')
    }
  }
}

class Primary extends School{			//child class of School, Primary
  constructor(name,numberOfStudents,pickupPolicy){		//constructor inititalizing attributes as well as adding a pickup policy
    super(name,'primary',numberOfStudents);
    this._pickupPolicy=pickupPolicy;
  }
  
  get pickupPolicy(){					//getter for pickup policy
    return this._pickupPolicy;
  }
}

class Middle extends School{
  constructor(name,numberOfStudents){		//child class of School, Middle, similar to primary
    super(name,'Middle',numberOfStudents);
  }
}

class High extends School{					//child class of School,High, include sports teams at school
  constructor(name,numberOfStudents,sportsTeams){
    super(name,'High',numberOfStudents);
    this._sportsTeams=sportsTeams;
  }
  
  get sportsTeams(){
    return this._sportsTeams;
  }  
}

const substituteTeachers=['smith','richards','willis','howard','thomas'];		//declare pool of sub teachers

const Frederick = new Primary('Frederick',520,'Students will need to be picked up by parent/guardian or family member older than 13');		//create primary school instance 

console.log(Frederick.quickFacts());		//log the quick facts for Frederick Primary School
console.log(`Students at ${Frederick.name} will need to abide by the following policy: ` + Frederick.pickupPolicy);  //Display Frederick pickup policy

const Edwards = new High('Edwards', 300, ['hockey','football', 'baseball']);		//create high school instance
console.log(`The substitute at ${Edwards.name} today will be `+ Edwards.pickSubstituteTeacher(substituteTeachers))		//select a sub








