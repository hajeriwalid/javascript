/****
Core javascript playground
Based on ECMAScript 6 
@author Walid Hajeri
****/


/***** Intro to Objects  ******/

var firstObj = {

  name: "jimmy",
  "age": 22,
  car: {
    brand: "Dodge",
    model: "Viper"
  },
  testmethod : function(a,b){
    console.log("function property of an object");
    console.log(this,a,b);
  }
};

console.log(firstObj.name);
console.log(firstObj.car.model);
console.log(firstObj.somethingundefined || "we could not find this property");

var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type              = 'whatever';
myObj['date created']   = '14 jan';
myObj[str]              = 'hello';
//myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

console.log(myObj);

/************ This Keyword **************/
var fn = function(a,b){
  console.log(this,a,b); // this is bound to the Global object
}

fn(5,6);
fn.call(3,7,8); // .call binds this keyword to 3
firstObj.testmethod.call(2,1,9);

/************ OO JS  - Static Stuff  *****************/ 


// js eq of a public static method
Animal.getType = function (){
return "Object Animal";
};

// js eq of a public static variable 
Animal.version = "1.0";

console.log(Animal.getType() ); 
console.log(Animal.version);




/************ OO JS  - Prototypes to handle inheritance  *****************/ 


function Animal(x,y) {
  this.height='';
  this.weight='';
  this.posx=x;
  this.posy=y;

  this.move = function(){
    this.posx++;
    this.posy++;
    console.log("Animal is walking");
  }
  console.log("Animal constructor...");
}




function Dog(){
  Animal.call(5,10); // call the constructor of the parent

 console.log("posx : " + this.posx);
 console.log("posy : " + this.posy);

  this.move = function(){
    this.posx= posx+3;
    this.posy=this.posy+3;
    console.log("Dog is walking");
  }
}

Dog.prototype = Object.create(Animal.prototype); //inheritance


var mydog = new Dog;

mydog instanceof Dog; //returns true

mydog.move();
console.log("posx : " + mydog.posx);
console.log("posy : " + mydog.posy);

//Overriding example
function Player() {
  this.isAvailable = function() {
    return "Instance method says - he is hired";
  };
}
Player.prototype.isAvailable = function() {  // we use use the this keyword to initialize properties in a constructor
  return "Prototype method says - he is Not hired";
};
var crazyBob = new Player();
console.log(crazyBob.isAvailable());



/***** Using Array.reduce to sum all elements in an array without looping :  -- see below for arrow functions  ******/
var total = [0, 1, 2, 3].reduce((accumulator, currentValue)=> accumulator + currentValue,0);
console.log( total);

var totalwithinitialvalue = [0, 1, 2, 3].reduce((a, b)=> a + b,15);
console.log( totalwithinitialvalue);


/****** use the map method on array **********/
var numbers = [1, 5, 10, 15];
var numbersdouble = numbers.map(function(x){
  return (x*2);
})
console.log(numbersdouble);

/****** use the map method on array with arrow function **********/
var numbers = [1, 5, 10, 15];
var numberstriple = numbers.map( x => x*3 );

console.log(numberstriple);
//iterate over an array
for ( let i of numberstriple ){  //let permet de déclarer des variables dont la portée est limitée à celle du bloc dans lequel elles sont déclarées
  console.log(" triple : " + i);
}


//clarifyin let ...
function letTest() {
  let x = 31;
  if (true) {
    let x = 71;  // c'est une variable différente
    console.log(x);  // 71
  }
  console.log(x);  // 31
}

/***** promises, way to handle asynchronicity ****/
var prom = new Promise(function(resolve,reject){
  setTimeout(myarrowfun,4000);

  if(1==1) resolve("cool");
  else {
    reject("not cool");
  }
})

prom.then(function(){
  console.log("done");
}
  ).catch(function(){
    console.log("error");
  });

/*****  Arrow functions  ****/
var myarrowfun = x => x+2 ;
var mysecondarrowfun = (x,y) => x*y;
var anotherarrowfun = () => {console.log("one line");
                              console.log("another one");
                            }


var getTempItem = id => ({ id: id, name: "Temp" });
/*eq to this object literal
var getTempItem = function(id) {

    return {
        id: id,
        name: "Temp"
    };
};
*/

console.log(myarrowfun(5));
console.log(mysecondarrowfun(5,6));
anotherarrowfun();
console.log(" id : " + getTempItem(55).id + " name :" + getTempItem.name );







  /*****  Closure example  ****/

function addLinks () {

  for (var i=0, link; i<5; i++) {
    link = document.createElement("a");

    link.innerHTML = "Link " + i;
    link.onclick = function (num) {
      return function () {
        alert(num);
      }; // function() { ... } syntax returns a function objec
    }(i);
    document.body.appendChild(link);
  }

}
window.onload = addLinks;



/****** another closure example ****/
// Inner functions can refer to variables defined in outer functions even after the latter have returned.

function setLocation(city) {
  var country = "France"; 

  function printLocation() {       
    console.log("You are in " + city + ", " + country);  
  }

  return printLocation;
}

var currentLocation = setLocation ("Paris");   

console.log(currentLocation()); 




/*****  Parsing input, checking  type, converting to a Number  ****/
fibo_form.onsubmit = function(e) {

  var y = document.getElementById('okokok').value;
  

  console.log(typeof y);

  if(y.isInteger) 
    console.log("test 1, integer");
  else {
    console.log("test 1, not an integer");
  }
  var x = parseInt(y);
  
  console.log(typeof x);

  if(Number.isInteger(x)) 
    console.log("test 2, now we have an integer");
  else{
   console.log("test 2, not  an integer");
 }
      return false;
}