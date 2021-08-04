/*Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.*/


function factorial(number) {
    var fact = 1;
    var i = 1;
    while (i <= number) {
        fact = fact * i;
        i++;
    }
    return fact;
}
var number1 = factorial(7);
console.log(number1);
var number2 = factorial(3);
console.log(number2);
var number3 = factorial(5);
console.log(number3);
var number4 = factorial(13);
console.log(number4);


// in a reverse way
function factorial(number) {
    var fact = 1;
    var i = number;
    while (i >= 1) {
        fact = fact * i;
        i--;
    }
    return fact;
}
var number5 = factorial(9);
console.log(number5);