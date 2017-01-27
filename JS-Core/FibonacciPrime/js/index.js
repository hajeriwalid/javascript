/****
@author Walid Hajeri
25/11/2016
****/

/**
Checks if the number n is prime number
**/
function is_prime(n){
  
  var remaining;
  var found =  new Boolean(false); 
  
  if (n <2 ) {
    return false;
  }
  
  else {
    for (var i = 2; i <= n-1; i++){
      remaining = n % i;
      if (remaining == 0){
          return false;
      }
    }
  }
  return(true);
}


/**
Returns the Fibonacci number
**/
function fibo_walid(n){
      var sum = 0;
      if (n <=1 ) return n;
      else {
        while (n>0){
          sum=sum+ fibo_walid(n-1);
          n--;
        }
      }

      return sum;
}

fibo_form.onsubmit = function(e) {
  var x = parseInt(document.getElementById('okokok').value);
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
     
  return false;
}