let userName, userBirthYear, aSquare, rCircle, distance, time, userUSD;
const currentYear = 2022;
const euroToUSD = 1.06;

//Norm 1
userName = prompt('What\'s your name?');
alert(`Hello, ${userName}!!!`);

//Norm 2
userBirthYear = prompt('What\'s your year of birth?');
alert(`...so you are ${currentYear - userBirthYear} years old`);

//Norm 3
aSquare = prompt('quickly, give me a side of a square!');
alert(`here's its perimeter: ${aSquare*4}`);

//Max 1
rCircle = prompt('and also I need a radius of a circle');
alert(`...and area of this circle will be ${Math.PI*Math.pow(rCircle, 2)}`);

//Max 2
distance = prompt('give me distance between two cities (in kilometers, please)');
time = prompt('and how much hours can you spend on your journey?')
alert(`you need to move with a speed of ${distance / time}km/h`);

//Max 3
userUSD = prompt('how much USD would you like to excange?');
alert(`you'll get ${userUSD*euroToUSD} euros`);