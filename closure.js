/* Javascript closure */

/* Definition: You can think of closure as a way to “remember” and continue to
access a function’s scope (its variables) even once the function has
finished running */

function adderMinus(x){
  function minus(y){
    return y - x;
  };
  return minus;
}

// Passing 3 to x
// Important: Every time you will call adderMinus(), It will return a reference to inner function. i,e in this case minus();
var minusTen = adderMinus(3); // storing the reference function

// Note: minusTen now have the reference to minus();

// Also minus(), remember the value of 'x' you passed. i,e 3

//  Here we are passing '10' is the value of 'y'
// Important: Again remember ::  addTen() is a reference of minus();
minusTen(10); // 7 (output)

// So backend scenario will be like: CHECK LINE NUMBER 9. "return 10 - 3 "


// ANOTHER EXAMPLE

var minusTwo = adderMinus(6);
minusTwo(2); // -4


// EXTRA: Everytime you will call adderMinus(); it will return a reference of inner function. And the inner function "minus()" 
// will always remeber the value of "x" you pass to adderMinus()
