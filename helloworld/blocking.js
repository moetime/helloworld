/** blocking library **/

var fs = require('fs');

// open and read food list

var food = fs.readFileSync('food.txt', 'utf8');
console.log('FOOD');

// print food list
console.log(food);

/** blocking library **/



var ds = require('ds');

// open and read food list

var drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log('DRINKS');

// print food list
console.log(drinks);
