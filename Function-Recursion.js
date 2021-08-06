// fractional count in a recursive way 

function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
var myNum = factorial(7);
console.log(myNum);