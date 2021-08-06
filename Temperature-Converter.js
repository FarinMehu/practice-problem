// Create a function that converts Celsius to Fahrenheit and vice versa.

/*Note: °C to °F --> Divide by 5, then multiply by 9, then add 32
      °F to °C --> Deduct 32, then multiply by 5, then divide by 9*/

function cTof(celsius) {
    var cTemp = celsius;
    var cToFar = cTemp * 9 / 5 + 32;
    var message = cTemp + '\xB0C is ' + cToFar + ' \xB0F.';
    console.log(message);
}
cTof(60);
function fToc(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp + '\xB0F is ' + fToCel + ' \xB0C.';
    console.log(message);
}
fToc(19);