var a = "50";
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;

var expression1 = (b === e);
var expression2 = (e < d);

// Use comparison operators so all expressions below log to the console as true
console.log(a == b);
console.log(b == e);
console.log(c > b);
console.log(d === 0);

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && !expression2); 
console.log(expression1 || expression2);
  
//expression 1 = b===e = b=50 e=50  true
//expression 2 = e < d  e=50 d=0  