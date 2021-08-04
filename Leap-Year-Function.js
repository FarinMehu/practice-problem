// Write a function that returns true if a year is a leap, otherwise return false.

function isLeapYear() {
    if ((year % 4 == 0) || (year % 100 == 0) || (year % 400 == 0)) {
        return true;
    }
    return false;
}
var year = 2000;
var result = isLeapYear(year);
console.log(result);
year = 1900;
result = isLeapYear(year);
console.log(result);
year = 2021;
result = isLeapYear(year);
console.log(result);
year = 1850;
result = isLeapYear(year);
console.log(result);
year = 1565;
result = isLeapYear(year);
console.log(result);
year = 1920;
result = isLeapYear(year);
console.log(result);
year = 1924;
result = isLeapYear(year);
console.log(result);
year = 1928;
result = isLeapYear(year);
console.log(result);
year = 1940;
result = isLeapYear(year);
console.log(result);
