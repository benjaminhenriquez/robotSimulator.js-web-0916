'use strict';

var directions = ['north', 'east', 'south', 'west'];

function Robot(bearing,coordinates) {
  // implement your solution here!
  this.bearing = bearing;
  this.coordinates = coordinates;
}

Robot.prototype.orient = function(orientation){
  if (directions.includes(orientation)){
  this.bearing = orientation;
  }
  else {
    throw new Error("Invalid Robot Bearing");
  }
};

Robot.prototype.turnRight = function(){
  if(this.bearing === 'north'){
    this.bearing = 'east'
  }
  else if (this.bearing === 'east'){
    this.bearing = 'south'
  }
  else if (this.bearing === 'south'){
    this.bearing = 'west'
  }
  else if (this.bearing === 'west'){
    this.bearing = 'north'
  }
};
//
//
Robot.prototype.turnLeft = function (){
  if(this.bearing === 'north'){
    this.bearing = 'west'
  }
  else if (this.bearing === 'west'){
    this.bearing = 'south'
  }
  else if (this.bearing === 'south'){
    this.bearing = 'east'
  }
  else if (this.bearing === 'east'){
    this.bearing = 'north'
  }
};

Robot.prototype.at = function (x, y){
  this.coordinates = [x,y];
  return this.coordinates;
};


Robot.prototype.advance = function (){
  if(this.bearing === 'north'){
    this.coordinates[1] += 1;
  }
  else if(this.bearing === 'south'){
    this.coordinates[1] -=1;
  }
  else if(this.bearing === 'east'){
    this.coordinates[0] +=1;
  }
  else if(this.bearing === 'west'){
    this.coordinates[0] -=1;
  }
};

Robot.prototype.instructions = function(instructionsString){
  var array = instructionsString.split('');
  var instructionArray = [];
  for (var i = 0; i < array.length; i++){
    if(array[i] === 'R' ){
      instructionArray.push("turnRight");
    }
    else if (array[i] === 'L') {
      instructionArray.push("turnLeft");
    }
    else if (array[i]==='A') {
      instructionArray.push("advance");
    }
  }
  return instructionArray;
};

Robot.prototype.place = function (object){
  this.coordinates = [];
  this.coordinates[0] = object["x"];
  this.coordinates[1] = object["y"];
  this.bearing = object["direction"];
}

Robot.prototype.evaluate = function (string){
  var array = string.split('');
  for (var i = 0; i < array.length; i++){
    if(array[i] === 'R' ){
      this.turnRight();
    }
    else if (array[i] === 'L') {
      this.turnLeft();
    }
    else if (array[i]==='A') {
      this.advance();
    }
  }
}
