/****
Core javascript playground
Based on ECMAScript 6 
@author Walid Hajeri
****/



fibo_form.onsubmit = function(e) {

  var y = document.getElementById('okokok').value;
  

  /*****  Parsing input, checking Number type, converting to a Number  ****/
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