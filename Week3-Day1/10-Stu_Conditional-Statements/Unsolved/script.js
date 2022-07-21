// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x < 25); //false
var expression2 = (x > 50); //false
debugger;

// Write Your JavaScript Code Here
if (!expression1 && !expression2){
    console.log("true true");
}else if (!expression1 || expression2){
console.log("true false")
}