// Write a function that returns true if a number is a even/odd, otherwise return false.
// for even number check 
function isEven() {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}
var num = 5;
var result = isEven(num);
console.log("Number is even.It is ", result);

// for Odd number check 
function isOdd() {
    if (num % 2 != 0) {
        return true;
    }
    return false;
}
var num = 4;
var result = isOdd(num);
console.log("Number is Odd.It is ", result);
var num = 7;
var result = isOdd(num);
console.log("Number is Odd.It is ", result);