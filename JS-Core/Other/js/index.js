/****
Core javascript playground
Based on ECMAScript 6 
@author Walid Hajeri
****/


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


fibo_form.onsubmit = function(e) {

  var y = document.getElementById('okokok').value;
  

  /*****  Parsing input, checking  type, converting to a Number  ****/
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