/****
Core javascript playground
Based on ECMAScript 6 
@author Walid Hajeri
****/



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
      };
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

/*
      if (x<0) alert ("please enter a positive number");
      else {

        
             //alert('Corresponding Fibonacci number : ' + fibo_walid(x));
             var toDisplay= "Corresponding Fibonacci number : " + fibo_walid(x);

             document.getElementById("myoutput").innerHTML =  toDisplay ;

          
          if (is_prime(x)) {
            var toDisplay2 = x + ' is a prime number ';
            //alert(toDisplay2);
            document.getElementById("myoutput2").innerHTML =  toDisplay2 ;

          } 

          else {
            var toDisplay3 = x + ' is NOT a prime number';
            //alert(toDisplay3);
            document.getElementById("myoutput2").innerHTML =  toDisplay3 ;

          } 

      }
      */

      return false;
    }